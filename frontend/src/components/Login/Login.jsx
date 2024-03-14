
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputFeild from './InputFeild'; 
import { getOTP,signup,signin } from './call';
import { sign_upvalidation,signin_upvalidation} from './uservalidations';
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
        getOTP(userdata,setisloading, setOtp, setFlag,setMode);
        setUserData(initialdata)
      }
    } else {
      var isloginvalid= signin_upvalidation(userdata);
      if(isloginvalid)
      {
        signin(userdata,setShow,setisloading)
        
      }
    }
  }
async function otpverication()
{
  
  if(otp==userdata.otp)
  {
   await signup(userdata,setMode);
    setUserData(initialdata)
    setFlag(false)
  }
  else
  {
    errorfunction('Otp is Invalid try again')
  }
}
console.log(isLoading)

  return (
    <React.Fragment>
      <div className='col-4'>
        <button  className='resentbtn' style={{fontSize:'26px',padding:'0rem'}} onClick={handleShow}>Login</button>
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
        {isLoading ? 'Loading…' : 'Sign In'}
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

