import React from 'react'
import PropTypes from 'prop-types'
import MUIGrid from '@material-ui/core/Grid'

const GridContainer = ({ children, spacing }) => {
  return (
    <MUIGrid container spacing={spacing}>
      {children}
    </MUIGrid>
  )
}

GridContainer.defaultProps = {
  spacing: 3,
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
}

export default GridContainer
