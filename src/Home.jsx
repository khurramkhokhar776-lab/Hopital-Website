// src/Home.jsx
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <header className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="text-uppercase text-primary fw-semibold small mb-2">
                Caring for your health
              </p>
              <h1 className="display-5 fw-bold mb-3">
                Friendly Family Clinic for Your Everyday Health
              </h1>
              <p className="lead text-muted mb-4">
                We provide compassionate, evidence-based care for children,
                adults, and seniors — from routine check-ups to chronic disease
                management.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <NavLink to="/appointment" className="btn btn-primary btn-lg">
                  Book Appointment
                </NavLink>
                <NavLink
                  to="/contact"
                  className="btn btn-outline-primary btn-lg"
                >
                  Contact Clinic
                </NavLink>
              </div>

              <div className="d-flex flex-wrap gap-4 text-muted">
                <div>
                  <div className="h4 mb-0 fw-bold text-primary">10+</div>
                  <small>Years of experience</small>
                </div>
                <div>
                  <div className="h4 mb-0 fw-bold text-primary">5k+</div>
                  <small>Patients treated</small>
                </div>
                <div>
                  <div className="h4 mb-0 fw-bold text-primary">24/7</div>
                  <small>Appointment support</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card shadow border-0">
                <img
                  src="https://via.placeholder.com/800x500?text=Doctor+Clinic"
                  alt="Doctor with patient in clinic"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Our Key Services</h2>
            <p className="text-muted mb-0">
              Complete care for you and your family under one roof.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">General Check-ups</h5>
                  <p className="card-text text-muted">
                    Routine physical exams, blood pressure, diabetes screening,
                    and complete health assessment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Children & Family Care</h5>
                  <p className="card-text text-muted">
                    Growth monitoring, vaccinations, and common illness
                    treatment for babies and children.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Chronic Disease Management</h5>
                  <p className="card-text text-muted">
                    Long-term care for diabetes, hypertension, asthma, and other
                    chronic conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + TIMINGS SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-3">About Our Clinic</h2>
              <p className="text-muted">
                We are a patient-centered clinic focused on building long-term
                relationships with families. Our goal is to listen carefully,
                explain clearly, and create a safe environment for every
                patient.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  • Same-day appointments for urgent issues (subject to
                  availability)
                </li>
                <li className="mb-2">• Pharmacy and lab support nearby</li>
                <li className="mb-2">
                  • Comfortable waiting area with separate space for families
                </li>
              </ul>
            </div>

            <div className="col-lg-5">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Clinic Timings</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span>Mon – Fri</span>
                      <span className="fw-semibold">4:00 pm – 9:00 pm</span>
                    </li>
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span>Saturday</span>
                      <span className="fw-semibold">5:00 pm – 9:00 pm</span>
                    </li>
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span>Sunday</span>
                      <span className="fw-semibold text-muted">
                        By appointment only
                      </span>
                    </li>
                  </ul>

                  <h6 className="mb-1">Location</h6>
                  <p className="text-muted mb-2">
                    Near XYZ Hospital, Main Road, Your City
                  </p>

                  <h6 className="mb-1">Call for Appointment</h6>
                  <p className="fw-semibold mb-0">0300-1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="bg-primary text-white p-4 p-md-5 rounded-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h3 className="fw-bold mb-2">Ready to visit the clinic?</h3>
              <p className="mb-0">
                Book your appointment in a few clicks. We&apos;ll be happy to
                care for you and your family.
              </p>
            </div>
            <NavLink
              to="/appointment"
              className="btn btn-light btn-lg fw-semibold mt-2 mt-md-0"
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
