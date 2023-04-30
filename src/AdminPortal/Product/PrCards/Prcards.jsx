import React from 'react'
import "./Prcards.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function Prcards(props) {
  return (
    <div className='Prcards'>
        <div className='card' style={{width: '18rem'}}>
        <img src={props.src} className="card-img-top" style={{height: '10rem',objectFit: 'cover'}} alt="..." />
                 <div className="card-body">
                     <h5 className="card-title">{props.name}</h5>
                     <p className="card-text">{props.details}</p>
                     <p className="card-text">{props.details1}</p>
                     <p className="card-text">{props.details2}</p>
                     <p className="card-text">{props.details3}</p>
                     <a class="btn btn-primary">Add to cart</a>
                     <a class="price btn btn-outline-dark">{props.cost}</a>
               </div>
        </div>
    

    </div>
  )
}


// <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="..." />
//         <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>