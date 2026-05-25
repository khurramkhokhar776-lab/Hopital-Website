import React, { useState } from "react";

const Contact = () => {

  // ===== STATE =====
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    department: "",
    preferredDate: "",
    message: "",
  });

  // ===== HANDLE CHANGE =====
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===== HANDLE SUBMIT =====
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/contact", {
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
        * {
          box-sizing: border-box;
        }

        .contact-section {
          width: 100%;
          padding: 90px 20px;
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
          font-family: Arial, sans-serif;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 55px;
        }

        .contact-subtitle {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 30px;
          background: rgba(13, 110, 253, 0.08);
          color: #0d6efd;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .contact-title {
          margin: 0 0 14px;
          font-size: 46px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
        }

        .contact-text {
          max-width: 720px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.8;
          color: #64748b;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 28px;
          align-items: start;
        }

        .contact-left {
          display: grid;
          gap: 18px;
        }

        .contact-info-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 24px 22px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(13, 110, 253, 0.12);
          border-color: rgba(13, 110, 253, 0.25);
        }

        .contact-info-top {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .contact-icon {
          width: 58px;
          height: 58px;
          min-width: 58px;
          border-radius: 16px;
          background: linear-gradient(135deg, #0d6efd, #4d96ff);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.25);
        }

        .contact-info-content h3 {
          margin: 0 0 8px;
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
        }

        .contact-info-content p,
        .contact-info-content a {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #64748b;
          text-decoration: none;
        }

        .contact-info-content a:hover {
          color: #0d6efd;
        }

        .contact-form-wrap {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .contact-form-title {
          margin: 0 0 8px;
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
        }

        .contact-form-text {
          margin: 0 0 24px;
          font-size: 15px;
          line-height: 1.7;
          color: #64748b;
        }

        .contact-form {
          display: grid;
          gap: 18px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-input-group {
          display: flex;
          flex-direction: column;
        }

        .contact-input-group label {
          font-size: 14px;
          font-weight: 700;
          color: #334155;
          margin-bottom: 8px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          border: 1px solid #dbe4ee;
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 15px;
          color: #0f172a;
          background: #f8fbff;
          outline: none;
          transition: all 0.3s ease;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #0d6efd;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.08);
        }

        .contact-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .contact-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: fit-content;
          padding: 14px 26px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(135deg, #0d6efd, #3d8bfd);
          color: #ffffff;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 12px 25px rgba(13, 110, 253, 0.22);
        }

        .contact-submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 35px rgba(13, 110, 253, 0.28);
        }

        .contact-note {
          font-size: 13px;
          color: #94a3b8;
          margin-top: 4px;
        }

        @media (max-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 70px 16px;
          }

          .contact-title {
            font-size: 34px;
          }

          .contact-form-wrap {
            padding: 22px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-title {
            font-size: 26px;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 28px;
          }

          .contact-text {
            font-size: 15px;
          }

          .contact-info-card {
            padding: 20px 18px;
          }

          .contact-icon {
            width: 52px;
            height: 52px;
            min-width: 52px;
            font-size: 22px;
          }

          .contact-info-content h3 {
            font-size: 20px;
          }

          .contact-form-wrap {
            padding: 18px;
          }

          .contact-submit-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-header">
            <span className="contact-subtitle">Contact Us</span>

            <h2 className="contact-title">
              Get In Touch With Bajwa Hospital
            </h2>

            <p className="contact-text">
              We are here to assist you with appointments, medical inquiries,
              and patient support.
            </p>
          </div>

          <div className="contact-layout">

            <div className="contact-left">

              <div className="contact-info-card">
                <div className="contact-info-top">
                  <div className="contact-icon">📍</div>

                  <div className="contact-info-content">
                    <h3>Hospital Address</h3>

                    <p>
                      Bajwa Hospital, Main Road, Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="contact-form-wrap">

              <h3 className="contact-form-title">
                Send Us a Message
              </h3>

              <p className="contact-form-text">
                Fill out the form below and our hospital team will contact you.
              </p>

              <form  onSubmit={handleSubmit}>

                <div className="contact-form-row">

                  <div className="contact-input-group">
                    <label>Full Name</label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="contact-input-group">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                </div>

                <div className="contact-form-row">

                  <div className="contact-input-group">
                    <label>Department</label>

                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="e.g. Cardiology"
                      required
                    />
                  </div>

                  <div className="contact-input-group">
                    <label>Preferred Date</label>

                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </div>

                </div>

                <div className="contact-input-group">

                  <label>Your Message</label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea"
                    placeholder="Write your message here..."
                    required
                  ></textarea>

                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message →
                </button>

                <div className="contact-note">
                  Your information will be kept secure and confidential.
                </div>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};
 
export default Contact;