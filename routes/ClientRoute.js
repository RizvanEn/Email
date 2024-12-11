import express from "express";
import nodemailer from 'nodemailer'
const ClientRoute=express.Router()

// POST route to send emails
ClientRoute.post('/sevenwonders', async (req, res) => {
    const { from ,message,subject } = req.body;
try{
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user:process.env.SEVEN_USER,
          pass: process.env.SEVEN_PASS,
        },
      });
  
      const mailOptions = {
        to: "rizvanenego@gmail.com",
        from: 'info@sevenwondersplayschool.com',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Message : ${message}\n
        `
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  });

export default ClientRoute;