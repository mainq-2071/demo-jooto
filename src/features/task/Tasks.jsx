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
      if (localStorage && localStorage.getItem('tasks')) {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        dispatch(setTasks(tasks))
      }
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
