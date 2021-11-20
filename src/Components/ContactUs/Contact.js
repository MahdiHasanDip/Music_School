import React from 'react';
import "./Contact.css"

const contact = () => {
    return (
       <div className="">

{/* Contact us area  */}

            <div className="contact-container">
          <br /><br /><br />
           <h1>Contact Us</h1>
           <h4>Phone :123456789</h4>
           <h4>Mail: abc@abc.com</h4>

        </div>

<div className="sign ">
<hr />
<h3>Our customer support representatives are ready to help you 24/7, 365 days a year!</h3>
<br />
<br />

{/* sign up  */}

  <div className="mb-3">
    
<input className="name" type="text" placeholder="Your Email*"></input>
<br />
<input className="same" type="email" placeholder="Your Email*"></input>
<br />
<input className="same" type="password" placeholder="Your Password*"></input>
<br />
<input className="massage" type="etext" placeholder="Your Massage"></input>
<br />
<button className="my-btn">Submit</button>



</div>
</div>
       </div>
    );
};

export default contact;

