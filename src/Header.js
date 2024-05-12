import React from 'react';
import foodAppLogo from '../images/foodAppLogo.png';


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={foodAppLogo}/>
            </div>

            <div className="nav-containers">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;