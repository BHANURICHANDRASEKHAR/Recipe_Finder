
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputFeild from './InputFeild'; 
import { getOTP,signup } from './call';
import { sign_upvalidation } from './uservalidations';
import SignupInputFeilds from './Signup';
import { errorfunction } from '../../toaster';
const initialdata={
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    otp:''
  }
  
function Login() {
  const [userdata, setUserData] = useState(initialdata);
  const [isLoading,setisloading]=useState(false)
  const [mode, setMode] = useState('signin'); 
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState('1234');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onChange(e) {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  }

  function submit() {
    if (mode === 'signup') {
      var isValid = sign_upvalidation(userdata);
      if (isValid) {
        getOTP(userdata,setisloading, setOtp, setFlag);
      }
    } else {
      // Handle sign-in submission
    }
  }
function otpverication()
{
    console.log('otp is',otp)
  if(otp==userdata.otp)
  {
    signup(userdata,setMode);
    setUserData(initialdata)

  }
  else
  {
    errorfunction('Otp is Invalid try again')
  }
}
  function toggleMode() {
    setMode(mode === 'signup' ? 'signin' : 'signup');
  }

  return (
    <React.Fragment>
      <div className='col-4'>
        <Button variant="primary" onClick={handleShow}>Login</Button>
      </div>
      <Modal show={show} onHide={handleClose} style={{ marginTop: '80px' }}>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'>{mode === 'signup' ? 'Sign up' : 'Sign in'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-dark'>
          {mode === 'signup' ? (
            <React.Fragment>
           <SignupInputFeilds userdata={userdata} onchange={onChange} submit={submit} flag={flag} otp={otp} setFlag={setFlag} setOtp={setOtp} otpverication={otpverication} isLoading={isLoading}/>
           <div className='col pt-2 text-center' style={{borderTop:'1px solid black',fontSize:'24px'}}>Already  have an Account ? <span onClick={()=>{setMode('signin')}}>Sign in</span></div>
           </React.Fragment>
          ) : (
            // sign-in form components
          <div className='row p-4'>
          <InputFeild value={userdata.email} label='Email' type='email' name='email' onchangefunction={onChange} /> 
          <InputFeild value={userdata.password} label='Enter Password' type='password' name='password' onchangefunction={onChange} />
          <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? submit : null}
        >
          {isLoading ? 'Loading…' : 'Create a Account'}
        </Button>  
          <div className='col pt-2 mt-3 text-center' style={{borderTop:'1px solid black',fontSize:'24px'}}>Dont have any Account ? <span style={{cursor:'pointer'}} onClick={()=>{setMode('signup')}}>Signup</span></div>
          </div>
          )}
        </Modal.Body>
    
      </Modal>
    </React.Fragment>
  );
}

export default Login;

