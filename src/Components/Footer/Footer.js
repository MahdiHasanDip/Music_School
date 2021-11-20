import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
 <div >
     <div className="footer-are">
             <h1>MUSIC SCHOOL</h1>
<br />



        <div className='d-flex justify-content-between'>


{/* list div  */}
            <div >         
          
                 <ul>
                    <Link to="/">
                    <li>Home</li></Link>
                    <Link to="/about">
                    <li>About Us</li></Link>
                    <Link to="/Contact">
                    <li>Contact Us</li></Link>
                    <Link to="/Services">
                    <li>Our Services</li></Link>
                 </ul>
             </div>

{/* subscribe div  */}
            <div className="  pe-5 ">
            <h2>Subscribre Now</h2>
           <input  placeholder="Email" type="text" /> <button>now</button>
            </div>


         </div>
  
    
    </div>
 <small className="copy">Copyright © 2021 Mahdi Hasan Dip</small>
</div>
    );
};

export default Footer;<h1>This is footerd</h1>