import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import '../css/Header.css';
function Header() {
    return (
        <div className='navbar'>
            <div className='icon'>
                <MdOutlineDarkMode id='dark' />
            </div>

            <div className='text'>
                <div className='under'>
                    <h1>
                        About
                    </h1>
                </div>
                <div className='under'>
                    <h1>
                        Projects
                    </h1>
                </div>
                <div className='under'>
                    <h1>
                        Contact
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default Header
