import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';

export const More = (props) => {
  const [contact, setContact] = useState()
const navigate = useNavigate();
  let { contactId } = useParams();

  const fetchContact = (id) => {
    axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" + id)
      .then((resp) => {
        setContact(resp.data.contact);
      }).catch((error) => {
        console.log(error);
        alert("Failed to fetch contact");
      });
  };

  const deleteContact = (id) => {
    axios.delete( "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/delete?id=" + id)
    .then((resp) => {
        console.log(resp.data);
        fetchContact(); // To refresh the contacts list
        alert("successful deleted");
    })
    .catch((error) => {
        console.log(error);
        
    });
 };


  useEffect(() => {
    fetchContact(contactId);
  }, [contactId]);

  return (
    <div>
      <div className='mt-8  flex flex-row justify-around'>
        <div>
         
          <p>Full names: {contact ? contact.fullName : "Not available"}</p>
          <p>E-mail: {contact ? contact.email : "Not available"}</p>
          <p>Phone: {contact ? contact.phone : "Not available"}</p>
          <p>Created on : {contact ? contact.createdAt : "Not available"}</p>
          
        </div>
        <div className='space-x-4 z'>
         <button onClick={() => navigate(`/update/${contact._id}`)} className="py-3 px-6 bg-blue-500 text-white rounded-lg text-base hover:bg-blue-600 transition duration-300">Update</button>
          <button className='bg-red-500 py-1 px-2 text-white'  onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
