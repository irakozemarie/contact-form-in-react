import React from 'react'

export const Update = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <form>
        <h1 className='mb-4 mt-8 font-bold text-1xl'>Add Contact</h1>
        <label for="full name" >Full name</label><br></br>
        <input type="text" placeholder='Enter your names' className='w-96 h-12 border-2 pl-2'></input><br></br>
        <label for="E-mail">Email</label><br></br>
        <input type="text" placeholder='Enter your E-mail' className='w-96 h-12 border-2 pl-2'></input><br></br>
        <label for="phone" placeholder='Password'>Phone</label><br></br>
        <input type="number"  className='w-96 h-12 border-2 pl-2'></input><br></br>
        <button  className='w-96 h-12 border-2 mt-4 bg-green-400 text-white'>Update</button>
       
        </form>
       
    </div>
  )
}
