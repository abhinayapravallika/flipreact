import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
export default function Products() {
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    },0)
    console.log(products)
  return (
    <>
    {
        products.map((element,index)=>{
            return(
                <>
                <div class="card float-start mt-3 mll"  style={{width:"20rem",height:"33rem"}}>
                <img src={element.thumbnail}  style={{width:"20rem",height:"10rem"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h3 class="card-title">{element.productname}</h3>
                <p class="card-text">{element.description}</p>
             </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Product-id:</b> {element.productname}</li>
              <li class="list-group-item"><b>Product-Price:</b> {element.price}</li>
              <li class="list-group-item"><b>Product-Brand: </b>{element.brand}</li>
            </ul>
           </div>
                </>
            )
        })
    }
    </>
  )
}