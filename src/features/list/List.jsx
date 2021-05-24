import React from 'react'
import Tasks from './../task/Tasks'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import TaskForm from './../task_form/TaskForm';

const List = (props) => {
  const { list } = props

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
        </h2>
        <div
          className='list__control'
        >
          <span>
            <MoreHorizIcon />
          </span>
        </div>
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
