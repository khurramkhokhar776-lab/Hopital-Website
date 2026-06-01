// src/Appointment.jsx
import React from "react";

const Appointment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your appointment request has been submitted.");
  };

  return (
    <div className="appointment-page py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="fw-bold">Book an Appointment</h1>
          <p className="text-muted mb-0">
            Fill in your details and we will confirm your appointment via call or WhatsApp.
          </p>
        </div>

        <div className="row g-4">
          {/* Appointment Form */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Patient Information</h5>

                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="patientName" className="form-label">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      id="patientName"
                      className="form-control"
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      className="form-control"
                      placeholder="e.g. 35"
                      min="0"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="03XX-XXXXXXX"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select id="gender" className="form-select" required>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="date" className="form-label">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="timeSlot" className="form-label">
                      Preferred Time Slot
                    </label>
                    <select id="timeSlot" className="form-select" required>
                      <option value="">Select time slot</option>
                      <option value="4-5">4:00 pm – 5:00 pm</option>
                      <option value="5-6">5:00 pm – 6:00 pm</option>
                      <option value="6-7">6:00 pm – 7:00 pm</option>
                      <option value="7-8">7:00 pm – 8:00 pm</option>
                      <option value="8-9">8:00 pm – 9:00 pm</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="visitType" className="form-label">
                      Visit Type
                    </label>
                    <select id="visitType" className="form-select" required>
                      <option value="">Select visit type</option>
                      <option value="first">First visit / New patient</option>
                      <option value="followup">Follow-up visit</option>
                      <option value="report">Report discussion</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="doctor" className="form-label">
                      Doctor (optional)
                    </label>
                    <select id="doctor" className="form-select">
                      <option value="">Any available doctor</option>
                      <option value="dr-ali">Dr. Ali</option>
                      <option value="dr-fatima">Dr. Fatima</option>
                      {/* Ap apne doctors ke naam yahan rakh sakte hain */}
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="reason" className="form-label">
                      Reason for visit / Symptoms
                    </label>
                    <textarea
                      id="reason"
                      className="form-control"
                      rows="4"
                      placeholder="Briefly describe your problem, e.g. fever, diabetes follow-up, blood pressure check..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary px-4">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Side Info Card */}
          <div className="col-lg-4">
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Important Notes</h5>
                <ul className="text-muted small mb-0">
                  <li className="mb-2">
                    This form is for <strong>appointment request</strong> only.
                  </li>
                  <li className="mb-2">
                    Our staff will contact you to confirm your time and date.
                  </li>
                  <li className="mb-2">
                    In case of emergency, please visit the nearest hospital immediately.
                  </li>
                  <li className="mb-2">
                    Please arrive 10–15 minutes earlier than your appointment time.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="fw-semibold mb-2">Need quick help?</h6>
                <p className="text-muted mb-2">
                  You can also book or change your appointment via call or WhatsApp.
                </p>
                <p className="fw-semibold mb-1">Phone / WhatsApp</p>
                <p className="mb-0">0300-1234567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
