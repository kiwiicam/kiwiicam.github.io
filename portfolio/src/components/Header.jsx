import React, { useState } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import '../css/Header.css';
import '../css/Global.css';
function Header() {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    const screenWidth = window.screen.width;
    return (
        <div className='navbar'>
            <div className='icon'>
                <MdOutlineDarkMode id='dark' />
            </div>
            {screenWidth < 800 ?
                (show ? <><RxCross1 id='cross' onClick={handleClick} />
                    <div className='mobile-menu'>
                        <div className='box'>
                            <h1>
                                About
                            </h1>
                        </div>
                        <div className='box'>
                            <h1>
                                Projects
                            </h1>
                        </div>
                        <div className='box'>
                            <h1>
                                Contact
                            </h1>
                        </div>
                    </div></> : <RiMenu5Line id='menu' onClick={handleClick} />)
                :
                <div className='text'>
                    <div className='under1'>
                        <h1>
                            About
                        </h1>
                    </div>
                    <div className='under2'>
                        <h1>
                            Projects
                        </h1>
                    </div>
                    <div className='under3'>
                        <h1>
                            Contact
                        </h1>
                    </div>
                </div>
            }

        </div>
    )
}

export default Header
