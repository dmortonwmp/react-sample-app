import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import { object, arrayOf, string } from 'prop-types';
import List from '../list';

const Home = ({ classes, items }) => {
  if (items.length === 0) {
    return <div></div>;
  }
  
  return (
    <div className={classes.container}>
      <List items={items} />
    </div>
  )
}

Home.propTypes = {
  classes: object.isRequired,
  items: arrayOf(string)
}

export default withStyles(styles)(Home);
