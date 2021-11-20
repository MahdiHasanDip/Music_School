import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

import "./Home.css"

const Home = () => {
    const [display, setdisplay]=useState([]);

// Use effecr 
useEffect(()=>{
fetch("./display.JSON")
.then(res => res.json())
.then(data => setdisplay(data))

} ,[])
    
    
    
    
    return (
        <div> 
  
        <div className="top-erea">
        <b>
        <h1>Music is</h1>
        <h1>Life itself!</h1>
        </b>
        </div>






<div className="mt-5"><h1>Our Services</h1></div>
<hr />

{/* display card  */}



<div className="row ">
     {
     display.map((props) => (
            <div className="col-md-4">
                                
       <div className="card ">
<div className="">
<img  src={props.img} />
</div>
<hr />
<h3>{props.name}</h3>
<hr />
<h5>Duration: {props.duration}</h5>
<h5>fee: {props.Fee}</h5>

<Link to="/contact" >
<button className="book-btn  ">Book Now</button>
</Link>

                                      </div>
                                </div>
    ))}
            </div>






{/* display card end  */}

<div className=" end-area">
    <hr />
<h3>
We offer music education for individuals of just
<br />

about every age and skill level.</h3>

<Link to='/services'>
<button className="book-btn "> Learn More</button>
</Link>
</div>





















        </div>
    );
};

export default Home;