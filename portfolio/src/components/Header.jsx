import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import '../css/Header.css';
import '../css/Global.css';
function Header() {
    const [show, setShow] = useState(false);
    const [theme,setTheme] = useState(false);// false indicates light mode, true indicates dark mode
    function handleClick() {
        setShow(!show);
    }

    function changeThemeState(){
        setTheme(!theme);
    }

    function changeTheme() {
        localStorage.setItem("theme", "dark")
        changeThemeState();
    }

    function changeThemeLight(){
        localStorage.setItem("theme", "light");
        changeThemeState();
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme.localeCompare('dark') === 0) {
            document.documentElement.style.setProperty('--black', '#ffffff');
            document.documentElement.style.setProperty('--white', '#000000');
        }
        else if(theme.localeCompare('light') === 0){
            document.documentElement.style.setProperty('--black', '#000000');
            document.documentElement.style.setProperty('--white', '#ffffff');
        }
    }, [theme]);

    const screenWidth = window.screen.width;
    return (
        <div className='navbar'>
            <div className='icon'>
                {theme ?
                    <MdOutlineDarkMode id='dark' onClick={changeThemeLight} /> :
                    <MdOutlineLightMode id='dark' onClick={changeTheme}/>
                }
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
