import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../img/Untitled design.png"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className='error'>

            {/* Not Found  */}
            <img src={img}  />
            <h1>Sorry....Page Not Found</h1>
        <Link to ="/"><button >Home</button></Link>
        </div>
    );
};

export default NotFound;<h1>Not FOund 404</h1>