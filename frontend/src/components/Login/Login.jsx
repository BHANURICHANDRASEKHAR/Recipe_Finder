import React ,{ useState,useRef }from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputFeild from './InputFeild';
import { getOTP } from './call';
import { sign_upvalidation } from './uservalidations';
function Login() {
  const [userdata,setuserdata]=useState({
    email:'',
    name:'',
    password:'',
    confirmPassword:''
  })
  const [flag,setflag]=useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function onchage(e)
  {
   setuserdata({...userdata,[e.target.name]:e.target.value})
  }
  function submit()
  {
    var bit=sign_upvalidation(userdata)
    if(bit)
    {
        getOTP(userdata)
    }
  }
  return (
    <React.Fragment>

   <div className='col-4'><div className='sort rounded-pill' variant="primary" onClick={handleShow}>Login </div>
  </div>
      <Modal show={show} onHide={handleClose} style={{marginTop:'80px'}}>
        <Modal.Header closeButton >
          <Modal.Title className='text-dark'>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-dark'>
             <InputFeild value={userdata.name} label='Name' type='text' name='name' onchangefunction={onchage} />
             <InputFeild value={userdata.email} label='Email' type='email' name='email' onchangefunction={onchage} /> 
             <InputFeild value={userdata.password} label='Enter Password' type='password' name='password' onchangefunction={onchage} />
             <InputFeild value={userdata.confirmPassword} label='ConfirmPassword' type='text' name='confirmPassword' onchangefunction={onchage} /> 
             <Button variant="primary" className='w-100' onClick={submit}>Sign up</Button>  
        </Modal.Body>
      
      </Modal>
    </React.Fragment>

  );
}

export default Login;