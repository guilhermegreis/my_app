import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'

const Toast = ({ open, text, severity, onClose }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose()
  };

    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            >
                    <MuiAlert elevation={6} variant="filled" severity={severity}>
                        {text}
                    </MuiAlert>
        </Snackbar>
  );
}

export default Toast