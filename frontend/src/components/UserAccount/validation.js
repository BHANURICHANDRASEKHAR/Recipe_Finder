import { errorfunction } from "../../toaster";
export function datavalidation(data)
{
 if(data.name.trim()=='' || data.making_process.length<=0 || data.ingredients.length<=0 )
 {
    errorfunction('Please Fill All Required Fields')
    return false;
 }
 else{
    return true;
 }
}