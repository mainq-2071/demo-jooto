import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tasks from './../task/Tasks'
import { Button, TextareaAutosize } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import AddIcon from '@material-ui/icons/Add'
import { openForm, closeForm } from './../task_form/taskFormSlice';

const List = (props) => {
  const { list } = props

  const currentListId = useSelector((state) => state.isTaskFormOpen.listId)
  const dispatch = useDispatch()

  const openTaskForm = (listId) => {
    dispatch(openForm(listId))
  }

  const closeTaskForm = (listId) => {
    dispatch(closeForm(listId))
  }

  const isFormDisplay = currentListId && currentListId === list.id ? 'block' : 'none'

  const borderList = 'solid 10px ' + list.color

  return (
    <div
      className='jooto-list'
      style={{ borderTop: borderList }}
    >
      <div
        className='list__title'
      >
        <h2
          className='list__title-name'
        >
          <span>{list.name} </span>
          <span className='list__task-count'>{list.taskCount}</span>
        </h2>
        <div
          className='list__control'
        >
          <span>
            <MoreHorizIcon />
          </span>
        </div>
      </div>
      <Button
        fullWidth
        color='primary'
        variant='outlined'
        className='box-add-task__button'
        onClick={() => openTaskForm(list.id)}
      >
        <AddIcon />
        <span>Create a task</span>
      </Button>
      <div className='task-form' style={{ display: isFormDisplay }}>
        <div className='task-form__content'>
          <TextareaAutosize
            rowsMin={3}
            rowsMax={4}
            placeholder='Task name'
          />
        </div>
        <div className='task-form__options'>
          <Button
            color='primary'
            variant='outlined'
            onClick={() => closeTaskForm(list.id)}
          >
            <span>Cancel</span>
          </Button>
          <Button
            color='primary'
            variant='outlined'
          >
            <span>Add</span>
          </Button>
        </div>
      </div>
      <Tasks
        listId={list.id}
      />
    </div>
  )
}

export default List
