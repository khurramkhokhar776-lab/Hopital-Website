import React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Raza",
    specialty: "General Medicine",
    experience: "12+ Years Experience",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Dr. Sana Khalid",
    specialty: "Pediatrics",
    experience: "9+ Years Experience",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Dr. Usman Tariq",
    specialty: "Surgery",
    experience: "15+ Years Experience",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Dr. Hina Aslam",
    specialty: "Gynecology",
    experience: "11+ Years Experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Dr. Bilal Hassan",
    specialty: "Cardiology",
    experience: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Dr. Ayesha Noor",
    specialty: "Dermatology",
    experience: "8+ Years Experience",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
];

const Doctors = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .doctors-section {
          width: 100%;
          padding: 80px 20px;
          background: linear-gradient(135deg, #f4f9ff 0%, #ffffff 50%, #eef7ff 100%);
          font-family: Arial, sans-serif;
        }

        .doctors-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .doctors-header {
          text-align: center;
          margin-bottom: 55px;
        }

        .doctors-subtitle {
          display: inline-block;
          color: #0d6efd;
          background: rgba(13, 110, 253, 0.08);
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 18px;
        }

        .doctors-title {
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 14px;
          line-height: 1.2;
        }

        .doctors-text {
          max-width: 760px;
          margin: 0 auto;
          font-size: 16px;
          color: #64748b;
          line-height: 1.8;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .doctor-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
          transition: all 0.35s ease;
          border: 1px solid rgba(226, 232, 240, 0.9);
          position: relative;
        }

        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(13, 110, 253, 0.15);
        }

        .doctor-image-wrap {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          background: #eaf3ff;
        }

        .doctor-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .doctor-card:hover .doctor-image {
          transform: scale(1.08);
        }

        .doctor-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          background: rgba(13, 110, 253, 0.92);
          color: #fff;
          padding: 8px 14px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.25);
        }

        .doctor-content {
          padding: 24px 22px 26px;
        }

        .doctor-name {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px;
        }

        .doctor-specialty {
          font-size: 16px;
          font-weight: 700;
          color: #0d6efd;
          margin-bottom: 10px;
        }

        .doctor-experience {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .doctor-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .doctor-btn {
          display: inline-block;
          padding: 11px 18px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .doctor-btn-primary {
          background: #0d6efd;
          color: #fff;
          border: 2px solid #0d6efd;
        }

        .doctor-btn-primary:hover {
          background: #0b5ed7;
          border-color: #0b5ed7;
        }

        .doctor-btn-outline {
          background: transparent;
          color: #0d6efd;
          border: 2px solid #0d6efd;
        }

        .doctor-btn-outline:hover {
          background: #0d6efd;
          color: #fff;
        }

        @media (max-width: 992px) {
          .doctors-title {
            font-size: 34px;
          }

          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .doctor-image-wrap {
            height: 290px;
          }
        }

        @media (max-width: 768px) {
          .doctors-section {
            padding: 60px 16px;
          }

          .doctors-title {
            font-size: 28px;
          }

          .doctors-text {
            font-size: 15px;
          }

          .doctors-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .doctor-image-wrap {
            height: 280px;
          }

          .doctor-name {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .doctors-title {
            font-size: 24px;
          }

          .doctors-subtitle {
            font-size: 12px;
            padding: 7px 14px;
          }

          .doctor-content {
            padding: 20px 18px 22px;
          }

          .doctor-actions {
            flex-direction: column;
          }

          .doctor-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section className="doctors-section">
        <div className="doctors-container">
          <div className="doctors-header">
            <span className="doctors-subtitle">OUR EXPERT DOCTORS</span>
            <h2 className="doctors-title">Meet Our Qualified Specialists</h2>
            <p className="doctors-text">
              Bajwa Hospital brings together experienced, compassionate, and highly
              skilled doctors dedicated to providing excellent care for every patient.
              Our team focuses on trusted treatment, advanced consultation, and
              personalized healthcare services.
            </p>
          </div>

          <div className="doctors-grid">
            {doctors.map((doctor) => (
              <div className="doctor-card" key={doctor.id}>
                <div className="doctor-image-wrap">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image"
                  />
                  <span className="doctor-badge">{doctor.specialty}</span>
                </div>

                <div className="doctor-content">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <div className="doctor-specialty">{doctor.specialty}</div>
                  <div className="doctor-experience">{doctor.experience}</div>

                  <div className="doctor-actions">
                    <a href="#appointment" className="doctor-btn doctor-btn-primary">
                      Book Appointment
                    </a>
                    <a href="#details" className="doctor-btn doctor-btn-outline">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;