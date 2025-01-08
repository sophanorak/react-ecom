import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <img width="250" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  /* <span className="nav-label">
                    Pages <span className="caret"></span>
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonial</a>
                  </li>
                // </ul>
              </li> */}
              <li className="nav-item ">
                <a className="nav-link" href="/product">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i class="fa-solid fa-cart-plus"></i>
                </a>
              </li>
              <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    
  );
};


export default Header;
