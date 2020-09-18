import React, { useState } from 'react'
import AuthenticationContext from '../../utils/AuthenticationContent'

const AuthenticationLayout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true)
  setTimeout(() => {
    setLoggedIn(false)
  }, 5000)

  return <AuthenticationContext.Provider value={{ loggedIn }}>{children}</AuthenticationContext.Provider>
}

export default AuthenticationLayout
