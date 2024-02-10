import React from "react";
import "./Home.css"
import cr1 from "../Assets/cr1.jpg"
import cr2 from "../Assets/cr2.jpg"
import cr3 from "../Assets/cr3.jpg"
import Trandingcollection from"./Trandingcollection"



function Home() {
    return (
      <div>
      <div className="container-fluid">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
     

       </ol>  
       <div className="carousel-inner">
          <div className="item active">
            <img id="crimg"src={cr2} alt="Dress1"/>
          </div>
          <div className="item">
            <img id="crimg" src={cr1} alt="Dress2" />
          </div>
          <div className="item">
            <img  id="crimg" src={cr3} alt="Dress3" />
          </div>
        
       </div> 
   
       <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <br/>

    <Trandingcollection/>
  
    </div>
  
   







    
    
    );
  }
export default Home