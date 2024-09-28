import React,{ useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import ContactList from './components/contacts/ContactList'
import AddContact from './components/contacts/AddContact'
import ViewContact from './components/contacts/ViewContact'
import EditContact from './components/contacts/EditContact'
 /* The following line can be included in your src/index.js or App.js file
 to use bootstrap without installation */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import './bootstrap.min.css'



function App() {

  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' element={<ContactList/>}/>
       <Route path='/add' element={<AddContact/>}/>
       <Route path='/view/:contactId' element={<ViewContact/>}/>
       <Route path='/edit/:contactId' element={<EditContact/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
