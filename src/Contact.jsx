import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email, // optional
          subject: formData.subject,
          message: formData.message,
        }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch (_) {}

      if (!res.ok) throw new Error(data?.message || "Failed to submit form.");

      setStatusMsg(data?.message || "✅ Message sent successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatusMsg(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted mb-0">
          Have a question or need to book an appointment? Feel free to reach out.
        </p>
      </div>

      <div className="row g-4">
        {/* Left Card: Clinic Details */}
        <div className="col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Clinic Details</h5>

              <div className="mb-3">
                <div className="fw-semibold">Address</div>
                <div className="text-muted">Near XYZ Hospital, Main Road, Your City</div>
              </div>

              <div className="mb-3">
                <div className="fw-semibold">Phone / WhatsApp</div>
                <div className="text-muted">0300-1234567</div>
              </div>

              <div className="mb-3">
                <div className="fw-semibold">Email</div>
                <div className="text-muted">clinic@example.com</div>
              </div>

              <div>
                <div className="fw-semibold">Clinic Timings</div>
                <div className="text-muted">Mon – Fri: 4:00 pm – 9:00 pm</div>
                <div className="text-muted">Saturday: 5:00 pm – 9:00 pm</div>
                <div className="text-muted">Sunday: By appointment only</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form + Map */}
        <div className="col-lg-8">
          {/* Form Card */}
          <div className="card shadow-sm">
            <div className="card-body">
              {/* Header Row: Title left, Status right */}
              <div className="d-flex align-items-start justify-content-between gap-3">
                <div>
                  <h5 className="fw-bold mb-1">Send us a message</h5>
                  <p className="text-muted mb-3">
                    Fill the form below and we will respond as soon as possible.
                  </p>
                </div>

                {/* Status message top-right */}
                {statusMsg && (
                  <div
                    className="alert alert-info py-2 px-3 mb-0"
                    role="alert"
                    style={{
                      minWidth: "220px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {statusMsg}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="03XX-XXXXXXX"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email (optional)</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Appointment, Report, Inquiry"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 text-end">
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Map Placeholder Card */}
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Location Map (Optional)</h6>
              <p className="text-muted mb-3">
                Here you can embed Google Map later. For now, this is just a placeholder.
              </p>
              <div
                style={{
                  height: "220px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  background: "#f8f9fa",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
