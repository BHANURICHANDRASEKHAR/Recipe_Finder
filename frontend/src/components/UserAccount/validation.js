import { errorfunction } from "../../toaster";
export function datavalidation(data)
{
 if(data.itemname.trim()=='' || data.makingprocess.length<=0 || data.ingredient.length<=0 )
 {
    errorfunction('Please Fill All Required Fields')
    return false;
 }
 else{
    return true;
 }
}