import React ,{ useState,useRef }from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import chart from '../../assets/chart.jpg'
import { MdOutlineInsertChartOutlined } from "react-icons/md";

function Chartmodal() {
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
 
  return (
    <React.Fragment>
  <MdOutlineInsertChartOutlined className='icon1 text-white' onClick={handleShow}/>
    <h4 className='mt-2 '>Chart</h4>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body className='text-dark'>
        <div className='row'>
        <div className='col'><img src={chart} className='chart'/></div>
        </div>
        </Modal.Body>
        
      </Modal>
    </React.Fragment>
  );
}

export default Chartmodal;