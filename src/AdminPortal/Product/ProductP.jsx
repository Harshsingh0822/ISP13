import React from 'react'
import "./ProductP.css"
// import Holder from "../Product/component1/holder"
import InfoHolder from "../Product/Component2/info_holder"
import Iholder from "../Product/Component3/Iholder"
import Prholder from "../Product/PrHolder/PrHolder"



export default function ProductP() {
  return (
    <div className='ProductP'>
            
            <Iholder />
            <InfoHolder />
            <Prholder />
            
            
    </div>
  )
}
