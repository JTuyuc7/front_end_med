import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Spinner = ({ size=90}) => {

    return(
        <div className=' min-h-screen items-center flex'>
            <CircularProgress color="inherit" size={90} />
        </div>
    )
}

export default Spinner;