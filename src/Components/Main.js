import React from 'react'
import Navbar from './Header/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Consulting from './Pages/Consulting'
import ContactUs from './Pages/ContactUs'
import Marketing from './Pages/Marketing'
import Products from './Pages/Products'
import Services from './Pages/Services'
import Signup from './Pages/Signup'
import Development from './Pages/Development'
import Design from './Design'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/products" element={<Products />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/development" element={<Development />} />
                <Route path="/design" element={<Design />} />
            </Routes>
        </div>
    )
}

export default Main