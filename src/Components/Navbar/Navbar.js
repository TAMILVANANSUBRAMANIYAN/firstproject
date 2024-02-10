import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <Link class="navbar-brand"to="./"><b id="zoro"> Z O R O</b></Link>
    </div>
    
    
    <div class="collapse navbar-collapse navbarleft" id="myNavbar">
      <ul class="nav navbar-nav" >
        <li class="navbarleft" id="navbtn"><Link to="/">HOME</Link></li>
        <li class="navbarleft"><Link to="./Men">MENS</Link></li>
        <li class="navbarleft"><Link to="./Women">WOMEN</Link></li>
        <li class="navbarleft"><Link to="./kids">KIDS</Link></li>
      </ul>    
      <ul class="nav navbar-nav navbar-right navbarright">
        <li id="su"><a href="#"><span class="glyphicon glyphicon-user">signin</span></a></li>
        <li id="su"><a  href="#"><span class="glyphicon glyphicon-shopping-cart">cart</span></a></li>  
      </ul>
    </div>
  </div>
</nav>
  
  );
};

export default Navbar;