import React, { useEffect } from 'react';
import { Button, Dialog, DialogContent, DialogActions, Typography, TextField, Box } from '@material-ui/core';
import ListFormTitle from './ListFormTitle';
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeColor, handleChangeContent, handleValidForm } from './../list_form/listFormSlice';
import { addList, updateList } from './../list/listSlice';

const colors = [
  {
    color: '#4dabff'
  },
  {
    color: '#f65161'
  },
  {
    color: '#fdd853'
  },
  {
    color: '#fc78b9'
  },
  {
    color: '#36c398'
  },
  {
    color: '#aeda49'
  },
  {
    color: '#7d5cc1'
  },
  {
    color: '#ff954a'
  },
]

const ListForm = (props) => {
  const { handleClose, isOpenListForm } = props

  const currentColor = useSelector((state) => state.listForm.color)
  const listId = useSelector((state) => state.listForm.listId)
  const content = useSelector((state) => state.listForm.content)
  const isValidForm = useSelector((state) => state.listForm.isValidForm)
  const isEditing = useSelector((state) => state.listForm.isEditing)

  const dispatch = useDispatch()

  useEffect(() => {
    let isValid = content === '' ? false : true
    dispatch(handleValidForm(isValid))
  }, [content])

  const handleChangeListName = (e) => {
    dispatch(handleChangeContent(e.target.value))
  }

  const handleCreateList = () => {
    let newList = {
      name: content,
      color: currentColor,
    }
    dispatch(addList(newList))
    handleClose()
  }

  const handleUpdateList = () => {
    let editList = {
      name: content,
      color: currentColor,
      id: listId
    }
    dispatch(updateList(editList))
    handleClose()
  }

  const showColorsList = colors && colors.map((item, index) => {
    let active = currentColor === item.color ? 'active-color' : ''

    return (
      <Box
        className={'colorBox ' + active}
        style={{ backgroundColor: item.color }}
        key={index}
        onClick={() => dispatch(handleChangeColor(item.color))}
      >
      </Box>
    )
  })

  return (
    <Dialog
      onClose={handleClose}
      open={isOpenListForm}
      classes={{ paper: 'list-form' }}
    >
      <ListFormTitle
        onClose={handleClose}
      >
        {isEditing ? 'Edit List' : 'Add List'}
      </ListFormTitle>
      <DialogContent
        classes={{ root: 'list-form__content' }}
      >
        <div className='list-form__input'>
          <Typography>
            List name
            </Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={content}
            onChange={handleChangeListName}
            autoFocus
          />
        </div>
        <div className='list-form__color'>
          <Typography>
            List color
            </Typography>
          <Box
            display="flex"
            flexDirection="row"
          >
            {showColorsList}
          </Box>
        </div>
      </DialogContent>
      <DialogActions
        classes={{ root: 'list-form__options' }}
      >
        <Button
          color='primary'
          variant='outlined'
          onClick={() => handleClose()}
        >
          <span>Cancel</span>
        </Button>
        {isEditing ? (
          <Button
            color='secondary'
            variant='contained'
            disabled={!isValidForm}
            onClick={() => handleUpdateList()}
          >
            <span>Update</span>
          </Button>
        ) : (
          <Button
            color='primary'
            variant='contained'
            disabled={!isValidForm}
            onClick={() => handleCreateList()}
          >
            <span>Add</span>
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default ListForm
