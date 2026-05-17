// src/Services.jsx
import "./Services.css";

const servicesData = [
  {
    title: "General OPD & Check-ups",
    icon: "🩺",
    description:
      "Routine consultation for fever, flu, infections, weakness, stomach issues and other common illnesses. We focus on careful examination and clear guidance.",
    points: [
      "Detailed history & examination",
      "Blood pressure & vitals check",
      "Basic counselling and prescriptions",
    ],
  },
  {
    title: "Children & Family Care",
    icon: "👨‍👩‍👧",
    description:
      "Care for babies, children and teenagers — from minor illnesses to growth and development concerns.",
    points: [
      "Fever, cough, flu, allergies",
      "Growth monitoring and diet guidance",
      "Vaccination counselling and schedules",
    ],
  },
  {
    title: "Chronic Disease Management",
    icon: "💊",
    description:
      "Long-term follow-up for patients with diabetes, hypertension, thyroid disorders, asthma and other chronic conditions.",
    points: [
      "Regular follow-up visits",
      "Medicines & lifestyle adjustment",
      "Monitoring labs and reports",
    ],
  },
  {
    title: "Women’s Health",
    icon: "🌸",
    description:
      "Consultation for common women’s health issues including hormonal problems, PCOS symptoms, anemia and fatigue.",
    points: [
      "Cycle-related concerns",
      "Hormonal and thyroid screening",
      "Diet and lifestyle counselling",
    ],
  },
  {
    title: "Preventive Health Check-ups",
    icon: "🧬",
    description:
      "Early detection packages for adults — especially for those with family history of diabetes, heart disease or high cholesterol.",
    points: [
      "Blood sugar, cholesterol, basic labs",
      "Blood pressure & weight / BMI review",
      "Personalised health advice",
    ],
  },
  {
    title: "Reports & Second Opinion",
    icon: "📄",
    description:
      "Explanation of lab tests, reports and previous prescriptions. Helping you understand your health better.",
    points: [
      "Review of lab / imaging reports",
      "Medication review and adjustments",
      "Guidance for next steps and referrals",
    ],
  },
];

const Services = () => {
  return (
    <div className="services-page py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5 services-header animate-fade">
          <span className="services-badge text-uppercase">
            Our Services
          </span>
          <h1 className="fw-bold mt-2">
            Complete Care For You & Your Family
          </h1>
          <p className="text-muted mb-0">
            From routine check-ups to chronic disease management — everything under one roof.
          </p>
        </div>

        {/* Service cards */}
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-md-4" key={service.title}>
              <div
                className={`card h-100 shadow-sm service-card animate-up delay-${
                  index + 1
                }`}
              >
                <div className="card-body">
                  <div className="service-icon-wrapper mb-3">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <h5 className="card-title service-card__title">
                    {service.title}
                  </h5>
                  <div className="service-card__underline mb-3" />
                  <p className="card-text text-muted">
                    {service.description}
                  </p>
                  <ul className="small text-muted mb-0">
                    {service.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra info / CTA */}
        <div className="row mt-5 align-items-stretch">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card shadow-sm animate-up delay-7">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">
                  How to book a service?
                </h5>
                <p className="text-muted mb-2">
                  You can book any of the above services through a simple phone
                  call, WhatsApp message, or by using our online appointment form.
                </p>
                <ul className="text-muted mb-0">
                  <li>Choose your preferred date and time</li>
                  <li>Tell us briefly about your problem</li>
                  <li>Our staff will confirm your slot and guide you</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm border-0 services-cta-card animate-up delay-8">
              <div className="card-body text-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold mb-2">Need an appointment?</h5>
                  <p className="mb-3">
                    Click below to request an appointment for any service. We&apos;ll
                    contact you to confirm the time.
                  </p>
                </div>
                <a href="/appointment" className="btn btn-light fw-semibold">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Services;
