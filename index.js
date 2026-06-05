require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// ===== MONGODB CONNECTION =====
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ===== SCHEMA =====
const contactSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  department: String,
  preferredDate: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.send("✅ Backend is running. Email is disabled. MongoDB form save is active.");
});

// ===== APPOINTMENT ROUTE =====
app.post("/appointment", async (req, res) => {
  const { fullName, phone, department, preferredDate, message } = req.body;

  try {
    if (!fullName || !phone || !department || !preferredDate || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing.",
      });
    }

    const newContact = new Contact({
      fullName,
      phone,
      department,
      preferredDate,
      message,
    });

    await newContact.save();

    console.log("✅ Data saved in MongoDB");
    console.log("📧 Email disabled permanently in this version. No Gmail SMTP used.");

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully.",
    });
  } catch (err) {
    console.error("❌ Server Error:", err);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
});

// ===== VIEW DATA =====
app.get("/check-emails", async (req, res) => {
  try {
    const data = await Contact.find().sort({ _id: -1 });

    let tableRows = data
      .map(
        (item) => `
        <tr>
          <td>${item.fullName || ""}</td>
          <td>${item.phone || ""}</td>
          <td>${item.department || ""}</td>
          <td>${item.preferredDate || ""}</td>
          <td>${item.message || ""}</td>
          <td>${item.createdAt ? new Date(item.createdAt).toLocaleString() : ""}</td>
          <td>
            <button onclick="deleteRecord('${item._id}')" style="
              background:#dc3545;
              color:white;
              border:none;
              padding:6px 10px;
              border-radius:4px;
              cursor:pointer;
            ">Delete</button>
          </td>
        </tr>`
      )
      .join("");

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Submitted Form Data</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            padding: 20px;
          }
          h1 {
            text-align: center;
            color: #222;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.08);
          }
          th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
          }
          th {
            background: #007bff;
            color: white;
          }
          tr:nth-child(even) {
            background: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <h1>Submitted Form Data</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Preferred Date</th>
              <th>Message</th>
              <th>Submitted At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows || "<tr><td colspan='7'>No data found.</td></tr>"}
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
    return res.status(500).send("<h2>Error fetching data</h2>");
  }
});

// ===== DELETE ROUTE =====
app.delete("/delete-email/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Record deleted successfully.",
    });
  } catch (err) {
    console.error("❌ Error deleting record:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to delete record.",
    });
  }
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("✅ FINAL VERSION ACTIVE: Gmail/Nodemailer removed completely.");
});
