import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
