import React from 'react'
import GridContainer from '../../components/ui/layout/GridContainer'
import GridItem from '../../components/ui/layout/GridItem'
import HomePage from '../../layouts/public/HomeLayout'

const Home = props => {
  return (
    <HomePage>
        <GridItem colWidth={6}>
          <h1>Home Mike</h1>
        </GridItem>
        <GridItem colWidth={6}>
          <h1>Home Mike</h1>
        </GridItem>
        <GridItem>
          <h1>Home</h1>
        </GridItem>
    </HomePage>
  )
}

export default Home
