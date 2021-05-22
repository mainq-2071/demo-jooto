import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import './style.scss'
import Lists from './../list/Lists'
import { setLists } from './../list/listSlice';

const Board = () => {
  const lists = useSelector((state) => state.lists.value)
  const dispatch = useDispatch()

  useEffect(() => {
    getLists()
  }, [])

  const getLists = async () => {
    try {
      let lists = [
        {
          id: 1,
          name: 'Welcome to Jooto!',
          color: '#FC78B9',
          taskCount: 0
        },
        {
          id: 2,
          name: 'This is List',
          color: '#36C398',
          taskCount: 0
        },
        {
          id: 3,
          name: 'Edit List name',
          color: '#4DABFF',
          taskCount: 0
        },
      ]

      dispatch(setLists(lists))
    } catch (e) {
      console.log('errors: ', e)
    }
  }

  return (
    <Container>
      <Typography
        align='center'
        variant='h1'
        classes={{ h1: 'board__title' }}
        gutterBottom
      >
        Demo Jooto Board
      </Typography>
      <Lists
        lists={lists}
      />
    </Container>
  )
}

export default Board
