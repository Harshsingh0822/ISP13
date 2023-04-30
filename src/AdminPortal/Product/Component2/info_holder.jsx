import React from 'react'
import "./info_holder.css"
import Info_Img from "../../../assets/Images/team-4.jpg"

export default function Info_holder() {
  return (
    <div className="info_holder">
      <div className="info_img">
       <img className="info_img_pp"src={Info_Img} alt="asd"/>
      </div>
      <div className="info_name">
       <h1 className='t2'>COORPERATIVE SOCIETY</h1>
       <p>Durgapur Expressway, P.O <br />
          Dankuni Coal Express,<br />
          Ph.no +91 898776374xx </p>
      </div>
      <div className='space'></div>
      <div className="info_details">
       <p>farming cooperative society is also known as an agricultural cooperative. The main objective of farming cooperatives are:- Helping the small farmers to get the benefits of mechanised farming. Providing improved seeds, fertilizers, irrigation and other modern techniques.</p>
      </div>

      
    </div>
  )
}



