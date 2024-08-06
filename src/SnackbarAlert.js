import React from 'react';
import { Snackbar, Alert } from '@mui/material';

function SnackbarAlert({ open, severity, message, handleClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert severity={severity} variant="standard" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarAlert;
