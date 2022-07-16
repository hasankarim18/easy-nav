import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import './Dropdown.css'
import { Link } from 'react-router-dom'


const Dropdown = (props) => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (

        <ul onClick={() => {
            handleClick()
            props.closeMobileMenu()
        }} className={click ? `dropdown-menu  ${props.className}` : `dropdown-menu ${props.className}`} >
            {
                MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link onClick={() => setClick(false)} to={item.path} className={`${item.cName}`} > {item.title} </Link>
                        </li>
                    )
                })
            }
        </ul>

    )
}

export default Dropdown