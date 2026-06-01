import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const stats = [
  { icon: "bi-hospital", number: "350+", label: "Hospital Beds" },
  { icon: "bi-people", number: "120+", label: "Specialized Doctors" },
  { icon: "bi-award", number: "25+", label: "Years of Service" },
  { icon: "bi-emoji-smile", number: "500,000+", label: "Happy Patients" },
];

const values = [
  {
    title: "Patient First",
    desc: "Every decision is guided by the well-being and comfort of our patients.",
  },
  {
    title: "Clinical Excellence",
    desc: "We uphold the highest medical standards through continuous education and research.",
  },
  {
    title: "Compassionate Care",
    desc: "We treat every patient with dignity, empathy, and respect.",
  },
  {
    title: "Innovation",
    desc: "We embrace cutting-edge technology to improve diagnosis and treatment.",
  },
  {
    title: "Integrity",
    desc: "Transparency and honesty guide all our interactions and decisions.",
  },
  {
    title: "Community",
    desc: "We are committed to improving the health of our local community.",
  },
];

const About = () => {
  return (
    <>
      <style>{`
        .about-hero-section {
          padding: 90px 0 60px;
          background: #ffffff;
        }

        .about-hero-content {
          max-width: 850px;
          margin: 0 auto 50px;
        }

        .about-mini-title {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #7a86a1;
          margin-bottom: 14px;
        }

        .about-main-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.15;
          font-weight: 800;
          color: #14213d;
          margin-bottom: 18px;
        }

        .about-main-text {
          max-width: 700px;
          font-size: 1rem;
          line-height: 1.8;
          color: #7b8794;
        }

        .about-stat-card {
          padding: 24px 16px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid #edf2f7;
          box-shadow: 0 10px 30px rgba(15, 35, 95, 0.06);
          height: 100%;
          transition: 0.3s ease;
        }

        .about-stat-card:hover {
          transform: translateY(-6px);
        }

        .about-stat-icon {
          font-size: 1.6rem;
          color: #7a8dbb;
          margin-bottom: 10px;
        }

        .about-stat-card h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #14213d;
        }

        .about-stat-card p {
          color: #7b8794;
          font-size: 0.95rem;
        }

        .about-mission-section {
          padding: 30px 0 70px;
        }

        .about-info-box h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #14213d;
          margin-bottom: 16px;
        }

        .about-info-box p {
          color: #6f7b8f;
          line-height: 1.9;
        }

        .about-values-section {
          padding: 10px 0 80px;
        }

        .about-section-heading h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #14213d;
          margin-bottom: 30px;
        }

        .about-value-card {
          background: #fff;
          border: 1px solid #edf2f7;
          border-radius: 18px;
          padding: 24px;
          height: 100%;
          box-shadow: 0 10px 28px rgba(15, 35, 95, 0.05);
          transition: 0.3s ease;
        }

        .about-value-card:hover {
          transform: translateY(-6px);
        }

        .about-value-card h4 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        .about-value-card p {
          color: #7b8794;
          font-size: 0.95rem;
        }

        .about-newsletter-section {
          padding: 0 0 70px;
        }

        .about-newsletter-box {
          background: linear-gradient(135deg, #0b1f55, #0e2f7a);
          border-radius: 22px;
          padding: 32px;
          color: #fff;
        }

        .about-subscribe-btn {
          background: #0d6efd;
          color: #fff;
          border-radius: 10px;
          border: none;
          height: 48px;
        }
      `}</style>

      <section className="about-hero-section text-center">
        <div className="container">
          <span className="about-mini-title">ABOUT US</span>
          <h1 className="about-main-title">
            Delivering Excellence in Healthcare
          </h1>
          <p className="about-main-text mx-auto">
            Bajwa Hospital is a trusted healthcare institution providing
            high-quality and compassionate care.
          </p>

          <div className="row g-4 mt-4">
            {stats.map((item, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="about-stat-card text-center">
                  <div className="about-stat-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h3>{item.number}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="about-info-box">
                <h2>Our Mission</h2>
                <p>Provide accessible and high-quality healthcare services.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-info-box">
                <h2>Our Vision</h2>
                <p>Become Pakistan’s most trusted healthcare institution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container">
          <div className="about-section-heading text-center">
            <h2>Our Core Values</h2>
          </div>

          <div className="row g-4">
            {values.map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="about-value-card">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-newsletter-section">
        <div className="container">
          <div className="about-newsletter-box">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h3>Stay Informed</h3>
                <p>Subscribe for updates.</p>
              </div>

              <div className="col-lg-6">
                <form className="row g-3">
                  <div className="col-md-8">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-md-4">
                    <button className="about-subscribe-btn w-100">
                      Subscribe
                    </button>
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

export default About;