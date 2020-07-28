import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import styles from './styles'
import { object, func } from 'prop-types';

const Navigation = ({ classes, handleAddItem }) => {
  return (
    <div className={classes.navigation}>
      <h2>Task List</h2>
      <Button onClick={handleAddItem}>Create Item</Button>
    </div>
  )
}

Navigation.propTypes = {
  classes: object.isRequired,
  handleAddItem: func.isRequired
}

export default withStyles(styles)(Navigation);
