import React from 'react'
import "./sidebar2.css"
import Button1 from "./Component/Button1"
import Longbar from "./Component2/longbar"
import Orderlist from '../OrderList/Orderlist'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'


export default function sidebar2() {
  return (
    <div className="Admin">
    <div className="Bg-layer">
     <Link className='lambda' to="/sidebar2/Home"><Button1 name="Home"/>  </Link> 
     <Link className='lambda' to="/sidebar2/purchase"><Button1 name="Purchase"/>  </Link>
     <Link className='lambda' to="/sidebar2/orders"><Button1 name="Orders"/>  </Link>
     <Link className='lambda' to="/sidebar2/settings"><Button1 name="Settings"/> </Link>
     <Link className='lambda' to="/sidebar2/profile"><Button1 name="Profile"/>  </Link>
     <Link className='lambda' to="/SignIn"><Button1 name="Sign In"/> </Link>
     <Link className='lambda' to="/SignUp"><Button1 name="Sign Up"/> </Link>
      
    </div>
    <Routes>
     <Route path='purchase' element={<Longbar/>}/>
     <Route path='orders' element={<Orderlist/>}/>
     <Route path='Home' element={<Dashboard/>}></Route>
    </Routes>
    </div>
  )
}
