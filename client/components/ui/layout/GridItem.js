import React from 'react'
import PropTypes from 'prop-types'
import MUIGrid from '@material-ui/core/Grid'

const GridItem = ({ children, colSm, colMd, colLg, colXs, colXL }) => {
  return (
    <MUIGrid item xs={colXs} sm={colSm} md={colMd} lg={colLg} xl={colXL}>
      {children}
    </MUIGrid>
  )
}

GridItem.defaultProps = {
  colSm: 12,
  colMd: 12,
  colLg: 12,
  colXs: 12,
  colXL: 12,
  justify: 'flex-start',
}

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  colSm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  colMd: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  colLg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  colXs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  colXL: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

export default GridItem
