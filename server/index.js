require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const path = require('path')

const webpackConfig = require('../config/webpack/index')
const apiRoutes = require('./api/routes/index')

const app = express()
const webpackCompiler = webpack(webpackConfig)

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Apply React HMR
    if (process.env.NODE_ENV !== 'production') {
      app.use(
        require('webpack-dev-middleware')(webpackCompiler, {
          noInfo: true,
          publicPath: webpackConfig.output.publicPath,
        })
      )

      app.use(
        require('webpack-hot-middleware')(webpackCompiler, {
          path: '/__webpack_hmr',
        })
      )
    }

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    // api routes
    app.use('/api', apiRoutes)
    // Handle react requests

    // Static built assets
    app.use('/assets', express.static('public/assets'))

    // Handle All React Requests
    app.use('/*', (req, res, next) => {
      const options = {
        root: path.join(__dirname + '/../public'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true,
        },
      }
      res.sendFile('index.html', options, function(err) {
        if (err) {
          next(err)
        }
      })
    })

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening at http://localhost:${process.env.PORT}`)
    })
  })
  .catch(e => {
    console.log(e)
  })
