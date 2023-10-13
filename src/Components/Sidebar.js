import React from 'react'
import topoff from "../Images/topoffers.webp";
import mobile from "../Images/mobilesandtabs.webp";
import electroics from "../Images/electronics.webp";
import tv from "../Images/tv.webp";
import fashion from "../Images/fashion.webp";
import beuty from "../Images/beauty.webp";
import home from "../Images/home.webp";
import furniture from "../Images/furniture.webp";
import flight from "../Images/flight.webp";
import grocery from "../Images/grocery.webp";
export default function Products() {
  return (
    <>
    <div className='row justify-content-center bg-white mt-2 mb-2 produtsmainrow'>
        <div id="productsrow" className='mt-2'>
        <div className='justify-content-center'>
            <img src={topoff} width="60px"/>
            <h6>TopOffers</h6>
        </div>
        <div className='justify-content-center'>
            <img src={mobile} width="60px"/>
            <h6>Mobiles&Tablets</h6>
        </div>
        <div className='justify-content-center'>
            <img src={electroics} width="60px"/>
            <h6>Electronics</h6>
        </div>
        <div className='justify-content-center'>
            <img src={tv} width="60px"/>
            <h6>Tv&Appiliances</h6>
        </div>
        <div className='justify-content-center'>
            <img src={fashion} width="60px"/>
            <h6>Fashion</h6>
        </div>
        <div className='justify-content-center'>
            <img src={beuty} width="60px"/>
            <h6>Beauty</h6>
        </div>
        <div className='justify-content-center'>
            <img src={home} width="60px"/>
            <h6>Home&Kitchen</h6>
        </div>
        <div className='justify-content-center'>
            <img src={furniture} width="60px"/>
            <h6>Furniture</h6>
        </div>
        <div className='justify-content-center'>
            <img src={flight} width="60px"/>
            <h6>Flights</h6>
        </div>
        <div className='justify-content-center'>
            <img src={grocery} width="60px"/>
            <h6>Grocery</h6>
        </div>
    </div>
    </div>
    </>
  )
}