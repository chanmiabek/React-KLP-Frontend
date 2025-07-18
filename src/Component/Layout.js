import React from 'react';
import './Layout.css';
import Footer from './Footer';
import { Link,Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm w-100">
      <div className="container">
        {/* Logo */}
        <span><img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="logo" height={50} width={50} /></span>
        <Link className="navbar-brand fw-bold" to="/">
          <span className="bg-white text-primary px-2 py-1 rounded">KLP</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#klpNavbar"
          aria-controls="klpNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="klpNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/course">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
           
          </ul>

          {/* Auth buttons */}
          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-light btn-sm">Login</Link>
            <Link to="/register" className="btn btn-light btn-sm text-primary">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
    <Outlet/>

            <Footer/>
  </>
  );
};
// Sidebar component moved outside of Layout


export default Layout;
