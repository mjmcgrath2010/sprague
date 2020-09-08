import React from 'react'
import PropTypes from 'prop-types'
import MUIContainer from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {},
}))

const Container = ({ fluid, fixed, children, ...rest }) => {
  return (
    <MUIContainer disableGutters={fluid} fixed={fixed} maxWidth="xl" classes={useStyles()} {...rest}>
      {children}
    </MUIContainer>
  )
}

Container.defaultProps = {
  fluid: false,
  fixed: false,
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  fixed: PropTypes.bool,
}

export default Container
