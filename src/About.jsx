// src/About.jsx

const About = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        {/* Top section */}
        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <h1 className="fw-bold mb-3">About Our Clinic</h1>
            <p className="lead text-muted">
              We are a family-focused medical clinic dedicated to providing
              safe, ethical and evidence-based care. Our aim is to listen to
              every patient carefully, explain clearly, and build a long-term
              relationship based on trust.
            </p>
            <p className="text-muted">
              From children to seniors, we manage routine check-ups, common
              illnesses and chronic diseases such as diabetes, hypertension and
              asthma. We believe in early diagnosis, preventive care and
              lifestyle counselling along with medicines.
            </p>

            <h4 className="fw-semibold mt-4 mb-2">Our Mission</h4>
            <p className="text-muted">
              To provide accessible, affordable and compassionate healthcare for
              families, with a special focus on patient education and
              prevention. We want every patient to feel heard, respected and
              cared for.
            </p>

            <h4 className="fw-semibold mt-4 mb-2">Our Approach</h4>
            <ul className="text-muted">
              <li>Detailed history and physical examination</li>
              <li>Clear explanation of diagnosis and treatment plan</li>
              <li>Focus on long-term follow-up and prevention</li>
              <li>Respectful and non-judgmental environment</li>
            </ul>
          </div>

          {/* Doctor profile card */}
          <div className="col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Doctor Profile</h5>

                <div className="d-flex align-items-center mb-3">
                  <div
                    className="rounded-circle bg-primary me-3 d-flex align-items-center justify-content-center"
                    style={{ width: 60, height: 60, color: "white", fontSize: 26 }}
                  >
                    Dr
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Dr. Your Name Here</h6>
                    <small className="text-muted">
                      MBBS, FCPS (Family Medicine)
                    </small>
                    <br />
                    <small className="text-muted">
                      Consultant Family Physician
                    </small>
                  </div>
                </div>

                <p className="text-muted">
                  Dr. Your Name has over <strong>10+ years</strong> of
                  experience in family medicine and general practice. She/He has
                  worked with both hospital and clinic setups and is passionate
                  about holistic patient care.
                </p>

                <h6 className="fw-semibold mt-3 mb-2">Special Interest Areas</h6>
                <ul className="text-muted small mb-3">
                  <li>Diabetes and blood pressure management</li>
                  <li>Women&apos;s health and hormonal issues</li>
                  <li>Child health and vaccination counselling</li>
                  <li>Preventive health check-ups</li>
                </ul>

                <h6 className="fw-semibold mb-1">Languages</h6>
                <p className="text-muted mb-2">
                  English, Urdu, (plus any other local language)
                </p>

                <h6 className="fw-semibold mb-1">Registration</h6>
                <p className="text-muted mb-0">
                  PMDC / PMC Registration No: XXXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-5">
          <h3 className="fw-bold mb-3 text-center">Our Core Values</h3>
          <p className="text-muted text-center mb-4">
            These values guide every decision we make and every patient we see.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Compassion</h5>
                  <p className="card-text text-muted">
                    We treat each patient with kindness, patience and empathy,
                    understanding that illness can be stressful for both
                    patients and families.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Trust & Ethics</h5>
                  <p className="card-text text-muted">
                    We believe in honest advice, transparent communication and
                    ethical medical practice — no unnecessary tests or
                    procedures.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Quality Care</h5>
                  <p className="card-text text-muted">
                    We keep ourselves updated with current medical guidelines
                    and focus on delivering safe, high-quality and evidence-based
                    care to every patient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default About;
