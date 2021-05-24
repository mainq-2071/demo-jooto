import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { openForm, closeForm, handleChangeContent, handleValidForm } from './../task_form/taskFormSlice';
import { addTask } from './../task/taskSlice';

const TaskForm = (props) => {
  const { selectedListId } = props

  const currentListId = useSelector((state) => state.taskForm.listId)
  const content = useSelector((state) => state.taskForm.content)
  const isValidForm = useSelector((state) => state.taskForm.isValidForm)

  const dispatch = useDispatch()

  useEffect(() => {
    let isValid = content === '' ? false : true
    dispatch(handleValidForm(isValid))
  }, [content])

  const openTaskForm = (listId) => {
    dispatch(openForm(listId))
  }

  const closeTaskForm = (listId) => {
    dispatch(closeForm(listId))
  }

  const handleChangeTaskName = (e) => {
    dispatch(handleChangeContent(e.target.value))
  }

  const handleCreateTask = (listId) => {
    let newTask = {
      name: content,
      list_id: listId
    }
    dispatch(addTask(newTask))
    closeTaskForm()
  }

  const isFormDisplay = currentListId && currentListId === selectedListId ? true : false

  return (
    <div>
      <Button
        fullWidth
        color='primary'
        variant='outlined'
        className='box-add-task__button'
        onClick={() => openTaskForm(selectedListId)}
        style={{ display: !isFormDisplay ? 'inline-flex' : 'none' }}
      >
        <AddIcon />
        <span>Create a task</span>
      </Button>
      <div className='task-form' style={{ display: isFormDisplay ? 'block' : 'none' }}>
        <div className='task-form__content'>
          <textarea
            rows="3"
            className='task-form__input'
            value={content}
            onChange={handleChangeTaskName}
            autoFocus
          ></textarea>
        </div>
        <div className='task-form__options'>
          <Button
            color='primary'
            variant='outlined'
            onClick={() => closeTaskForm(selectedListId)}
          >
            <span>Cancel</span>
          </Button>
          <Button
            color='primary'
            variant='contained'
            disabled={!isValidForm}
            onClick={() => handleCreateTask(selectedListId)}
          >
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TaskForm
