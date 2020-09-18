import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import muiTheme from '../styles/muiTheme'
import styledTheme from '../styles/styledTheme'

import Home from './Home'
import DashboardContainer from './Dashboard'
import Login from './Login'

const Button = styled.button`
  border-color: ${({ theme }) => theme.success};
  color: ${({ theme }) => theme.success};
  background: #fff;
  padding: 2em;
`

const App = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={styledTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/about">
              <h1>Hello</h1>
              <Button>Click Me</Button>
            </Route>

            <Route path="/dashboard">
              <DashboardContainer />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default App
