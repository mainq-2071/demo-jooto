import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';
import { Box } from '@material-ui/core'

const Tasks = (props) => {
  const { listId } = props
  const tasks = useSelector((state) => state.tasks.value)

  const showTasks = tasks && tasks.filter(task => task.list_id === listId)
    .map((validTask, index) => {
      return (
        <Box
          key={index}
        >
          <Task
            task={validTask}
          />
        </Box>
      )
    })

  return (
    <Box
      className='jooto__task-list'
    >
      {showTasks}
    </Box>
  )
}

export default Tasks
