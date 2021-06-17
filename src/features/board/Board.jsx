import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import './style.scss'
import Lists from './../list/Lists'
import { setLists } from './../list/listSlice';
import { setTasks } from './../task/taskSlice';
import ListForm from './../list_form/ListForm';
import { setOpenForm } from './../list_form/listFormSlice';
import ListAlertDialog from '../list_alert/ListAlertDialog';

const Board = () => {
  const lists = useSelector((state) => state.lists.value)
  const tasks = useSelector((state) => state.tasks.value)
  const isOpenListForm = useSelector((state) => state.listForm.isOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    getLists()
    getTasks()
  }, [])

  useEffect(() => {
    lists.length > 0 && tasks.length > 0 && addTasksToList()
  }, [tasks])

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

  const getTasks = async () => {
    try {
      if (localStorage && localStorage.getItem('tasks')) {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        dispatch(setTasks(tasks))
      }
    } catch (e) {
      console.log('errors: ', e)
    }
  }

  const addTasksToList = () => {
    let tmpLists = lists.map((list) => {
      let tmpTasks = tasks.filter(task => task.list_id === list.id)
      let tasksCount = { tasksCount: tmpTasks.length }
      list = { ...list, ...tasksCount }
      return list;
    });
    localStorage.setItem("lists", JSON.stringify(tmpLists));
    dispatch(setLists(tmpLists))
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
      <ListAlertDialog />
      <Lists
        lists={lists}
        handleClickOpen={handleClickOpen}
      />
    </Container>
  )
}

export default Board
