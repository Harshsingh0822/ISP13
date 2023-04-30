import React from 'react'
import './PrHolder.css'
import Prcards from '../PrCards/Prcards'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { iteData } from '../../ItemsData'


function item_data(iteData){
  return(
    <div className='col'>
    <Prcards 
    key={iteData.key}
    name={iteData.PrName}
    details={iteData.PrDetails}
    details1={iteData.PrDetails1}
    details2={iteData.PrDetails2}
    details3={iteData.PrDetails3}
    src={iteData.prSrc}
    cost={iteData.cost} /></div>
  )
}

export default function holder() {
  return (
    <div className='Prholder'>
     <div className='PrHeading'><h1 >Products</h1></div>
     <div className='.container-fluid prbox'>
      <div className='row roww '>
        {iteData.map(item_data)}
      </div>
   
     </div>
   
    </div>
  )
}


