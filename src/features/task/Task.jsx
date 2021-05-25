import React from 'react'
import { Typography, Box } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
  const { task, index } = props

  return (
    <Draggable
      draggableId={task.id}
      index={index}
    >
      {provided => (
        <Box
          className='task-item'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Typography
            className='task-item__title'
            variant='h5'
          >
            {task.name}
          </Typography>
        </Box>
      )}
    </Draggable>
  )
}

export default Task
