
import express  from "express";
const router = Router();
import cors from "cors";
import { createTransport } from "nodemailer";

// server used to send send emails
const app = express();
app.use(cors());
app.use(json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = createTransport({
  service: 'gmail',
  auth: {
    user: "rizmiamansoor871@gmail.com",
    pass: "ohsp lvbf pyzm uodb"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: "rizmiamansoor871@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ code: 500, status: "Failed to send message" });
    }
    res.json({ code: 200, status: "Message Sent" });
  });
});
