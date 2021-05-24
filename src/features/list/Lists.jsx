import React from 'react'
import { Box, Grid, Button } from '@material-ui/core'
import List from './List'
import AddIcon from '@material-ui/icons/Add'

const Lists = (props) => {
  const { lists, handleClickOpen } = props

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

  return (
    <Box
      className='board__content'
    >
      <Box
        className='jooto-lists'
      >
        {showLists}
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
      </Box>
    </Box>
  )
}

export default Lists
