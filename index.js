require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

const contactSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  department: String,
  preferredDate: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/appointment", async (req, res) => {
  const { fullName, phone, department, preferredDate, message } = req.body;

  try {
    if (!fullName || !phone || !department || !preferredDate || !message) {
      return res.status(400).json({
        success: false,
        message: "❌ Required fields missing.",
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

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "hellolearntechnology@gmail.com",
        pass: "kynxbjykmyvgzuhx",
      },
    });

    let mailOptions = {
      from: "hellolearntechnology@gmail.com",
      to: "hellolearntechnology@gmail.com",
      subject: `📩 New Contact Form Submission - ${fullName}`,
      text: `
Name: ${fullName}
Phone: ${phone}
Department: ${department}
Preferred Date: ${preferredDate}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("📨 Email sent successfully");

    return res.json({
      success: true,
      message: "✅ Email sent & form submitted successfully!",
    });
  } catch (err) {
    console.error("❌ Error:", err);
    return res.status(500).json({
      success: false,
      message: "❌ Error sending message.",
    });
  }
});

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
          <td>
            <button onclick="deleteRecord('${item._id}')">Delete</button>
          </td>
        </tr>`
      )
      .join("");

    return res.send(`
      <h1>📬 Submitted Form Data</h1>
      <table border="1" cellpadding="10">
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Preferred Date</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
        ${tableRows}
      </table>

      <script>
        async function deleteRecord(id) {
          if (confirm("Are you sure?")) {
            const res = await fetch('/delete-email/' + id, { method: 'DELETE' });
            if (res.ok) window.location.reload();
            else alert("Failed to delete record.");
          }
        }
      </script>
    `);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    return res.status(500).send("<h2>Error fetching data</h2>");
  }
});

app.delete("/delete-email/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Error deleting record:", err);
    return res.status(500).json({ error: "Failed to delete record" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
