import React, { useState } from 'react'
import { useContext,useEffect} from 'react'
import axios from 'axios';
import { store } from '../App'
export default function Users() {
    let sno=1;
    const[products,setProducts]=useState([{}]);
    const fetchData=()=>{
            axios.get('http://localhost:3002/products')
            .then(res=>setProducts(res.data))
        }
    console.log(products)
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3002/products/${id}`)
        .then((res)=>{
            alert('Product Deleted')
            fetchData()
        })
    }
    useEffect(()=>{
        fetchData()
    },0)
  return (
    <>
    <table  className='table table-bordered table-responsive++'>
      <thead>
          <tr>
              <th>SNo</th>
              <th>Product id</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
              {
                products.map((e,i)=>{
                    return(
                        <>
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.productid}</td>
                            <td>{e.productname}</td>
                            <td>{e.brand}</td>
                            <td>{e.price}</td>
                            <td>{e.description}</td>
                            <td><img src={e.thumbnail}  style={{width:"10rem",height:"8rem"}} className="card-img-top pl" alt="..."/></td>
                            <td><button><i id="actions1" i class="fa-solid fa-pen-to-square"></i> </button><button onClick={()=>handleDelete(e.id)}><i id="actions2" class="fa-solid fa-trash-can"></i></button></td>
                        </tr>
                        </>
                    )
                })
            } 
        </tbody>
    </table>
    </>
  )
}

