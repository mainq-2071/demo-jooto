import React from 'react'
import { Typography } from '@material-ui/core';

const Task = (props) => {
  const { task } = props

  return (
    <div className='task-item'>
      <Typography
        className='task-item__title'
        variant='h5'
      >
        {task.name}
      </Typography>
    </div>
  )
}

export default Task
