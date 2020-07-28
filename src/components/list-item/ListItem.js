import React from 'react'
import { object, string } from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const ListItem = ({ classes, item }) => {
  return (
    <div className={classes.item}>
      <h3>{item}</h3>
    </div>
  );
};

ListItem.propTypes = {
  classes: object.isRequired,
  item: string
}

ListItem.defaultProps = {
  item: ''
}

export default withStyles(styles)(ListItem);
