import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import './Navbar.css'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faXmark, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 960) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const onMouseEnter = () => {
        if (window.innerWidth > 960) {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth > 960) {
            setDropdown(false)
        }// else {
        //     setDropdown(false)
        // }
    }



    const openDropDown = () => {
        if (window.innerWidth < 960) {
            setDropdown(!dropdown)
        }
    }



    console.log(isMobile)

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link to="/" className="navbar-logo" >
                    Easy Nav
                </Link>
                <div onClick={handleClick} className="menu-icon">
                    <FontAwesomeIcon icon={click ? faXmark : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        className="nav-item">
                        <span style={{ cursor: 'pointer' }} className="nav-links" onClick={openDropDown} >
                            All Services <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        {
                            isMobile === false ?
                                dropdown ?
                                    <Dropdown closeMobileMenu={closeMobileMenu} className={dropdown ? 'mobile_active' : ''} />
                                    : ''
                                : ''
                        }
                        {
                            isMobile === true ? <Dropdown closeMobileMenu={closeMobileMenu} className={dropdown ? 'mobile_active' : ''} /> : ''
                        }

                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu} >
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu} >
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu} >
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Button />
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar