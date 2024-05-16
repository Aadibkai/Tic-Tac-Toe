import React, { useState } from 'react';
import './NavBar.css';
// import {GiHamburgerMenu} from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
export default function NavBar() {
    const [isMobile, setIsMobile] = useState(true);

    return (
  <>
        <nav className='TopNav'>
            <div className='Logo'>
                <h3 id='logo'>OnClick</h3>
            </div>
            <div className='menu-links'>

                <ul className={isMobile ? 'navCon' : 'mobile-menu-icons' }
                     onClick={()=>setIsMobile(false)}>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Service'>Service</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                    <li><a href='#AboutUs'>About Us</a></li>
                </ul>

            </div>

            <div className='Sign-form'>
                <div id='log'>
                    <a href='#Login'>Login</a>
                </div>
                <div id='btn'>
                    <button><a href='#'> Sign Up</a> </button>
                </div>

            </div>

            <button className='mobile-menu-icons'
                onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? <i className='fas fa-bars'></i> : <i className='fas fa-times'></i>}
            </button>


        </nav>
</>
    )

}