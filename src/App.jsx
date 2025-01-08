import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'
// import Header from './component/Header'
import Home from './component/Home'
import Product from "./component/Product";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App