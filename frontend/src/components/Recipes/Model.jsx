import React ,{ useState,useRef }from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {data} from './datatype'
import { filtereddata } from './fetchdata';
import { BiSortAlt2 } from "react-icons/bi";
import { FaFilterCircleXmark } from "react-icons/fa6";
import Searchbar from './Searchbar';
function Sort({fulldata,setactualdata}) {
  const [show, setShow] = useState(false);
  const ref=useRef();
  const [targetvalue,settargetvalue]=useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function onchage(e)
  {
    settargetvalue(e.target.value)
  }
  function submit()
  {
    filtereddata(fulldata,setactualdata,targetvalue)
    setShow(false)
  }
  return (
    <React.Fragment>

  <div className='col-4'><div className='sort rounded-pill' variant="primary" onClick={handleShow}>Filter <FaFilterCircleXmark/></div>
 </div>
 <div className='col-3'></div>
  <div className='col-4'><Searchbar fulldata={fulldata}/></div>

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-dark'>
        <div className='row'>
        <div className='col-4 sortfun'>Sort</div><div className='col-8'>
        {
            data.map((links,index)=>{
                return(
                    <div className='col' key={index}>
                    <input type='radio' name='sort' ref={ref} onChange={onchage} className='input'  value={links._id}/>&ensp;<span className='ml-3 display'>{links.name}</span>

                    </div>
                )
            })
        }
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={submit}>
           Apply Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Sort;