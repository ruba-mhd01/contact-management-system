import React,{useEffect,useState} from 'react'
import ContactCard from './ContactCard'
import AddContact from './AddContact'
import { getContactsApi } from '../../services/allApi'

function ContactList() {

  const [data,setData]=useState([])
  const [result,setResult]=useState({})
  const [resp,setResp]=useState({})
  

  useEffect(()=>{
     getData()
  },[result,resp])

  const getData=async()=>{
    const result=await getContactsApi()
    console.log(result)
    if(result.status==200){
      setData(result.data)
    }
  }

  return (
    <>
      <section className='contact-search p-3'>
        <div className='container'>
            <AddContact setresult={setResult}/>
        </div>
      </section>

      <section className='contact-list'>
        <div className='container shadow-lg mb-5 ' style={{borderRadius:"20px"}}>
          {
            data.length>0 ?
             <div className='row p-2 justify-content-around'>
              {data.map(item=>(
                       <ContactCard contact={item} res={setResp}/>
              ))}
             </div>
            
            :
            <h4 className='text-danger text-center'>No Contacts Created!!</h4>
          }
            
        </div>
      </section>
    </>
  )
}

export default ContactList