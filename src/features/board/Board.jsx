import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import './style.scss'
import Lists from './../list/Lists'
import { setLists } from './../list/listSlice';
import ListForm from './../list_form/ListForm';
import { setOpenForm } from './../list_form/listFormSlice';

const Board = () => {
  const lists = useSelector((state) => state.lists.value)
  const isOpenListForm = useSelector((state) => state.listForm.isOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    getLists()
  }, [])

  const getLists = async () => {
    try {
      if (localStorage && localStorage.getItem('lists')) {
        let lists = JSON.parse(localStorage.getItem('lists'))
        dispatch(setLists(lists))
      }
    } catch (e) {
      console.log('errors: ', e)
    }
  }

  const handleClickOpen = () => {
    dispatch(setOpenForm(true))
  };
  const handleClose = () => {
    dispatch(setOpenForm(false))
  };

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
      <ListForm
        isOpenListForm={isOpenListForm}
        handleClose={handleClose}
      />
      <Lists
        lists={lists}
        handleClickOpen={handleClickOpen}
      />
    </Container>
  )
}

export default Board
