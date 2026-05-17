// src/Navbar.jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Brand / Logo */}
        <NavLink to="/" className="navbar-brand">
          Doctor<span className="fw-bold">Care</span>
        </NavLink>

        {/* Toggler button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={navLinkClass}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={navLinkClass}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={navLinkClass}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </li>

            {/* Appointment button styled as Bootstrap button */}
            <li className="nav-item ms-lg-2">
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  "btn btn-light btn-sm fw-semibold" +
                  (isActive ? " active" : "")
                }
              >
                Book Appointment
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
