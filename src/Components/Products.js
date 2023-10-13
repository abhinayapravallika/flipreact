import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
export default function Products() {
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setProducts(res.data.products))
    },0)
    console.log(products)
  return (
    <>
    {
        products.map((element,index)=>{
            return(
                <>
                <div class="card float-start mt-3 mll"  style={{width:"22rem",height:"37rem"}}>
                <img src={element.thumbnail}  style={{width:"20rem",height:"10rem",marginTop:"10px"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">{element.title}</li>
              <li class="list-group-item">{element.price}</li>
              <li class="list-group-item">{element.rating}</li>
            </ul>
            <div class="card-body">
             <a href="#" class="card-link">Card link</a>
             <a href="#" class="card-link">Another link</a>
           </div>
           </div>
                </>
            )
        })
    }
    </>
  )
}