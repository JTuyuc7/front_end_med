import React from 'react';
import { Alert } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';

const AlertComponent = ({title, severity, color, onClose}) => {

    return(
        <div className='px-7'>
            <Alert 
                severity={severity}
                color={color}
                action={
                    <IconButton
                        aria-label='close'
                        color="inherit"
                        size="small"
                        onClick={onClose}
                    >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }
            >
                <strong>{title}</strong>
            </Alert>
        </div>
    )
}

export default AlertComponent;