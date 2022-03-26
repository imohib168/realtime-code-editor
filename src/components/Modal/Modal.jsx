import React from 'react';
import { styled } from '@mui/material/styles';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
} from '@mui/material';

import { MdOutlineClose } from 'react-icons/md';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    fontFamily: 'Nunito',
    padding: theme.spacing(1),
    minWidth: '450px',
    backgroundColor: '#43758a',
    borderRadius: '10px',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  m: 0,
  padding: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const BootstrapDialogTitle = ({ children, onClose, ...other }) => (
  <StyledDialogTitle component='p' {...other}>
    <p style={{ paddingLeft: '5px' }}>{children}</p>
    {onClose ? (
      <IconButton disableRipple onClick={onClose}>
        <MdOutlineClose />
      </IconButton>
    ) : null}
  </StyledDialogTitle>
);

export default function CustomModal({ children, open, handleClose }) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          Settings
        </BootstrapDialogTitle>

        <Divider />

        <DialogContent>{children}</DialogContent>
      </BootstrapDialog>
    </div>
  );
}
