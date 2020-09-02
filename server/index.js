require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const webpack = require('webpack');

const webpackConfig = require('../config/webpack/index');

const apiRoutes = require('./api/routes/index')

const webpackCompiler = webpack(webpackConfig);
app.use(
	require('webpack-dev-middleware')(webpackCompiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath,
	}),
);
app.use(
	require('webpack-hot-middleware')(webpackCompiler, {
		path: '/__webpack_hmr',
	}),
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api', apiRoutes)

app.use(express.static('public'))

app.listen(process.env.PORT, () => {
	console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
