
import React from "react";
import  './Navbar.css'

export default function Navbar(){
  return (
  <>
  <nav className='navigation'>
    
     <h2>Onclick</h2>
     <button className="hamburger">
       <div className='line'></div>
       <div  className='line'></div>
       <div  className='line'></div>
      </button>
      <div className='full-nav'>
       <div className='left-nav'>
         <h3>|</h3>
         <h4>Home</h4>
         <h4>Services</h4>
         <h4>Contact</h4>
         <h4>About Us</h4>
       </div>
       
      </div>
      <div className='right-nav'>
         <button>Login</button>
         <button  className="signup-btn">Sign Up</button>
       </div>
      

  </nav>
  
     <div className='bodySection'>
      <div >
    <img src="https://images.pexels.com/photos/15462344/pexels-photo-15462344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="300px"/>
    
    </div>
    <div >
    <img  src='https://images.pexels.com/photos/13497984/pexels-photo-13497984.jpeg' width='300PX'/>
    </div>
    </div> 

  </>
  );
}