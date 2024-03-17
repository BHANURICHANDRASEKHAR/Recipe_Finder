import React, { useState,useContext } from 'react'
import InputFeild from './InputFeild'
import { UserContext } from '../../Context/UserContext';
import { errorfunction } from '../../toaster';
import Timer from './Timer';
import {resendotp,forgetpassword,resetpassword} from './call';
import { Forget } from './Signup';
import Button from 'react-bootstrap/Button'
export default function ForgetPassWord({userdata,onChange}) {
    const [forgetpasswordotp,setforgetpasswordotp]=useState('')
    const [resetPasswordotpstatus,setresetpasswordotpstatus]=useState(false)
  const { show,setShow, setUser }=useContext(UserContext)
    const [otpstatus,setotpstatus]=useState(false)
    const [isloading,setisloading]=useState(false)
    function checkForgotPassword()
    {
        if(userdata.email.trim()=='')
        {
            errorfunction('Please Fill All Required Fields')
        }
        else{
            forgetpassword(userdata,setisloading,setforgetpasswordotp,setresetpasswordotpstatus)
        }
    }
    function otpverication(){
      if(userdata.otp==forgetpasswordotp)
      {
        setotpstatus(true)
      }
      else{
        errorfunction('Otp is Invalid try again')
      }
    }
    function updatePassword()
    {
        if(userdata.password.length<6)
        {
            errorfunction('Password length must >6!')
        }
        else if(userdata.password!==userdata.confirmPassword)
        {
            errorfunction('Passwords do not match')
        }
        else{
            resetpassword(userdata,setisloading,setShow, setUser)
        }
    }
  return (
    <React.Fragment>
   {
    resetPasswordotpstatus ?  
    (otpstatus?
        <React.Fragment>
        <Forget userdata={userdata} onchange={onChange}/>
        <Button disabled={isloading}
        className='w-100' 
        onClick={updatePassword}>
   
        {isloading ? 'Loading…' : 'Update Password'}</Button>
        </React.Fragment>
        :<Otp userdata={userdata} onchange={onChange}  otpverication={otpverication} setforgetpasswordotp={setforgetpasswordotp}/>)
    :(<div>
     <p>Forget PassWord</p>
     <InputFeild value={userdata.email} label='Email' type='email' name='email' onchangefunction={onChange} /> 
     <Button variant='primary'
      disabled={isloading}
      className='w-100' 
      onClick={checkForgotPassword}>
 
      {isloading ? 'Loading…' : 'Send Otp'}</Button>
 
     </div>)

   }
    </React.Fragment>
  )
}

export  function Otp({userdata,onchange,setforgetpasswordotp,otpverication}) {
   function resetPassword()
   {
    resendotp(userdata,setforgetpasswordotp,false)
   }
     
    return (
       <div className='container'>
       <div className='row'>
       <div className='col mt-4 text-dark'>
           <h3>Enter Otp</h3>
           <p>Verification code has been sent to your email, {userdata.email}, please enter the same here to complete the signup. Valid for 10 minutes.</p>
           <InputFeild value={userdata.otp}  label='Confirm Otp' type='text' name='otp' onchangefunction={onchange}/> 
           <Button variant="danger" className='w-100 text-white' onClick={otpverication} >Procced</Button>
       </div>
       
   </div>
   <div className='row mt-4'>
   <Timer resentotp={resetPassword} />
   </div>
       </div>
    )
}
