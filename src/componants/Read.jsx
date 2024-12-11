import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getdata() {
    axios.get("https://6739a91ea3a36b5a62ef3b2c.mockapi.io/students/Crud1").then((res) => {
        setData(res.data);
      });
    console.log(data);
  }

function handleDelete(id){
    axios.delete(`https://6739a91ea3a36b5a62ef3b2c.mockapi.io/students/Crud1/${id}`)
    .then(()=>{
        getdata()
    })
}

function setDataToStorage(id, name, email){
    localStorage.setItem('id',id);
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
}

 useEffect(()=> {
    getdata();
 },[])

  return (
    <div className="row my-4">
      <div className="col-8 offset-2">
        <div className="my-4">
            <Link to='/create'>
            <button className="btn btn-primary">Create New Data</button>
            </Link>
        </div>
        <h1>Read Operation</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
           {
            data.map((item)=> {
                return (
                    <>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                           <Link to='/edit'>
                           <button className="btn btn-primary" onClick={()=> setDataToStorage(item.id, item.name, item.email)}>Edit</button>
                           </Link>
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>
                                {
                                    if(window.confirm('Are you sure to delete the data?'))
                                    {
                                        handleDelete(item.id)
                                    }
                                }
                            }>Delete</button>
                        </td>
                    </tr>
                    </>
                )
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
