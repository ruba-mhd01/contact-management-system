import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContactApi } from '../../services/allApi';
import { toast } from 'react-toastify';

function AddContact({setresult}) {
  const [show, setShow] = useState(false);
  const [contact,setContact]=useState({
    name:"",
    imageUrl:"",
    gender:"",
    birthday:"",
    mobile:"",
    email:"",
    address:""
  })

  const handleAdd=async()=>{
    console.log(contact);
    const {name,imageUrl,gender,birthday,mobile,email,address}=contact
    if(!name || !imageUrl || !gender || !birthday || !mobile || !email || !address){
      toast.warning("Enter Valid Input!!")
    }
    else{
      const result=await addContactApi(contact)
      
      if(result.status==201){
        toast.success("Contact Created Successfully!!")
        setContact({
          name:"",
          imageUrl:"",
          gender:"",
          birthday:"",
          mobile:"",
          email:"",
          address:""
        })
        handleClose()
        setresult(result)
      }
      else{
        toast.error("Failed!!")
        console.log(result)
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <section className='add-contact p-3'>
        <div className='container'>
           <div>
                <h3><span style={{color:"orange"}}>Create</span> Contact </h3>
                <i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, beatae possimus. Dolor vel iure
                   dolorum a placeat ipsam. Error, veniam exercitationem aperiam animi maxime quam numquam consequuntur 
                   voluptatibus earum alias!
                </i>
            </div>
        </div>
        <div className='container mt-4'>
           <div className='row'>
           <form className='col-6' action="">
               <input type="form" placeholder='Name' className='form-control'/>
           </form>
           </div>
        </div>
      </section> */}
           <div>
                <h3><span className='text-primary'>Contact</span> Manager  
                    <Link onClick={handleShow} className='btn btn-primary ms-2'>
                       <i className='fa fa-plus-circle me-1'/>
                       New
                    </Link>
                </h3>
                <i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, beatae possimus. Dolor vel iure
                   dolorum a placeat ipsam. Error, veniam exercitationem aperiam animi maxime quam numquam consequuntur 
                   voluptatibus earum alias!
                </i>
            </div>

            <div className='py-4 row'>
                  <div className='col-3'>
                    <input type="text" className='form-control' placeholder='Search Names' />
                  </div>
                  <div className='col'>
                    <input type="submit" className='btn btn-outline-secondary' value="Search"/>
                  </div>
            </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
             <FloatingLabel controlId="floatingtitle" label="Name" className="mb-3">
                 <Form.Control onChange={(e)=>{setContact({...contact,name:e.target.value})}} type="text" placeholder="" />
             </FloatingLabel>
             <FloatingLabel controlId="floatingimg" label="Photo URL" className="mb-3">
                 <Form.Control onChange={(e)=>{setContact({...contact,imageUrl:e.target.value})}} type="text" placeholder="" />
             </FloatingLabel>
             <FloatingLabel controlId="floatingtext" label="Gender" className="mb-3">
                 <Form.Control onChange={(e)=>{setContact({...contact,gender:e.target.value})}} type="text" placeholder="" />
             </FloatingLabel>
             <FloatingLabel controlId="floatingdate" label="Date of Birth" className="mb-3">
                 <Form.Control onChange={(e)=>{setContact({...contact,birthday:e.target.value})}} type="date" placeholder="" />
             </FloatingLabel>
             <FloatingLabel controlId="floatingnum" label="Mobile" className="mb-3">
                 <Form.Control onChange={(e)=>{setContact({...contact,mobile:e.target.value})}} type="number" placeholder="" />
             </FloatingLabel>
             <FloatingLabel controlId="floatingeInput" label="Email" className="mb-3">
                 <Form.Control onChange={(e)=>{setContact({...contact,email:e.target.value})}} type="email" placeholder="" />
             </FloatingLabel>
             <FloatingLabel controlId="floatingtext" label="Permanent Address" >
                 <Form.Control onChange={(e)=>{setContact({...contact,address:e.target.value})}} type="text" placeholder="" />
             </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddContact