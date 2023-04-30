import './App.css';
import Filter from './components/HomeLogin/Filter';
import UserLogin from './Login Page/UserLogin'
import {Routes, Route} from "react-router-dom"
import Sidebar from '../src/AdminPortal/SideBar/sidebar'
import Sidebar2 from './AdminPortal/SideBar/sidebar2';
import Webpage2 from './Webpage2/Webpage2';
import ProductP from './AdminPortal/Product/ProductP'
import SignUp from './Login Page/SignUp';
import SignIn from './Login Page/SignIn';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Filter/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/sidebar2/*" element={<Sidebar2 />}/>
        <Route path="/Webpage2/*" element={<Webpage2/>}/>
        <Route path="/sidebar2/Product" Component={<ProductP />}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        />


    </Routes>
    
  );
}


export default App;
