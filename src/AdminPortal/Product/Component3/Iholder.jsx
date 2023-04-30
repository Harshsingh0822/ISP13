import React from 'react'
import "./Iholder.css"
import Village1 from "../../../assets/Images/Village1.jpg"

export default function Iholder() {
  return (
    <div className="Iholder">
      <img className='VImg' src={Village1} alt="sd" />
      <div className='overlay2'></div>
    </div>
  )
}
