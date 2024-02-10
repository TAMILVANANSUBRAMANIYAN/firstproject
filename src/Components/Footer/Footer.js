import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
      <footer className="footercontainer">
          <div>
              <h3>ZORO</h3>
          </div>
          <div>
          <p  className='contactlogo'>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-whatsapp"></a>
          <a href="#" class="fa fa-globe"></a> 
          </p>  
          <a href="#" class="fa fa-copyright">2024 ZORO,inc</a>
          </div>
      </footer>
    )
  }
  
  export default Footer;