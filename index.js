require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend"))); // serve frontend

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Error:", err.message));

// ===== SCHEMA =====
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// ===== ROUTE =====
// ✅ React is hitting: http://localhost:5000/contact
app.post("/appointment", async (req, res) => {
  // ✅ React sends: fullName, phone, email, subject, message
  const { fullName, phone, email, subject, message } = req.body;

  try {
    // ✅ Basic validation (optional but helpful)
    if (!fullName || !phone || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "❌ Required fields missing." });
    }

    // 🗂️ Save to MongoDB
    const newContact = new Contact({
      name: fullName, // ✅ schema uses "name"
      phone,
      email,
      subject,
      message,
    });

    await newContact.save();
    console.log("✅ Data saved in MongoDB");

    // 📧 Setup transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hellolearntechnology@gmail.com", // your gmail
        pass: "kynxbjykmyvgzuhx", // app password only
      },
    });

    // 📩 Email details
    let mailOptions = {
      from: "hellolearntechnology@gmail.com",
      to: "hellolearntechnology@gmail.com",
      subject: `📩 New Contact Form Submission - ${fullName}`,
      text: `
Name: ${fullName}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
    };

    // ✅ SEND EMAIL
    await transporter.sendMail(mailOptions);
    console.log("📨 Email sent successfully");

    return res.json({
      success: true,
      message: "✅ Email sent & form submitted successfully!",
    });
  } catch (err) {
    console.error("❌ Error:", err);
    return res
      .status(500)
      .json({ success: false, message: "❌ Error sending message." });
  }
});

// ===== VIEW + DELETE EMAIL DATA IN TABLE =====
app.get("/check-emails", async (req, res) => {
  try {
    const data = await Contact.find().sort({ _id: -1 });

    let tableRows = data
      .map(
        (item) => `
        <tr>
          <td>${item.name || ""}</td>
          <td>${item.phone || ""}</td>
          <td>${item.email || ""}</td>
          <td>${item.subject || ""}</td>
          <td>${item.message || ""}</td>
          <td>
            <button onclick="deleteRecord('${item._id}')" style="
              background: #dc3545; 
              color: white; 
              border: none; 
              padding: 6px 10px; 
              border-radius: 4px;
              cursor: pointer;
            ">Delete</button>
          </td>
        </tr>`
      )
      .join("");

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Submitted Email Data</title>
        <style>
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #f4f6f8;
            padding: 20px;
          }
          h1 {
            text-align: center;
            color: #333;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
          }
          th, td {
            border: 1px solid #ddd;
            padding: 10px 12px;
            text-align: left;
          }
          th {
            background: #007bff;
            color: white;
          }
          tr:nth-child(even) {
            background: #f9f9f9;
          }
          button:hover {
            opacity: 0.8;
          }
        </style>
      </head>
      <body>
        <h1>📬 Submitted Form Data</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>

        <script>
          async function deleteRecord(id) {
            if (confirm("Are you sure you want to delete this record?")) {
              const res = await fetch('/delete-email/' + id, { method: 'DELETE' });
              if (res.ok) {
                alert("Record deleted successfully!");
                window.location.reload();
              } else {
                alert("Failed to delete record.");
              }
            }
          }
        </script>
      </body>
      </html>
    `;

    return res.send(html);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    return res.status(500).send("<h2>Error fetching email data</h2>");
  }
});

// ===== DELETE ROUTE =====
app.delete("/delete-email/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Error deleting record:", err);
    return res.status(500).json({ error: "Failed to delete record" });
  }
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
