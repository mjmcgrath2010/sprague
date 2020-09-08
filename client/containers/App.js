import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>

        <Route exact path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
