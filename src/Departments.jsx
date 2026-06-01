import React from "react";

const departments = [
  {
    id: 1,
    title: "General Medicine",
    desc: "Comprehensive care for fever, infections, BP, diabetes and daily health concerns.",
    icon: "🩺",
  },
  {
    id: 2,
    title: "Pediatrics",
    desc: "Specialized child care, vaccinations, nutrition and growth monitoring.",
    icon: "👶",
  },
  {
    id: 3,
    title: "Surgery",
    desc: "Advanced surgical procedures with modern equipment and expert surgeons.",
    icon: "🏥",
  },
  {
    id: 4,
    title: "Gynecology",
    desc: "Complete women healthcare including maternity and reproductive care.",
    icon: "🤰",
  },
  {
    id: 5,
    title: "Cardiology",
    desc: "Heart specialist services including ECG, diagnosis and treatment.",
    icon: "❤️",
  },
  {
    id: 6,
    title: "Dermatology",
    desc: "Skin treatments, cosmetic care and advanced dermatology solutions.",
    icon: "✨",
  },
];

const Departments = () => {
  return (
    <>
      <style>{`
        .dept-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8fbff, #eef6ff);
          font-family: Arial, sans-serif;
        }

        .dept-container {
          max-width: 1200px;
          margin: auto;
        }

        .dept-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .dept-title {
          font-size: 40px;
          font-weight: 800;
          color: #0f172a;
        }

        .dept-text {
          max-width: 700px;
          margin: 10px auto 0;
          color: #64748b;
          font-size: 16px;
        }

        .dept-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .dept-card {
          background: #fff;
          padding: 30px 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          cursor: pointer;
        }

        .dept-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(13,110,253,0.15);
        }

        /* ICON */
        .dept-icon {
          font-size: 42px;
          margin-bottom: 15px;
          transition: all 0.35s ease;
          display: inline-block;
        }

        /* ACTIVE EFFECT (HOVER) */
        .dept-card:hover .dept-icon {
          transform: scale(1.2) rotate(5deg);
          color: #0d6efd;
        }

        .dept-card h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #0f172a;
        }

        .dept-card p {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
        }

        /* ARROW */
        .dept-arrow {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 20px;
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        /* ARROW ACTIVE */
        .dept-card:hover .dept-arrow {
          color: #0d6efd;
          transform: translateX(5px);
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .dept-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dept-grid {
            grid-template-columns: 1fr;
          }

          .dept-title {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="dept-section">
        <div className="dept-container">
          <div className="dept-header">
            <h2 className="dept-title">Our Departments</h2>
            <p className="dept-text">
              Bajwa Hospital offers multiple medical departments with expert doctors
              and modern healthcare solutions for every patient.
            </p>
          </div>

          <div className="dept-grid">
            {departments.map((dept) => (
              <div className="dept-card" key={dept.id}>
                <div className="dept-icon">{dept.icon}</div>
                <h3>{dept.title}</h3>
                <p>{dept.desc}</p>

                <div className="dept-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;