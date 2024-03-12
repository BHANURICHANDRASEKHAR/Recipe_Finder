import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CiSearch } from "react-icons/ci";
import {searchdata} from './fetchdata'
export default function Searchbar({fulldata}) {
    const [show,setShow]=useState(false)
    const [searchdata,setsearchdata]=useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
     <div>
     <div className='col-sm-3'><div className='sort rounded-pill' variant="primary" onClick={handleShow}>Search <CiSearch/> </div>
     </div>
         <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
             </Modal.Header>
             <Modal.Body className='text-dark'>
             <SearchbarIcons fulldata={fulldata} setsearchdata={setsearchdata}/>
             <div className='container mt-4'>
             {searchdata.length>0&&<ItemsTable searchdata={searchdata}/>}
             </div>
             </Modal.Body>
           
           </Modal>
     </div>
  )
}
const SearchbarIcons=({setsearchdata,fulldata})=>{
    return(
        <div className='row'>
        <input type='search'   className='search' placeholder='Search for Food' onChange={(e)=>searchdata(setsearchdata,fulldata,e.target.value)}></input>
        </div>
    )
}
const ItemsTable=({searchdata})=>{
    return(
        <div className='row'>
        <table width='100%' >
         {
            searchdata.map((items,index)=>{
                return(
                    <tr key={index} className='tr'>
                    <td ><img src={items.img}/></td>
                    <td>{items.name}</td>
                    </tr>
                )
            })
         }
        </table>
        </div>
    )
}