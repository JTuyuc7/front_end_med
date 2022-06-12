import React from 'react';
import Modal from '@material-ui/core/Modal';
import '../../global/GlobalStyles.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #9e6f46',
    boxShadow: 24,
    borderRadius: 10,
    p: 4,
};

const ModalConfirmation = ({open, onCancel, name, onConfirm}) => {
    console.log(open, 'booleand')
    return(
        <div>
            <Modal
                open={open}
                onClose={onCancel}
                
            >
                <div style={style} className='bgModal pb-2'>
                    <div className='modalHeader px-2 md:px-10 pb-2 pt-3'>
                        <h2 className='uppercase font-bold'>Are you sure you want to delete</h2>
                        <h3 className='uppercase py-1 font-mono font-semibold'>{name}, Appointment?</h3>
                    </div>
                    <div className='px-3 py-5'>
                        <p className='font-mono'>Once deleted it can not be restored.</p>
                    </div>

                    <div className='justify-end px-5 py-3 gap-3 grid grid-cols-2'>
                        <button
                            className='deleteButton py-1'
                            onClick={onCancel}
                        >Cancel</button>
                        <button
                            className='detailsButton py-1'
                            onClick={onConfirm}
                        >Ok</button>
                    </div>
                    
                </div>
            </Modal>
        </div>
    )
}

export default ModalConfirmation;