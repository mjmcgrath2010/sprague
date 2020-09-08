import React from 'react'
import Container from '../../components/ui/layout/Container'
import GridContainer from '../../components/ui/layout/GridContainer'
import GridItem from '../../components/ui/layout/GridItem'

const Home = props => {
  return (
    <Container>
      <GridContainer>
        <GridItem colWidth={6}>
          <h1>Home</h1>
        </GridItem>
        <GridItem colWidth={6}>
          <h1>Home</h1>
        </GridItem>
        <GridItem>
          <h1>Home</h1>
        </GridItem>
      </GridContainer>
    </Container>
  )
}

export default Home
