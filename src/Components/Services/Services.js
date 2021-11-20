import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"

const Services = () => {

const [services, setServices]=useState([]);

// data load 
useEffect(()=>{
fetch("./service.JSON")
.then(res => res.json())
.then(data => setServices(data))

} ,[])

    return (
        <div className="service-container">
           <h1>Our  Services</h1>
                 

{/* display card  */}
       
     <div className="row ">
     {
     services.map((service) => (
            <div className="col-md-4">
                                
       <div className="card ">
<div className="">
<img  src={service.img} />
</div>
<hr />
<h3>{service.name}</h3>
<hr />
<h5>Duration: {service.duration}</h5>
<h5>fee: {service.Fee}</h5>

<Link to="/contact" >
<button className="book-btn  ">Book Now</button>
</Link>

                                      </div>
                                </div>
    ))}
            </div>
    </div>

        
    );
};

export default Services;