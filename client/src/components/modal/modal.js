import React, { useContext } from 'react';
import ModalContext from '../../contexts/modalContext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Modal = () => {
    const {
        show, text, typeMsg, dispatchModal
    } = useContext(ModalContext);

    const handleClose = () => {
        dispatchModal({ type: 'hide' });
    };

    if (text.length > 0) {
        return (
            <div>
                <Dialog open={show} onClose={handleClose}>
                    <DialogTitle>{typeMsg}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {text}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

    return (<></>);
}

export default Modal;
