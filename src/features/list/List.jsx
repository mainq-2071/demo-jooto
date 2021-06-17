import React from 'react'
import Tasks from './../task/Tasks'
import TaskForm from './../task_form/TaskForm';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { setAnchorEl, setCurrentListId } from '../list_anchor/listAnchorSlice';

const List = (props) => {
  const { list } = props

  const dispatch = useDispatch()

  const handleClick = (event, listId) => {
    dispatch(setAnchorEl(event.currentTarget));
    dispatch(setCurrentListId(listId));
  };

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
          <span className='list__task-count'>{list.tasksCount}</span>
        </h2>
        <Button
          onClick={(e) => handleClick(e, list.id)}
        >
          <MoreHorizIcon />
        </Button>
      </div>
      <TaskForm
        selectedListId={list.id}
      />
      <Tasks
        listId={list.id}
      />
    </div>
  )
}

export default List
