import { useState } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from "../img/reactLogo.png"
import "../navbar/navbar.css"


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="intro" spy={true} smooth={true} offset={-100} duration={2000} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-60} duration={2000} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="pl" spy={true} smooth={true} offset={-80} duration={2000} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contact" spy={true} smooth={true} offset={-75} duration={2000} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar