import React, { useEffect } from 'react';
import { Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import ListFormTitle from '../list_form/ListFormTitle';
import { useSelector, useDispatch } from 'react-redux'
import { setOpenAlert, setDestroyListName } from './listAlerSlice';
import { destroyList } from './../list/listSlice';

const ListAlertDialog = () => {
  const isOpenAlert = useSelector((state) => state.listAlert.isOpen)
  const selectedId = useSelector((state) => state.listAlert.listID)
  const selectedName = useSelector((state) => state.listAlert.listName)
  const lists = useSelector((state) => state.lists.value)

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedId) {
      let destroyList = lists.find(item => item.id === selectedId)
      dispatch(setDestroyListName(destroyList.name))
    }
  }, [selectedId])

  const handleClose = () => {
    dispatch(setOpenAlert(false))
  }

  const handleDestroyList = () => {
    dispatch(destroyList(selectedId))
    handleClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={isOpenAlert}
      classes={{ paper: 'list-form' }}
    >
      <ListFormTitle
        onClose={handleClose}
      >
        Destroy List
      </ListFormTitle>
      <DialogContent
        classes={{ root: 'list-form__content' }}
      >
        <p className='destroy-form__title'>
          Are you sure to destroy
          <br />
          the list <b>{selectedName}</b>
        </p>
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
        <Button
          color='secondary'
          variant='contained'
          onClick={() => handleDestroyList()}
        >
          <span>Destroy</span>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ListAlertDialog
