import React, { useState } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core';
import { object, func } from 'prop-types';
import styles from './styles';

const AddItem = ({ classes, submit }) => {

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    submit(value);
  }

  return (
    <div className={classes.container}>
      <TextField variant='outlined' onChange={handleChange} placeholder='Enter a new item'/>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

AddItem.propTypes = {
  classes: object.isRequired,
  submit: func.isRequired
};

export default withStyles(styles)(AddItem);
