import './Filter.css'
import Img2 from '../../assets/Images/Img2.jpg'
import Sbut1 from '../../elements/Sbutton1/Sbutton'
import Sbut2 from '../../elements/Sbutton2/Sbutton'
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar"
import {Link} from "react-router-dom"


export default function Filter() {
  return (
    <div className='imgContainer'>
      <Navbar />
      <img className='bgimg'src={Img2} alt="alt"/>
      <div className='overlay'></div>
      <div className='ss'>
      <p>The appropriate place for products with</p>
      <p>comprehensive agricultural supply chain.</p>
      <Sbut1 />
      <Sbut2 />
      <Button className='Gbut' variant="contained" LinkComponent={Link} to="/Login" >Get Started</Button>
     
      </div>
    </div>
  )
}
