import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Lab & Diagnostic",
    icon: "🧪",
    short: "Advanced diagnostic and laboratory testing services.",
    description:
      "Our Lab & Diagnostic department provides accurate and timely medical testing using modern technology. We ensure reliable reports for better diagnosis and treatment planning.",
    specs: [
      "Blood Tests & CBC",
      "Urine Analysis",
      "Digital X-Ray",
      "Ultrasound Services",
      "ECG & Cardiac Screening",
      "Fast & Accurate Reports",
    ],
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Emergency Care",
    icon: "🚑",
    short: "24/7 emergency support with rapid response team.",
    description:
      "Our emergency unit is fully prepared to handle urgent medical situations with experienced doctors, immediate care facilities, and a rapid-response system.",
    specs: [
      "24/7 Emergency Support",
      "Trauma Stabilization",
      "Critical Care Staff",
      "Immediate First Aid",
      "Emergency Observation",
      "Quick Response Team",
    ],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Pharmacy Service",
    icon: "💊",
    short: "Trusted pharmacy support with quality medicines.",
    description:
      "Our on-site pharmacy ensures easy access to prescribed medicines with proper guidance, availability, and reliable pharmaceutical care for patients.",
    specs: [
      "24/7 Medicine Availability",
      "Qualified Pharmacist",
      "Prescription Guidance",
      "Branded Medicines",
      "Patient Support",
      "Fast Dispensing",
    ],
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Radiology",
    icon: "🩻",
    short: "Modern imaging solutions for accurate diagnosis.",
    description:
      "Our radiology department offers high-quality imaging services using advanced equipment to support diagnosis and help doctors make better treatment decisions.",
    specs: [
      "Digital X-Ray",
      "Ultrasound Imaging",
      "Diagnostic Scanning",
      "Trained Technicians",
      "High Accuracy",
      "Quick Image Reports",
    ],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
     id: 5,
  title: "Ambulance Service",
  icon: "🚐",
  short: "Reliable ambulance network for urgent transport.",
  description:
    "We provide dependable ambulance services for emergency transport with timely response, medical assistance, and safe patient handling.",
  specs: [
    "Emergency Pickup",
    "Safe Patient Transfer",
    "Medical Assistance On Route",
    "Fast Response Time",
    "24/7 Availability",
    "Trained Support Staff",
  ],
  image:
    "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80",

  },
  {
    id: 6,
    title: "Patient Care",
    icon: "❤️",
    short: "Compassionate care focused on comfort and recovery.",
    description:
      "Our patient care services focus on comfort, clinical support, attention, and personalized treatment to ensure every patient feels safe and supported.",
    specs: [
      "Personalized Care",
      "Comfort Focused Support",
      "Nursing Assistance",
      "Recovery Monitoring",
      "Family Guidance",
      "Friendly Environment",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .services-wrapper {
          width: 100%;
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8fbff 0%, #eef6ff 100%);
          font-family: Arial, sans-serif;
        }

        .services-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .services-subtitle {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 30px;
          background: rgba(13, 110, 253, 0.08);
          color: #0d6efd;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .services-title {
          font-size: 40px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
        }

        .services-text {
          max-width: 760px;
          margin: 0 auto;
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
        }

        .services-layout {
          display: grid;
          grid-template-columns: 390px 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .services-left {
          background: #ffffff;
          border-radius: 24px;
          padding: 18px;
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
          border: 1px solid #e2e8f0;
          height: fit-content;
        }

        .service-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 18px 18px;
          border-radius: 18px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          background: #f8fbff;
        }

        .service-item:last-child {
          margin-bottom: 0;
        }

        .service-item:hover {
          transform: translateX(4px);
          border-color: rgba(13, 110, 253, 0.18);
          background: #eef5ff;
        }

        .service-item.active {
          background: linear-gradient(135deg, #0d6efd, #3c8bff);
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(13, 110, 253, 0.22);
        }

        .service-item-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
        }

        .service-icon {
          width: 54px;
          height: 54px;
          min-width: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #ffffff;
          font-size: 26px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .service-item.active .service-icon {
          transform: scale(1.05);
        }

        .service-info h3 {
          margin: 0 0 5px;
          font-size: 20px;
          font-weight: 800;
          color: inherit;
        }

        .service-info p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          color: inherit;
          opacity: 0.9;
        }

        .service-arrow {
          font-size: 22px;
          font-weight: 700;
          transition: all 0.3s ease;
          color: inherit;
        }

        .service-item:hover .service-arrow {
          transform: translateX(4px);
        }

        .service-item.active .service-arrow {
          transform: translateX(6px);
        }

        .services-right {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
          border: 1px solid #e2e8f0;
        }

        .service-preview-image {
          width: 100%;
          height: 320px;
          overflow: hidden;
          background: #eaf2ff;
        }

        .service-preview-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .service-preview-content {
          padding: 28px;
        }

        .service-preview-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .service-preview-badge {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(13, 110, 253, 0.08);
          font-size: 30px;
        }

        .service-preview-title-wrap h2 {
          margin: 0 0 4px;
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
        }

        .service-preview-title-wrap span {
          font-size: 15px;
          color: #0d6efd;
          font-weight: 700;
        }

        .service-preview-description {
          font-size: 16px;
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 22px;
        }

        .service-specs-title {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .service-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .service-spec-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f8fbff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px 14px;
          font-size: 15px;
          color: #334155;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .service-spec-item:hover {
          transform: translateY(-2px);
          border-color: rgba(13, 110, 253, 0.25);
          background: #eef5ff;
        }

        .service-spec-check {
          width: 24px;
          height: 24px;
          min-width: 24px;
          border-radius: 50%;
          background: #0d6efd;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 1100px) {
          .services-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .services-wrapper {
            padding: 60px 16px;
          }

          .services-title {
            font-size: 30px;
          }

          .services-text {
            font-size: 15px;
          }

          .service-preview-image {
            height: 240px;
          }

          .service-preview-title-wrap h2 {
            font-size: 24px;
          }

          .service-specs-grid {
            grid-template-columns: 1fr;
          }

          .service-item {
            padding: 16px 14px;
          }

          .service-info h3 {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .service-item-left {
            align-items: flex-start;
          }

          .service-icon {
            width: 48px;
            height: 48px;
            min-width: 48px;
            font-size: 22px;
          }

          .service-preview-content {
            padding: 20px;
          }

          .service-preview-top {
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="services-wrapper">
        <div className="services-container">
          <div className="services-header">
            <span className="services-subtitle">OUR SERVICES</span>
            <h2 className="services-title">Advanced Medical Services</h2>
            <p className="services-text">
              Bajwa Hospital provides trusted healthcare services with modern
              equipment, experienced staff, and patient-focused treatment. Move
              over a service to view its full specification and details.
            </p>
          </div>

          <div className="services-layout">
            <div className="services-left">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className={`service-item ${
                    activeService.id === service.id ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                >
                  <div className="service-item-left">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-info">
                      <h3>{service.title}</h3>
                      <p>{service.short}</p>
                    </div>
                  </div>

                  <div className="service-arrow">→</div>
                </div>
              ))}
            </div>

            <div className="services-right">
              <div className="service-preview-image">
                <img src={activeService.image} alt={activeService.title} />
              </div>

              <div className="service-preview-content">
                <div className="service-preview-top">
                  <div className="service-preview-badge">
                    {activeService.icon}
                  </div>
                  <div className="service-preview-title-wrap">
                    <h2>{activeService.title}</h2>
                    <span>Service Specifications</span>
                  </div>
                </div>

                <p className="service-preview-description">
                  {activeService.description}
                </p>

                <div className="service-specs-title">What’s Included</div>

                <div className="service-specs-grid">
                  {activeService.specs.map((spec, index) => (
                    <div className="service-spec-item" key={index}>
                      <div className="service-spec-check">✓</div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;