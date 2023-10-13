import React from 'react'
import logo3 from '../Images/logo3.png'
export default function Logo() {
  return (
    <>
    <div className='row bg-white'>
    <div className='col-md-2 logo'>
        <img src={logo3}/>
    </div>
    <div className=" col-md-6 search">
            <div className="search-container">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="search for products,brands and more..." name="search"/>
            </div>
    </div>
    <div className='col-md-4 float-start'>
          <ul>
            <li><i class="fa-solid fa-store"></i> Become a seller</li>
            <li><i class="fa-solid fa-user"></i> Pravali <i class="fa-solid fa-angle-down"></i></li>
            <li><i class="fa-solid fa-cart-plus"></i> Cart</li>
            <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
          </ul>
        </div>
    </div>
</>
  )
}
