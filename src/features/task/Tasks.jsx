import React from 'react'
import Task from './Task';
import { Box } from '@material-ui/core'
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

const Tasks = (props) => {
  const { listId } = props

  const tasks = useSelector((state) => state.tasks.value)

  const showTasks = tasks.length > 0 && tasks.filter(task => task.list_id === listId)
    .sort((a, b) => (a.offset < b.offset) ? 1 : ((b.offset < a.offset) ? -1 : 0))
    .map((validTask, index) => {
      return (
        <Task
          task={validTask}
          key={validTask.id}
          index={index}
        />
      )
    })

  return (
    <Droppable
      droppableId={listId}
    >
      {provided => (
        <Box
          className='jooto__task-list'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {showTasks}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  )
}

export default Tasks
