
import './App.css';
import './css/bootstramp.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createContext,useState } from 'react';
import Products from './Components/Products';
import Logo from './Components/Logo';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Carousel from './Components/Carousel';
import Users from './Components/Users';
import Form from './Components/Form';
import Products2 from './Components/Products2';
export const store = createContext()
function App() {
  const[products,setProducts]=useState('./Products')
  return (
     <>
     <BrowserRouter>
     <store.Provider value={[products,setProducts]}>
     <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
        {/* <div className='container-fluid '>
        <Logo/>
        <div className='vid'>
        <Sidebar/>
        <Carousel/>
        <div className='row'>
        <Products/>
          </div>
          <div className='row mt-2'>
            <Users/>
          <Form/>
          </div>
          <Products2/>
        </div>
        </div> */}
        </store.Provider>
      </BrowserRouter>
     </>
  );
}
export default App;


