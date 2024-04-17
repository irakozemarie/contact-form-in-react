import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Home = () => {


  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [picture, setPicture] = useState("")


  const navigate = useNavigate();

  function addContact(e) {
    e.preventDefault();

    let newContact = { fullName, email, phone, picture };
    axios.post('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/add', newContact).then((res) => {
      console.log(res.data)
      navigate("/");
    }).catch((err) => {
      alert("create contact fail");

    })

  }




  return (
    <div className='flex flex-col items-center justify-center'>
      <form>
        <h1 className='mb-4 mt-8 font-bold text-1xl'>Add Contact</h1>
        <label>Full name</label><br></br>
        <input type="text" placeholder='Enter your names' className='w-96 h-12 border-2 pl-2'
          onChange={e => setFullName(e.target.value)}></input><br></br>


        <label>Email</label><br></br>
        <input type="text" placeholder='Enter your E-mail' className='w-96 h-12 border-2 pl-2'
          onChange={e => setEmail(e.target.value)}></input><br></br>

        <label>Phone</label><br></br>
        <input type="text" placeholder='Enter your Phone number' className='w-96 h-12 border-2 pl-2'
          onChange={e => setPhone(e.target.value)}></input><br></br>

      
        <button className='w-96 h-12 border-2 mt-4 bg-black text-white' onClick={addContact}>Create</button>
      </form>

    </div>
  )
}
