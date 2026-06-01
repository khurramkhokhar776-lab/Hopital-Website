import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const specialties = [
  {
    icon: "bi-heart-pulse",
    title: "General Medicine",
    desc: "Complete care for fever, infection, blood pressure, diabetes, and day-to-day medical concerns.",
  },
  {
    icon: "bi-emoji-smile",
    title: "Pediatrics",
    desc: "Child-friendly consultations, vaccinations, nutritional guidance, and complete pediatric support.",
  },
  {
    icon: "bi-gender-female",
    title: "Gynecology",
    desc: "Dedicated women’s health services including routine checkups and specialist consultation.",
  },
  {
    icon: "bi-heart",
    title: "Cardiology",
    desc: "Heart health screening, consultation, follow-up care, and preventive evaluation services.",
  },
  {
    icon: "bi-person-walking",
    title: "Orthopedics",
    desc: "Bone, joint, back, neck, and mobility-focused treatment with expert assessment.",
  },
  {
    icon: "bi-bandaid",
    title: "Surgery",
    desc: "Minor and major surgical consultation with safe procedural planning and aftercare.",
  },
  {
    icon: "bi-ear",
    title: "ENT",
    desc: "Specialized treatment for ear, nose, throat, sinus, allergy, and voice-related issues.",
  },
  {
    icon: "bi-stars",
    title: "Dermatology",
    desc: "Skin, hair, pigmentation, acne, allergy, and cosmetic care consultations.",
  },
];

const packagesData = [
  {
    badge: "Popular",
    title: "Essential Health Checkup",
    price: "PKR 5,500",
    items: [
      "CBC",
      "Blood Sugar",
      "Lipid Profile",
      "Liver Function Test",
      "Urine R/E",
      "Doctor Review",
    ],
  },
  {
    badge: "Best Value",
    title: "Executive Health Package",
    price: "PKR 15,000",
    items: [
      "CBC",
      "Lipid Profile",
      "Kidney Function Test",
      "Liver Function Test",
      "HbA1c",
      "ECG",
      "Chest X-Ray",
      "Doctor Consultation",
    ],
    featured: true,
  },
  {
    badge: "Advanced",
    title: "Cardiac Wellness Package",
    price: "PKR 12,000",
    items: [
      "ECG",
      "Echo Screening",
      "Lipid Profile",
      "Blood Sugar",
      "Cardiac Review",
      "BP Assessment",
    ],
  },
  {
    badge: "Women Care",
    title: "Women Health Package",
    price: "PKR 10,000",
    items: [
      "CBC",
      "Urine R/E",
      "Thyroid Profile",
      "Blood Sugar",
      "Vitamin D",
      "Gyne Review",
    ],
  },
];

const doctors = [
  {
    name: "Dr. Ayesha Khan",
    specialty: "Consultant Pediatrician",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dr. Ali Raza",
    specialty: "General Physician",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dr. Sana Ahmed",
    specialty: "Gynecology Specialist",
    image:
      "https://images.unsplash.com/photo-1594824388853-2f89c5c4a7c9?auto=format&fit=crop&w=700&q=80",
  },
];

const Home = () => {
  const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  department: "",
  preferredDate: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://hopital-website.onrender.com/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("✅ Appointment Submitted Successfully!");

      setFormData({
        fullName: "",
        phone: "",
        department: "",
        preferredDate: "",
        message: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("❌ Error submitting form");
  }
};

  return (
    <>
    
      <style>{`
        :root {
          --primary: #0d6efd;
          --dark: #081b45;
          --mid: #153e8a;
          --light-bg: #f7faff;
          --muted: #6c757d;
        }

        body {
          font-family: Inter, Arial, Helvetica, sans-serif;
          background: #ffffff;
          color: #14213d;
        }

        .primary-btn {
          background: linear-gradient(135deg, #0d6efd, #0847d9);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          padding: 0.8rem 1.4rem;
          box-shadow: 0 10px 24px rgba(13, 110, 253, 0.18);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s ease;
        }

        .primary-btn:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(13, 110, 253, 0.25);
        }

        .outline-btn {
          border: 1px solid #d0daf0;
          color: #0b2f74;
          background: #fff;
          border-radius: 10px;
          padding: 0.8rem 1.2rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s ease;
        }

        .outline-btn:hover {
          color: #0b2f74;
          border-color: #0d6efd;
          transform: translateY(-2px);
        }

        .hero-section {
          background: linear-gradient(135deg, #0d6efd 0%, #38b6ff 100%);
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before,
        .hero-section::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
        }

        .hero-section::before {
          width: 320px;
          height: 320px;
          top: -80px;
          left: -80px;
        }

        .hero-section::after {
          width: 260px;
          height: 260px;
          bottom: -80px;
          right: -40px;
        }

        .section-label {
          display: inline-block;
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 1rem;
        }

        .hero-title {
          color: #fff;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          line-height: 1.05;
          font-weight: 800;
        }

        .hero-text {
          color: rgba(255, 255, 255, 0.88);
          font-size: 1rem;
          max-width: 560px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(7px);
          border-radius: 16px;
          color: #fff;
          padding: 1rem 1.1rem;
          text-align: center;
        }

        .quick-form {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 25px 60px rgba(7, 35, 88, 0.22);
          padding: 1.6rem;
        }

        .quick-form h5 {
          color: #0b2f74;
          font-weight: 700;
        }

        .form-control,
        .form-select {
          min-height: 48px;
          border-radius: 12px;
          border-color: #d8e3f5;
          box-shadow: none !important;
        }

        .form-control:focus,
        .form-select:focus {
          border-color: #0d6efd;
        }

        .section-space {
          padding: 90px 0;
        }

        .section-heading {
          font-size: clamp(1.8rem, 3vw, 2.7rem);
          font-weight: 800;
          color: #12284c;
        }

        .section-subtext {
          max-width: 720px;
          color: #6b7280;
          margin: 0 auto;
        }

        .specialty-card,
        .doctor-card,
        .info-card,
        .package-card {
          background: #fff;
          border: 1px solid #e9eff9;
          border-radius: 20px;
          height: 100%;
          box-shadow: 0 12px 32px rgba(11, 47, 116, 0.06);
          transition: 0.28s ease;
        }

        .specialty-card:hover,
        .doctor-card:hover,
        .info-card:hover,
        .package-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 36px rgba(11, 47, 116, 0.12);
        }

        .specialty-icon,
        .info-icon {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: #eef5ff;
          color: #0d6efd;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.45rem;
          margin-bottom: 1rem;
        }

        .package-card.featured {
          border: 2px solid #0d6efd;
          transform: translateY(-8px);
        }

        .package-badge {
          background: #eff5ff;
          color: #0d6efd;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .package-price {
          color: #0d6efd;
          font-size: 1.9rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .map-box {
          border-radius: 22px;
          overflow: hidden;
          min-height: 400px;
          border: 1px solid #e6eef9;
          box-shadow: 0 18px 36px rgba(11, 47, 116, 0.08);
        }

        .map-box iframe {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border: 0;
        }

        .cta-strip {
          background: linear-gradient(135deg, #071a4d, #0e2f7a);
          border-radius: 24px;
          color: #fff;
          padding: 2rem;
          box-shadow: 0 22px 44px rgba(8, 27, 69, 0.22);
        }

        .doctor-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }

        @media (max-width: 991.98px) {
          .hero-section {
            padding: 70px 0;
            min-height: auto;
          }

          .package-card.featured {
            transform: none;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-label">TRUSTED HEALTHCARE SINCE 1992</span>
              <h1 className="hero-title mb-4">Your Health Is Our Priority</h1>
              <p className="hero-text mb-4">
                An advanced hospital experience with patient-first care, expert doctors,
                quick appointments, and modern diagnostics for every family.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <NavLink to="/appointment" className="primary-btn">Book Now</NavLink>
                <NavLink to="/departments" className="outline-btn">View Departments</NavLink>
              </div>

              <div className="row g-3">
                <div className="col-6 col-md-4">
                  <div className="stat-card">
                    <h4 className="fw-bold mb-1">350+</h4>
                    <small>Doctors</small>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="stat-card">
                    <h4 className="fw-bold mb-1">120+</h4>
                    <small>Departments</small>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="stat-card">
                    <h4 className="fw-bold mb-1">500,000+</h4>
                    <small>Patients</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 ms-lg-auto">
              <div className="quick-form">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Quick Appointment</h5>
                  <span className="badge text-bg-primary rounded-pill">Fast Booking</span>
                </div>

                <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Full Name</label>

    <input
      type="text"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className="form-control"
      placeholder="Enter your full name"
      required
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Phone Number</label>

    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="form-control"
      placeholder="03xx-xxxxxxx"
      required
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Select Department</label>

    <select
      name="department"
      value={formData.department}
      onChange={handleChange}
      className="form-select"
      required
    >
      <option value="">Choose Department</option>
      <option value="General Medicine">General Medicine</option>
      <option value="Pediatrics">Pediatrics</option>
      <option value="Gynecology">Gynecology</option>
      <option value="Cardiology">Cardiology</option>
    </select>
  </div>

  <div className="mb-3">
    <label className="form-label">Preferred Date</label>

    <input
      type="date"
      name="preferredDate"
      value={formData.preferredDate}
      onChange={handleChange}
      className="form-control"
      required
    />
  </div>

  <div className="mb-4">
    <label className="form-label">Message</label>

    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="form-control"
      rows="4"
      placeholder="Write your concern"
      required
    ></textarea>
  </div>

  <button type="submit" className="primary-btn w-100">
    Book Appointment
  </button>
</form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container text-center">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <span className="badge rounded-pill text-bg-light border px-3 py-2 mb-3">OUR SPECIALTIES</span>
              <h2 className="section-heading mb-3">Comprehensive Medical Specialties</h2>
              <p className="section-subtext">
                From primary care to advanced specialist support, our departments are designed to provide complete medical solutions.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {specialties.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="specialty-card p-4 text-start">
                  <div className="specialty-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" style={{ background: "var(--light-bg)" }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge rounded-pill text-bg-light border px-3 py-2 mb-3">HEALTH PACKAGES</span>
              <h2 className="section-heading mb-3">Preventive Health Checkups</h2>
              <p className="section-subtext">
                Choose from carefully designed packages to keep yourself and your family healthy with timely screening.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {packagesData.map((pkg, index) => (
              <div className="col-md-6 col-xl-3" key={index}>
                <div className={`package-card p-4 ${pkg.featured ? "featured" : ""}`}>
                  <span className="package-badge">{pkg.badge}</span>
                  <h5 className="fw-bold mb-2">{pkg.title}</h5>
                  <div className="package-price">{pkg.price}</div>
                  <ul className="list-unstyled text-muted mb-4">
                    {pkg.items.map((point, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start gap-2">
                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/appointment" className="primary-btn w-100">Book Package</NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-light border px-3 py-2 mb-3">WHY CHOOSE US</span>
              <h2 className="section-heading mb-3">Trusted by Over 500,000+ Patients</h2>
              <p className="text-muted mb-4">
                We combine qualified doctors, patient-centered systems, advanced facilities, and compassionate care to make every visit smooth and comfortable.
              </p>

              <ul className="list-unstyled mb-0">
                <li className="mb-3 d-flex gap-3"><i className="bi bi-check2-circle text-primary fs-5"></i><span>Highly experienced medical and consultant team</span></li>
                <li className="mb-3 d-flex gap-3"><i className="bi bi-check2-circle text-primary fs-5"></i><span>Modern hospital environment with advanced technology</span></li>
                <li className="mb-3 d-flex gap-3"><i className="bi bi-check2-circle text-primary fs-5"></i><span>24/7 emergency support and patient guidance</span></li>
                <li className="mb-3 d-flex gap-3"><i className="bi bi-check2-circle text-primary fs-5"></i><span>Affordable packages and easy appointment system</span></li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  ["bi-shield-check", "Quality Care"],
                  ["bi-person-check", "Expert Team"],
                  ["bi-calendar2-check", "24/7 Available"],
                  ["bi-emoji-heart-eyes", "Friendly Care"],
                ].map(([icon, title], index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="info-card p-4 text-center">
                      <div className="info-icon mx-auto"><i className={`bi ${icon}`}></i></div>
                      <h5 className="fw-bold mb-0">{title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" style={{ background: "var(--light-bg)" }}>
        <div className="container text-center">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <span className="badge rounded-pill text-bg-light border px-3 py-2 mb-3">OUR DOCTORS</span>
              <h2 className="section-heading mb-3">Meet Our Expert Doctors</h2>
              <p className="section-subtext">
                A dedicated team of specialists focused on accurate diagnosis, compassionate treatment, and long-term care.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {doctors.map((doctor, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="doctor-card overflow-hidden text-start">
                  <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                  <div className="p-4">
                    <h5 className="fw-bold mb-1">{doctor.name}</h5>
                    <p className="text-muted mb-3">{doctor.specialty}</p>
                    <NavLink to="/doctors" className="outline-btn w-100">View Profile</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <span className="badge rounded-pill text-bg-light border px-3 py-2 mb-3">VISIT US</span>
              <h2 className="section-heading mb-3">Find Us in Lahore</h2>
              <p className="text-muted mb-4">
                Visit our modern facility for consultations, diagnostics, emergency treatment, and specialist support.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <NavLink to="/contact" className="primary-btn">Contact Us</NavLink>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="outline-btn">Directions</a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="map-box">
                <iframe
                  title="Lahore Map"
                  src="https://www.google.com/maps?q=Lahore%20Punjab%20Pakistan&z=12&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0 bg-white">
        <div className="container">
          <div className="cta-strip">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <h3 className="fw-bold mb-2">Stay Informed</h3>
                <p className="mb-0 text-white-50">Subscribe for health tips and hospital updates.</p>
              </div>
              <div className="col-lg-6">
                <form className="row g-3">
                  <div className="col-md-8">
                    <input type="email" className="form-control bg-white" placeholder="Your email address" />
                  </div>
                  <div className="col-md-4">
                    <button type="submit" className="primary-btn w-100">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
