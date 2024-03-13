import {errorfunction} from '../../toaster'
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
export function sign_upvalidation(userdata)
{
if(userdata.name.trim()==='' || userdata.email.trim()=='' ||  userdata.password.trim()=='' || userdata.confirmPassword.trim()=='' )
{
    errorfunction('Please Fill All Required Fields')
    return false;
}
 if (!validateEmail(userdata.email)) {
    errorfunction('Email is not valid!')
    return false
  }
  if(userdata.password.length<6)
  {
    errorfunction('Password length must >6 !')
    return false;
  }
 
if(userdata.password!==userdata.confirmPassword)
{
  errorfunction('Passwords do not match')
  return false;
}
return true;
}