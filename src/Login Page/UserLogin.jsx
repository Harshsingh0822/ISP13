import React from 'react'
import Img2 from '../assets/Images/Img2.jpg'
import './UserLogin.css'
import Ljungle from '../assets/Images/Ljungle.jpg'
// import indexs from '../components/sign-in/indexs'
import Navbar from "../components/Navbar/Navbar"
import Bentry from './Button_entry/B_entry'




export default function UserLogin() {
  return (
    <div className='imgContainer'>
      <Navbar />
      <img className='bgimg'src={Img2} alt="alt"/>
      <div className='overlay'></div>
      <div className='ss'>
      <p className='head1'></p>
      </div>
      <div className='loginBox'>
        <div className='lbimg'>
        <img className='lbimg1'src={Ljungle} alt='ad'></img>
        <div className='lbtext'>WELCOME</div>
        </div>
        <div className='ldetails'>
        <Bentry 
        Name="Buyer" Link="/sidebar2"/>
        <Bentry
        Name = "Cooperative Society" Link="/webpage2"/>
        </div>
      </div>
    </div>
  )
}
