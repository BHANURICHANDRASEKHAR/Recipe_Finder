
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputFeild from './InputFeild'; 
import { getOTP,signup } from './call';
import { sign_upvalidation } from './uservalidations';
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
        getOTP(userdata, setOtp, setFlag);
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
           <SignupInputFeilds userdata={userdata} onchange={onChange} submit={submit} flag={flag} otp={otp} setFlag={setFlag} setOtp={setOtp} otpverication={otpverication}/>
           <div className='col pt-2 text-center' style={{borderTop:'1px solid black',fontSize:'24px'}}>Already  have an Account ? <span onClick={()=>{setMode('signin')}}>Sign in</span></div>
           
           </React.Fragment>
          ) : (
            // sign-in form components
          <div className='row p-4'>
          <InputFeild value={userdata.email} label='Email' type='email' name='email' onchangefunction={onChange} /> 
          <InputFeild value={userdata.password} label='Enter Password' type='password' name='password' onchangefunction={onChange} />
          <Button variant="danger" className='w-100' onClick={submit}>Sign in</Button>  
          <div className='col pt-2 mt-3 text-center' style={{borderTop:'1px solid black',fontSize:'24px'}}>Dont have any Account ? <span style={{cursor:'pointer'}} onClick={()=>{setMode('signup')}}>Signup</span></div>
          </div>
          )}
        </Modal.Body>
    
      </Modal>
    </React.Fragment>
  );
}

export default Login;
const SignupInputFeilds=({userdata,submit,onchange,flag,otp,setFlag,setOtp,otpverication})=>{
    return(
        <div className='container'>
            {
                flag ? 
                <OTP userdata={userdata} onchange={onchange}  setFlag={setFlag} setOtp={setOtp} otpverication={otpverication}/> :
                (
                    <div className='row m-4'>
                        <InputFeild value={userdata.name} label='Name' type='text' name='name' onchangefunction={onchange} />
                        <InputFeild value={userdata.email} label='Email' type='email' name='email' onchangefunction={onchange} /> 
                        <InputFeild value={userdata.password} label='Enter Password' type='password' name='password' onchangefunction={onchange} />
                        <InputFeild value={userdata.confirmPassword} label='ConfirmPassword' type='text' name='confirmPassword' onchangefunction={onchange} /> 
                        <Button variant="danger" className='w-100' onClick={submit}>Create Account</Button>  
                    </div>
                )
            }
        </div>
    )
}

const OTP=({userdata,onchange,otpverication,setFlag,setOtp})=>{
    function resentotp()
    {
        getOTP(userdata, setOtp, setFlag);
    }
    return (
       <div className='container'>
       <div className='row'>
       <div className='col mt-4 text-dark'>
           <h3>Enter Otp</h3>
           <p>Verification code has been sent to your email, {userdata.email}, please enter the same here to complete the signup. Valid for 10 minutes.</p>
           <InputFeild value={userdata.otp}  label='Confirm Otp' type='text' name='otp' onchangefunction={onchange}/> 
           <Button variant="danger" className='w-100' onClick={otpverication} >Proceed</Button>
       </div>
       
   </div>
   <div className='row mt-4'>
   <Timer resentotp={resentotp}/>
   </div>
       </div>
    )
}
const Timer = ({resentotp}) => {
    const [time, setTime] = useState(30);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(interval);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);
    useEffect(() => {
        startFunction(); 
    }, []);

    const startFunction = () => {
        setIsActive(true);
    }
    const resetTimer = () => {
        setTime(30);
        setIsActive(true);
        resentotp();
    };

    return (
        <div className='col'>
            <h1 className='text-center'>00:{time < 10 ? `0${time}` : time}</h1>
            <p className='text-center mt-1'>Didn't receive OTP? <button onClick={resetTimer} className='resentbtn' style={{color:setIsActive && time>0?'gray' : 'red'}} disabled={setIsActive && time>0}>Resend Now</button></p>
        </div>
    );
};