import React from 'react'
import Users from './Users';
import Products2 from './Products2';
import Form from './Form';
import Logo from './Logo';
import Carousel from './Carousel';
import Products from './Products';
import Sidebar from './Sidebar';
export default function Dashboard() {
  return (
    <>
    <div className='container-fluid '>
        <Logo/>
        <div className='vid'>
        <Sidebar/>
        <Carousel/>
        <div className='row'>
        <Products/>
          </div>
          <div className='row mt-2'>
            {/* <Users/> */}
          <Form/>
          </div>
          <Products2/>
        </div>
        </div>
    </>
  )
}
