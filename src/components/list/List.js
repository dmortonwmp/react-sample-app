import React from 'react'
import styles from './styles';
import { object, arrayOf, string } from 'prop-types';
import ListItem from '../list-item';
import { withStyles } from '@material-ui/core';

const List = ({ classes, items }) => {
  console.log(items);
  return (
    <div className={classes.container}>
      {items.map(item => {
        return <ListItem item={item} />
      })
      }
    </div>
  );
};

List.propTypes = {
  classes: object.isRequired,
  items: arrayOf(string)
};

List.defaultProps = {
  items: []
};

export default withStyles(styles)(List);
