import React from 'react'
import { Link } from 'react-router-dom'
import { Card} from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

function ViewContact() {
  return (
    <>
        <div className='container mt-4'>

        <div>
         <Link to={'/'} className='btn btn-warning'>Go Back</Link>
        </div>

        <Card style={{width:"70%"}} className='card mt-3 bg-light p-5'>
          <Card.Body className=''>
               <div className='row align-items-center'>
                 <div className='col-5'>
                    <Card.Img style={{cursor:'pointer', height:'100%'}} className='img-fluid contact-img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6pnzUtMPU8pxC8sZAHObuuxf6Rqu-LnMKg&s'/>
                 </div>
                 <div className='col-7'>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Name : <span className='fw-bold'>Zahra</span></ListGroup.Item>
                        <ListGroup.Item>Gender : <span className='fw-bold'>male</span></ListGroup.Item>
                        <ListGroup.Item>Date of Birth : <span className='fw-bold'>22/5/2000</span></ListGroup.Item>
                        <ListGroup.Item>Mobile : <span className='fw-bold'>9876543210</span></ListGroup.Item>
                        <ListGroup.Item>Email : <span className='fw-bold'>zahra@gmail.com</span></ListGroup.Item>
                        <ListGroup.Item>Permanent Address : <span className='fw-bold'>ZahrahfgdrseawazxfcgvhbjnmnbvcxzAQQWEERYUIOKJHGDrtryubcxdszx bkcyghb </span></ListGroup.Item>
                    </ListGroup>
                 </div>
               </div>
               <div className='row d-flex justify-content-around pt-5'>
                  <Link to={'/edit/:contactId'} className='col-1 btn btn-warning mt-1'>
                     <i className='fa fa-pen text-dark fs-3'/>
                  </Link>
                  <Link className='col-1 btn btn-danger mt-1'>
                     <i className='fa fa-trash text-dark fs-3'/>
                  </Link>
               </div>
          </Card.Body>
       </Card>
        </div>
    </>
  )
}

export default ViewContact