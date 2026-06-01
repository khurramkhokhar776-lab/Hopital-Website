import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarFooter.css";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-5 pb-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="d-flex align-items-center fw-bold fs-5 mb-3">
                <span className="navbar-brand-box">B</span>
                Bajwa Hospital
              </div>
              <p className="text-white-50">
                Excellence in healthcare, compassion in care, and trusted medical support for every family.
              </p>
              <div className="d-flex gap-2 mt-3">
                <a href="#" className="outline-btn text-white border-light bg-transparent">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="outline-btn text-white border-light bg-transparent">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="outline-btn text-white border-light bg-transparent">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            <div className="col-6 col-lg-2">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled d-grid gap-2">
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/doctors">Our Doctors</NavLink>
                </li>
                <li>
                  <NavLink to="/departments">Departments</NavLink>
                </li>
                <li>
                  <NavLink to="/appointment">Appointments</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-6 col-lg-3">
              <h6 className="fw-bold mb-3">Services</h6>
              <ul className="list-unstyled d-grid gap-2">
                <li><a href="#">Emergency Care</a></li>
                <li><a href="#">Lab Diagnostics</a></li>
                <li><a href="#">Radiology</a></li>
                <li><a href="#">Surgery Support</a></li>
                <li><a href="#">Consultation</a></li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h6 className="fw-bold mb-3">Contact</h6>
              <ul className="list-unstyled d-grid gap-3 text-white-50">
                <li>
                  <i className="bi bi-geo-alt me-2 text-white"></i>
                  Lahore, Punjab, Pakistan
                </li>
                <li>
                  <i className="bi bi-telephone me-2 text-white"></i>
                  +92 42 3000 7800
                </li>
                <li>
                  <i className="bi bi-envelope me-2 text-white"></i>
                  info@bayzahospital.com
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-light opacity-25 my-4" />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-white-50">
            <small>© 2026 Bajwa Hospital. All rights reserved.</small>
            <small>Designed in React + Bootstrap 5</small>
          </div>
        </div>
      </footer>

      <div className="floating-actions">
        <a
          href="https://wa.me/923001234567"
          className="floating-btn whatsapp-btn"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-whatsapp fs-5"></i>
        </a>
        <a href="tel:+924230007800" className="floating-btn phone-btn">
          <i className="bi bi-telephone-fill"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;