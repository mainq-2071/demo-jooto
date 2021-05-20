import React from 'react'
import { Box, Grid, Button } from '@material-ui/core'
import List from './List'
import AddIcon from '@material-ui/icons/Add'

const Lists = (props) => {
  const { lists } = props

  const showLists = lists && lists.map((list, index) => {
    return (
      <Grid
        item
        xs={3}
        key={index}
      >
        <List
          list={list}
        />
      </Grid>
    )
  })

  return (
    <Box
      className='board__content'
    >
      <Grid
        container
        spacing={2}
      >
        {showLists}
        <Grid
          item
          xs={3}
        >
          <div
            className='box-add-list'
          >
            <Button
              variant='contained'
              className='box-add-list__button'
              fullWidth
            >
              <AddIcon />
              <span>Add list</span>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Lists
