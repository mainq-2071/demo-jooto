import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList.value)
  const dispatch = useDispatch()

  console.log(taskList)
  return (
    <div>
      Set up success!
    </div>
  )
}

export default TaskList
