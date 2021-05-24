import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DialogTitle, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: 0
  },
  closeButton: {
    position: 'absolute',
    right: '12px',
    top: '12px',
    color: theme.palette.grey[500],
    padding: 0
  },
});

const ListFormTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography
        variant='h6'
        align='center'
        classes={{h6: 'list-form__title'}}
      >
        {children}
      </Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

export default ListFormTitle
