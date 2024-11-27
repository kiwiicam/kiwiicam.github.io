import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link, animateScroll as scroll } from 'react-scroll';
import { RiMenu5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import '../css/Header.css';
import '../css/Global.css';
import { useNavigate } from 'react-router-dom';
function Header() {
    const screenWidth = window.screen.width;
    const [show, setShow] = useState(false);
    const [theme,setTheme] = useState(false);// false indicates light mode, true indicates dark mode
    const [page, setPage] = useState(null);
    const navigate = useNavigate();

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
        if(theme === null)
        {
            return;
        }
        if (theme.localeCompare('dark') === 0) {
            document.documentElement.style.setProperty('--black', '#ffffff');
            document.documentElement.style.setProperty('--white', '#000000');
        }
        else if(theme.localeCompare('light') === 0){
            document.documentElement.style.setProperty('--black', '#000000');
            document.documentElement.style.setProperty('--white', '#ffffff');
        }
    }, [theme]);

    function changePageAbout(num){
        navigate('/');
        scroll.scrollTo(num);
    }

    function changePageContact(num){
        navigate('/');
        scroll.scrollTo(num);
    }

    
    return (
        <div className='navbar'>
            <div className='icon'>
                {theme ?
                    <MdOutlineLightMode id='dark' onClick={changeThemeLight} /> :
                    <MdOutlineDarkMode id='dark' onClick={changeTheme}/>
                }
            </div>
            {screenWidth < 800 ?
                (show ? <><RxCross1 id='cross' onClick={handleClick} />
                    <div className='mobile-menu'>
                        <div className='box'>
                            <h1 onClick={() => changePageAbout(0)}>
                                About
                            </h1>
                        </div>
                        <div className='box'>
                            <h1 onClick={() => navigate('/projects')}>
                                Projects
                            </h1>
                        </div>
                        <div className='box' onClick={() => changePageContact(2490)}>
                            <h1>
                                Contact
                            </h1>
                        </div>
                    </div></> : <RiMenu5Line id='menu' onClick={handleClick} />)
                :
                <div className='text'>
                    <div className='under1'>
                        <h1 onClick={() => changePageAbout(0)}>
                            About
                        </h1>
                    </div>
                    <div className='under2'>
                        <h1 onClick={() => navigate('/projects')}>
                            Projects
                        </h1>
                    </div>
                    <div className='under3'>
                        <h1 onClick={() => changePageContact(3090)}>
                            Contact
                        </h1>
                    </div>
                </div>
            }

        </div>
    )
}

export default Header
