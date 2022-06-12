import React, { useState } from 'react';
import '../../global/GlobalStyles.css';
import { TextField } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

const AppointmentForm = ({onAddData}) => {
    const { loading } = useSelector((state) => state.ui)

    const [ patientName, setPatientName ] = useState('');
    const [ errorName, setErrorName ] = useState(false);
    const [ lastName, setLastName ] = useState('');
    const [ errorLN, setErrorLN ] = useState(false);
    const [ patientNumber, setPatientNumber ] = useState('');
    const [ numberPE, setNumberPE ] = useState(false)
    const [ patientAge, setPatientAge ] = useState('');
    const [ patientAE, setPatientAE ] = useState(false);
    const [ symptoms, setSymptoms ] = useState('');
    const [ symptomsError, setSymptomsError ] = useState(false); 
    const [ dateAp, setDateAp ] = useState('')
    const [ dateApError, setDateApError ] = useState(false)

    const disabledButton = patientName.length !== 0 && lastName.length !== 0 && patientNumber.length !== 0 && patientAge.length !== 0 && symptoms.length !== 0 && dateAp.length !== 0;
    const addNewAppoitmentHandler = (e) => {
        e.preventDefault();
        if(symptoms.length === 0){
            setSymptomsError(true)
            return
        }

        const newObje = {
            name: patientName,
            lastName: lastName,
            age: Number(patientAge),
            phone: patientNumber,
            description: symptoms,
            date: dateAp,
        }
        onAddData(newObje)
    }

    //if(loading){
    //    return <Spinner />
    //}

    return(

        <>
            <div className='flex flex-col mt-52 sm:mt-44 md:mt-24'>      
            <h2 className='titleAppointments py-3 font-semibold text-center uppercase'>New Appointment</h2>      
                <form 
                    className='formCard mt-5 shadow-2xl shadow-gray rounded-md p-8'
                    onSubmit={addNewAppoitmentHandler}
                >
                    <div className='sm:flex-row flex flex-col justify-between items-center gap-5 md:flex-row py-2'>
                        <div>
                            <TextField 
                                id='name'
                                label={ patientName.length === 0 && errorName ? 'Error' : 'Patient Name'}
                                variant="outlined"
                                //color="secondary"
                                required
                                value={patientName}
                                onChange={ (e) => setPatientName(e.target.value)}
                                helperText={ patientName.length === 0 && errorName ? 'Enter a name' : '' }
                                onBlur={ () => setErrorName(true)}
                                error={ patientName.length === 0 && errorName ? true : false}
                                //inputProps={{style: { border: '2px solid #c05915' }}}
                            />
                        </div>

                        <div>
                            <TextField 
                                id='lastName' 
                                variant='outlined' 
                                label={'Last Name'} 
                                onBlur={ () => setErrorLN(true)} 
                                error={ lastName.length === 0 && errorLN ? true : false}
                                helperText={lastName.length === 0 && errorLN ? 'Last name is required' : ''}
                                value={lastName}
                                onChange={ (e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className='sm:flex-row flex flex-col justify-between items-center gap-5 md:flex-row mt-5 py-2'>
                        <div>
                            <TextField 
                                id='age'
                                variant="outlined"
                                type='number'
                                label="Patient age"
                                required
                                value={patientAge}
                                onChange={(e) => setPatientAge(e.target.value)}
                                onBlur={ () => setPatientAE(true)}
                                error={ patientAge.length === 0 && patientAE ? true : false}
                                helperText={patientAge.length === 0 && patientAE ? 'Enter a valid age' : ''}
                            />
                        </div>
                        <div>
                            <TextField 
                                id="phone" 
                                variant="outlined" 
                                label="Contact number" 
                                type="number" 
                                required
                                value={patientNumber}
                                onChange={(e) => setPatientNumber(e.target.value)}
                                onBlur={() => setNumberPE(true)}
                                error={ patientNumber.length  < 8 && numberPE ? true : false}
                                helperText={ patientNumber.length < 8 && numberPE ? 'Enter a valid number' : ''}
                            />
                        </div>
                        
                    </div>

                    <div className='sm:flex-row flex items-center justify-around flex-col gap-5 md:flex-row mt-5 py-2'>
                        <div>
                            <TextField
                                id="date"
                                variant="outlined"
                                label="Select a date"
                                type="date"
                                required
                                InputLabelProps={{
                                    shrink: true
                                }}
                                style={{ width: 220}}
                                onBlur={ () => setDateApError(true) }
                                onChange={ (e) => setDateAp(e.target.value) }
                                value={dateAp}
                                error={ dateAp.length === 0 && dateApError ? true : false}
                                helperText={dateAp.length === 0 && dateApError ? 'Select a date': ''}
                            />
                        </div>
                        
                        <div>
                        <label htmlFor='symptoms' className='text-gray-500'>Symptoms</label>
                            <TextareaAutosize
                                name='symptoms'
                                id='symptoms' 
                                minRows={3}
                                placeholder="Symptoms"
                                style={{ backgroundColor: '#e5e0d8', marginTop: 5, width: '100%', alignSelf: 'center', padding: 5, borderWidth: symptoms.length === 0 ? '2px' : 0 , borderColor:symptomsError ? 'red' : 'gray' }}
                                onBlur={ () => setSymptomsError(true)}
                                onChange={ (e) => setSymptoms(e.target.value)}
                                value={symptoms}
                            />
                            {
                                symptoms.length === 0 && symptomsError ? (
                                    <p className='ml-3 text-sm text-red-600 font-light'>Describe symptoms</p>
                                ) : null
                            }
                        </div>
                        
                    </div>

                    <div className='flex items-center justify-center mt-8'>
                        <button
                            disabled={disabledButton ? false : true}
                            className={`saveAppointment py-3 px-5 text-gray-50 uppercase rounded-md ${disabledButton ? '' : 'cursor-not-allowed'}`}
                            type='submit'
                        >
                            { loading ? (
                                <div className='flex justify-between gap-5'>
                                    <p>Saving</p>
                                    <CircularProgress size={20} color="#e5e0d8"/>
                                </div>
                            ): 'Save Appointment'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AppointmentForm;

/*

<div>
                            <label htmlFor='symptoms' className='text-gray-500'>Symptoms</label>
                            <TextareaAutosize
                                name='symptoms'
                                id='symptoms' 
                                minRows={3}
                                placeholder="Symptoms"
                                style={{ backgroundColor: '#e5e0d8', marginTop: 5, width: '80%', alignSelf: 'center', padding: 5, borderWidth: symptoms.length === 0 ? '2px' : 0 , borderColor:symptomsError ? 'red' : '' }}
                                onBlur={ () => setSymptomsError(true)}
                                onChange={ (e) => setSymptoms(e.target.value)}
                                value={symptoms}
                            />
                            {
                                symptoms.length === 0 && symptomsError ? (
                                    <p className='ml-3 text-sm text-red-600 font-light'>Describe symptoms</p>
                                ) : null
                            }
                        </div>
*/