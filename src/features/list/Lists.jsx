import React from 'react'
import { Box, Button } from '@material-ui/core'
import List from './List'
import AddIcon from '@material-ui/icons/Add'
import ListAnchorEl from '../list_anchor/ListAnchorEl';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from './../task/taskSlice';

const Lists = (props) => {
  const { lists, handleClickOpen } = props
  const tasks = useSelector((state) => state.tasks.value)

  const dispatch = useDispatch()

  const showLists = lists && lists.map((list, index) => {
    return (
      <Box
        className='jooto-lists__box'
        key={index}
      >
        <List
          list={list}
        />
      </Box>
    )
  })

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    let draggableTask = tasks.find(item => item.id === draggableId)
    let newOffset = draggableTask.offset + (source.index - destination.index)

    let destinationTask = tasks.find(item => item.offset === newOffset)

    let sourceTask = { ...draggableTask, offset: newOffset }
    destinationTask = { ...destinationTask, offset: draggableTask.offset }

    dispatch(updateTask(sourceTask))
    dispatch(updateTask(destinationTask))
  }

  return (
    <Box
      className='board__content'
    >
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Box
          className='jooto-lists'
        >
          {showLists}
        </Box>
      </DragDropContext>
      <Box
        className='jooto-lists__box'
      >
        <div
          className='box-add-list'
        >
          <Button
            variant='contained'
            className='box-add-list__button'
            fullWidth
            onClick={() => handleClickOpen()}
          >
            <AddIcon />
            <span>Add list</span>
          </Button>
        </div>
      </Box>
      <ListAnchorEl />
    </Box>
  )
}

export default Lists
