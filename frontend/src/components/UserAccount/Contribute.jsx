import React, { useState } from 'react'
import InputFeild from '../Login/InputFeild'
import { errorfunction } from '../../toaster'
import { MdOutlineAddCircle } from "react-icons/md";
import ImgeUpload from './ImgeUpload';
import { Button } from 'react-bootstrap';
import {datavalidation} from './validation'
import {savecontributes} from './fetchfunctions'
export default function Contribute() {
  const initialdata={
    name:'',
    making_process:[],
    ingredients:[],
    img:''
  
  }
  const initialdata1={
    making_process:'',
    ingredients:''
  }
  const [contributedata,setcontributedata]=useState(initialdata)
  const[data,setdata]=useState(initialdata1)
  function onchange(e)
  {
   setcontributedata({...contributedata,[e.target.name]:e.target.value})
  }
 function ingredients(e)
 {

   setdata({...data,[e.target.name]:e.target.value})
  
 }
 function change(e)
 {
 
  const name=e.target.name

  if(data[name].trim()=='')
  {
    errorfunction('Please Fill')
  }
  else{
    setcontributedata({
      ...contributedata,
     [name]: [...contributedata[name], data[name]],
    });
    setdata(initialdata1)
  }
 }
 function Submit(){
  const flag=datavalidation(contributedata)
  if(flag)
  {
    savecontributes(contributedata)
  }
 }
  return (
    <div className='mt-4 w-sm-100'>
    <h4 className='lead'>Contribute a Item</h4>
    <InputFeild value={contributedata.name} label='name' type='text' name='name' onchangefunction={onchange} /> 
    <InputFeild value={data.ingredients} label='Add a Ingrediant' type='text' name='ingredients' onchangefunction={ingredients} /> 
    <div className='d-flex justify-content-end'><button onClick={change} className='btn btn-outline-primary mb-3' name='ingredients'>Add ingredients</button></div>
    {contributedata.ingredients.length > 0 && <ListofItems data={contributedata.ingredients}/>}
    <InputFeild value={data.making_process} label='Add a Making Process' type='text' name='making_process' onchangefunction={ingredients}  /> 
    <div className='d-flex justify-content-end'><button onClick={change} className='btn btn-outline-primary' name='making_process'>Add Step</button></div>
    {contributedata.making_process.length > 0 && <ListofItems data={contributedata.making_process}/>}
     <ImgeUpload/>
     <Button variant='success' className='mt-4 w-100' onClick={Submit}>Submit</Button>
    </div>
    
  )
}
const ListofItems=({data})=>{
  return(
    <ul>
    {
      data.map((item,index)=>{
        return(
          <li key={index}><MdOutlineAddCircle className='text-success icon'/>{item}</li>
        )
      })
    }
    </ul>
  )
}