import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task';
import { Box } from '@material-ui/core'
import { setTasks } from './taskSlice';

const Tasks = (props) => {
  const { listId } = props
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = async () => {
    try {
      let tasks = [
        {
          id: 1,
          name: 'This is task',
          list_id: 1
        },
        {
          id: 2,
          name: 'You can add a task asap!',
          list_id: 1
        },
        {
          id: 3,
          name: 'You can write down detail of task',
          list_id: 1
        },
        {
          id: 4,
          name: 'Move this task to next List!',
          list_id: 2
        },
        {
          id: 5,
          name: 'List too!',
          list_id: 2
        },
      ]

      dispatch(setTasks(tasks))
    } catch (e) {
      console.log('errors: ', e)
    }
  }

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
