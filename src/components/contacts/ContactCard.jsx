import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteContactApi } from '../../services/allApi';
import { toast } from 'react-toastify';


function ContactCard({ contact, res }) {

   const [show, setShow] = useState(false);

   const handledelete = async () => {
      const result = await deleteContactApi(contact.id)
      if (result.status == 200) {
         toast.success("Contact Removed!!")
         res(result)
      }
   }

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [view, setView] = useState(false);

   const handleBack = () => setView(false);
   const handleView = () => setView(true);

   const [edit, setEdit] = useState(false);

   const handleExit = () => setEdit(false);
   const handleEdit = () => setEdit(true);

   return (
      <>
         <Card style={{ width: "38rem" }} className='card my-3  p-2'>
            <Card.Body className=''>
               <div className='row align-items-center'>
                  <div className='col-5'>
                     <Card.Img style={{ cursor: 'pointer', height: '200px' }} className='img-fluid contact-img' src={contact?.imageUrl} />
                  </div>
                  <div className='col-7'>
                     <ListGroup variant="flush">
                        <ListGroup.Item>Name : <span className='fw-medium'>{contact?.name}</span></ListGroup.Item>
                        <ListGroup.Item>Mobile : <span className='fw-medium'>{contact?.mobile}</span></ListGroup.Item>
                        <ListGroup.Item>Email : <span className='fw-medium'>{contact?.email}</span></ListGroup.Item>
                     </ListGroup>
                  </div>
               </div>
               <div className='row align-items-center pt-3'>
                  <Link onClick={handleView} className='col btn btn-outline-dark mx-5 mt-1'>
                     <i className='fa fa-eye text-info fs-4' />
                  </Link>
                  <Link onClick={handleEdit} className='col btn btn-outline-dark mx-5 mt-1'>
                     <i className='fa fa-pen text-warning fs-4' />
                  </Link>
                  <Link className='col btn btn-outline-dark mx-5 mt-1' onClick={handledelete}>
                     <i className='fa fa-trash text-danger fs-4' />
                  </Link>
               </div>
            </Card.Body>
         </Card>


         <Modal
            show={view}
            onHide={handleBack}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <img className='img-fluid contact-img3' src={contact?.imageUrl} alt="" />
            </Modal.Header>
            <Modal.Body>
               <ListGroup variant="flush">
                  <ListGroup.Item>Name : <span className='fw-medium'>{contact?.name}</span></ListGroup.Item>
                  <ListGroup.Item>Gender : <span className='fw-medium'>{contact?.gender}</span></ListGroup.Item>
                  <ListGroup.Item>Date of Birth : <span className='fw-medium'>{contact?.birthday}</span></ListGroup.Item>
                  <ListGroup.Item>Mobile : <span className='fw-medium'>{contact?.mobile}</span></ListGroup.Item>
                  <ListGroup.Item>Email : <span className='fw-medium'>{contact?.email}</span></ListGroup.Item>
                  <ListGroup.Item>Permanent Address : <span className='fw-medium'>{contact?.address}</span></ListGroup.Item>
               </ListGroup>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleBack}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>


         <Modal
            show={edit}
            onHide={handleExit}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Edit Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ListGroup variant="flush">
                  <ListGroup.Item>Name : <span className='fw-medium'>{contact?.name}</span></ListGroup.Item>
                  <ListGroup.Item>Gender : <span className='fw-medium'>{contact?.gender}</span></ListGroup.Item>
                  <ListGroup.Item>Date of Birth : <span className='fw-medium'>{contact?.birthday}</span></ListGroup.Item>
                  <ListGroup.Item>Mobile : <span className='fw-medium'>{contact?.mobile}</span></ListGroup.Item>
                  <ListGroup.Item>Email : <span className='fw-medium'>{contact?.email}</span></ListGroup.Item>
                  <ListGroup.Item>Permanent Address : <span className='fw-medium'>{contact?.address}</span></ListGroup.Item>
               </ListGroup>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleExit}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
         
      </>
   )
}

export default ContactCard