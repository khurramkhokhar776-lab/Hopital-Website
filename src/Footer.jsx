// src/Footer.jsx
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const linkClass = "text-decoration-none text-light-50 small d-block mb-1";

  return (
    <footer className="bg-dark text-light mt-5 pt-4">
      <div className="container">
        <div className="row g-4">
          {/* Clinic Info */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">DoctorCare Clinic</h5>
            <p className="small text-light-50 mb-2">
              A family-focused clinic providing safe, ethical and
              evidence-based healthcare for children, adults and seniors.
            </p>
            <p className="small text-light-50 mb-1">
              Near XYZ Hospital, Main Road, Your City
            </p>
            <p className="small text-light-50 mb-0">
              Phone / WhatsApp: <span className="fw-semibold">0300-1234567</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <NavLink to="/appointment" className={linkClass}>
              Book Appointment
            </NavLink>
          </div>

          {/* Timings & Email */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Clinic Timings</h6>
            <p className="small text-light-50 mb-1">
              Mon – Fri: <span className="fw-semibold">4:00 pm – 9:00 pm</span>
            </p>
            <p className="small text-light-50 mb-1">
              Saturday: <span className="fw-semibold">5:00 pm – 9:00 pm</span>
            </p>
            <p className="small text-light-50 mb-3">
              Sunday: <span className="fw-semibold">By appointment only</span>
            </p>

            <h6 className="fw-semibold mb-1">Email</h6>
            <p className="small text-light-50 mb-0">clinic@example.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary mt-4 pt-3 pb-3 text-center">
          <small className="text-light-50">
            © {year} DoctorCare Clinic. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
