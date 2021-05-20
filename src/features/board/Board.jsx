import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import './style.scss'
import Lists from './../list/Lists'

const Board = () => {
  const lists = useSelector((state) => state.lists.value)

  return (
    <Container>
      <Typography
        align='center'
        variant='h1'
        classes={{ h1 : 'board__title'}}
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
