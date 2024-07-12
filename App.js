import React from "react";
import "./App.css";
import Blog from './components/Blog/Blog.jsx'
import BlogSingle from './components/Blog/BlogSingle.jsx';
import Navbar from "./components/Navbar/navbar.jsx";
import AboutMain from "./components/AboutMain.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Dashboard from "./components/MyAccount/DashBoard.jsx";
import MyProfile from './components/MyAccount/Myprofile.jsx'
import MyListing from './components/MyAccount/MyListing.jsx';
import AddListing from './components/MyAccount/AddListing.jsx';
import Login from './components/Authentication/Login.jsx';
import Register from './components/Authentication/Register.jsx';
import Forgot from './components/Authentication/ForgotPassword.jsx';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Service from './components/Services/ServiceTwo.jsx';
import HomeMain from './components/Home/HomeMain.jsx';
import Shop from './components/Shop/Shop.jsx';
import ShopCheckout from './components/ShopCheckout/ShopCheckout.jsx';
import Contact from './components/Contact/Contact.jsx';
import Inventory from './components/Inventory/InventoryNew.jsx';
import ThankYou from './components/ThankYou.jsx';
import { useLocation } from "react-router-dom";

function App(){
      const val = useLocation();
      console.log(val)
      return(
            <>
            <Navbar/>
            
            <Routes>
                  <Route exact path='/about' element={<AboutMain/>}></Route>
                  <Route exact path='/contact' element={<Contact/>}></Route>
                  <Route exact path='/' element={<HomeMain/>}></Route>
                  <Route exact path='/inventory' element={<Inventory/>}></Route> 
                  <Route exact path='/dashboard' element={<Dashboard/>}></Route>
                  <Route exact path='/my profile' element={<MyProfile/>}></Route>
                  <Route exact path='/my listing' element={<MyListing/>}></Route>
                  <Route exact path='/add listing' element={<AddListing/>}></Route>
                  <Route exact path='/login' element={<Login/>}></Route>
                  <Route exact path='/register' element={<Register/>}></Route>
                  <Route exact path='/forgot password' element={<Forgot/>}></Route>
                  <Route exact path='/services' element={<Service/>}></Route>
                  <Route exact path='/shop' element={<Shop/>}></Route>
                  <Route exact path='/shop checkout' element={<ShopCheckout/>}></Route>
                  <Route exact path='/blog' element={<Blog/>}></Route>
                  <Route exact path='/blog single' element={<BlogSingle/>}></Route>
                  <Route exact path='/thank' element={<ThankYou/>}></Route>
            </Routes>
           
            <Footer/>
            </>

      );
}
export default App;






            

            
