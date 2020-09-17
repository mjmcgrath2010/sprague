import React from 'react'
import PropTypes from 'prop-types'
import MUIGrid from '@material-ui/core/Grid'

const GridItem = ({ children, colSm, colMd, colLg, colXL, colWidth }) => {
  return (
    <MUIGrid item xs={colWidth} sm={colSm} md={colMd} lg={colLg} xl={colXL}>
      {children}
    </MUIGrid>
  )
}

GridItem.defaultProps = {
  colSm: 12,
  colMd: false,
  colLg: false,
  colXL: false,
  colWidth: 12,
  justify: 'flex-start',
}

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  colSm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, false]),
  colMd: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, false]),
  colLg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, false]),
  colXL: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, false]),
  colWidth: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

export default GridItem
