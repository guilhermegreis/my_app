import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal} from '@material-ui/core'

const ModalConfirm = ({ 
    open, 
    onClose, 
    onConfirm,
    title,
    message,
}) => {

    return (
        <>
            <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} colors="primary">
                        Cancelar
                    </Button>
                    <Button onClick={onConfirm} colors="primary" autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalConfirm