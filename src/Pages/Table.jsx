
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
export const Table = () => {
    const [contacts, setContacts] = useState([])

    const fetchContact = () => {

        axios.get('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list').then((res) => {
            setContacts(res.data.contacts)
        }).catch((err) => {
            console.log(err);
            alert("Fetching contacts failed");
        });
    }

  
    useEffect(() => {
        fetchContact();
    }, []);

  
    return (
        <div className='flex flex-col items-center'>
            <button className='bg-green-800 text-white font-bold py-1 px-2 mt-4 mb-4' ><Link to="/home">Add New</Link></button>
            <table className='bg-slate-200'>
                <thead>
                    <tr className='flex gap-10'>
                        <th>Full Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (contacts !== null) ? contacts.map((contact, index) => {
                            return <tr key={index}>
                                <td>{contact.fullName}</td> 
                                <td><img src="{contact.profile} " alt="" /></td>
                                <td className='space-x-2'>
                                    <button className=
                                    " text-white font-bold py-1 px-2 mt-4 bg-black">
                                        <Link to={`/details/${contact._id}`}>More Details</Link>
                                    </button>
                                    
                                </td>
                            </tr>
                        }) : "No contacts found!"
                    }
                </tbody>
            </table >

        </div >
    )
}
