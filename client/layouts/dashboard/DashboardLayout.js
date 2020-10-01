import React, { useContext, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import GridContainer from '../../components/ui/layout/GridContainer'
import NavBar from '../../components/ui/NavBar'
import Container from '../../components/ui/layout/Container'
import AuthenticationLayout from './Authenication'
import AuthenticationContext from '../../utils/AuthenticationCotext'

const DashboardLayout = ({ children }) => {
  return (
    <AuthenticationLayout>
      <AuthenticationContext.Consumer>
        {({ loggedIn }) =>
          loggedIn ? (
            <Fragment>
              <NavBar />
              <Container>
                <GridContainer>{children}</GridContainer>
              </Container>
            </Fragment>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          )
        }
      </AuthenticationContext.Consumer>
    </AuthenticationLayout>
  )
}

export default DashboardLayout
