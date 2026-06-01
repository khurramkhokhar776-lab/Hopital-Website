import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarFooter.css";

const Navbar = () => {
  return (
    <>
      <div className="top-strip py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div>
            <i className="bi bi-telephone me-2"></i>
            +92 42 3000 7800
            <span className="mx-3 d-none d-md-inline">|</span>
            <i className="bi bi-clock me-2"></i>
            24/7 Emergency Care
          </div>
          <div>
            <i className="bi bi-geo-alt me-2"></i>
            Lahore, Punjab, Pakistan
          </div>
        </div>
      </div>

      <div className="emergency-strip py-2 text-center fw-semibold">
        24/7 Emergency Helpline: 0331-123-4567-7890
      </div>

      <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center fw-bold text-dark" to="/">
            <span className="navbar-brand-box">B</span>
            Bajwa Hospital
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/departments">
                  Departments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <a href="tel:+924230007800" className="primary-btn py-2 px-3">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;