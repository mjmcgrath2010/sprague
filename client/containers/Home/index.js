import React from 'react'
import HomePage from '../../layouts/public/HomeLayout'

const Home = props => {
  return (
    <HomePage>
      <HomePage.Hero>
        <h1>Mike</h1>
      </HomePage.Hero>
      <HomePage.Featured>
        <h1>Featured</h1>
      </HomePage.Featured>
    </HomePage>
  )
}

export default Home
