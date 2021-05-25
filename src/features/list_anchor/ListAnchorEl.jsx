import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { setAnchorEl } from './listAnchorSlice';
import { setOpenEditForm } from './../list_form/listFormSlice';
import { setOpenAlert, setDestroyListId } from './../list_alert/listAlerSlice';

const ListAnchorEl = () => {
  const anchorEl = useSelector((state) => state.listAnchorEl.anchorEl)
  const selectedId = useSelector((state) => state.listAnchorEl.listId)
  const lists = useSelector((state) => state.lists.value)

  const dispatch = useDispatch()

  const handleOpenUpdateForm = () => {
    let updateList = lists.find(item => item.id === selectedId)
    dispatch(setAnchorEl(null))
    dispatch(setOpenEditForm(updateList))
  };

  const handleOpenDestroyForm = () => {
    dispatch(setDestroyListId(selectedId))
    dispatch(setAnchorEl(null))
    dispatch(setOpenAlert(true))
  };

  const handleClose = () => {
    dispatch(setAnchorEl(null));
  }

  return (
    <div className='list__control'>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleOpenUpdateForm()}>Edit</MenuItem>
        <MenuItem onClick={() => handleOpenDestroyForm()}>Destroy</MenuItem>
      </Menu>
    </div>
  )
}

export default ListAnchorEl
