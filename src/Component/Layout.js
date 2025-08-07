// src/components/Layout.js
import React from 'react';
import './Layout.css'; // Your custom CSS if any
import Footer from './Footer';
import { Link, Outlet } from 'react-router-dom';
// 'bootstrap/dist/css/bootstrap.min.css' is likely imported in index.js already,
// so you might not need it here, but it doesn't hurt.
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fw-bold shadow-sm w-100 mx-0 px-0">
        <div className="container">
          {/* Logo */}
          <span><img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="logo" height={50} width={50} /></span>
          <Link className="navbar-brand fw-bold" to="/">
            <span className="bg-white text-primary px-2 py-1 rounded">KLP</span>
          </Link>

          {/* Toggler (Hamburger Icon) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="klpNavbar" // Target the ID of the collapsible content
            aria-controls="klpNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation drop-down"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content (collapsible) */}
          <div className="collapse navbar-collapse" id="klpNavbar"> {/* This ID must match data-bs-target */}
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
      <Outlet /> {/* This is where child routes will be rendered */}
      <Footer />
    </>
  );
};

export default Layout;