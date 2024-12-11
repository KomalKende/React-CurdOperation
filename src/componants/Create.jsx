import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const navigate = useNavigate()

    function handlesubmit(e){
        e.preventDefault();
        axios.post('https://6739a91ea3a36b5a62ef3b2c.mockapi.io/students/Crud1', {
            name : name,
            email : email
        }).then((res)=>{
            navigate('/')
        })
    }


  return (
    <div className='my-4'>
<div className="row">
    <div className="col-6 offset-3">
    <div className="my-4">
            <Link to='/'>
            <button className="btn btn-primary">Read Data</button>
            </Link>
        </div>
<h1 className='text-center'>Create operation</h1>
<form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label>Name :</label>
    <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label>Email :</label>
    <input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} />
  </div>
  
  <input type="submit" value="submit" className="btn btn-primary" />
</form>
    </div>
</div>
    </div>
  )
}

export default Create
