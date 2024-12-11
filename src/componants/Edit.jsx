import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = () => {

    const [id, setID] = useState(0)
    const [name, setName] = useState("")
    const [email, setemail] = useState("")

    const navigate = useNavigate();

    useEffect(()=>{
       setID(localStorage.getItem('id'));
       setName(localStorage.getItem('name'))
       setemail(localStorage.getItem('email'))
    },[])

    const handleupdate = (e) => {
        e.preventDefault();
        axios.put(`https://6739a91ea3a36b5a62ef3b2c.mockapi.io/students/Crud1/${id}`, {
            name : name,
            email : email
        }).then(() => {
            navigate('/')
        })
    }

  return (
    <div className='row my-4'>
      <div className="col-6 offset-3">
        <h1>Edit data</h1>
      <form onSubmit={handleupdate}>
      
  <div className="mb-3">
    <label>Name :</label>
    <input type="text" value={name} className="form-control" onChange={(e)=> setName(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label>Email :</label>
    <input type="email" value={email} className="form-control" onChange={(e)=> setemail(e.target.value)}  />
  </div>
  
  <button type="submit" className="btn btn-primary" >Update</button>
</form>
      </div>
    </div>
  )
}

export default Edit
