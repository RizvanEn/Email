import express from "express";
import nodemailer from 'nodemailer'
const ClientRoute=express.Router()
import dotenv from 'dotenv'
dotenv.config()

// POST route to send emails

//seven wonders 
ClientRoute.post('/sevenwonders', async (req, res) => {
    const { from ,message,subject,name,number } = req.body;
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
        to: "contact@sevenwondersplayschool.com",
        from: 'info@sevenwondersplayschool.com',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Name : ${name}\n
        Number : ${number}\n
        Message : ${message}\n
        `
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  });

//SSINFRA
ClientRoute.post('/ssinfra', async (req, res) => {
  const { from ,message,subject,name,number } = req.body;
try{
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user:process.env.SSINFRA_USER,
        pass:process.env.SSINFRA_PASS
      },
    });

    const mailOptions = {
      to: "contact@ssiinfra.com",
      from: 'mail@ssiinfra.com',
      subject: `${subject}`,
      text: `You have an enquiry from your website\n
      Email : ${from} \n
      Name : ${name}\n
      Number : ${number}\n
      Message : ${message}\n
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
});
  //USPS
  ClientRoute.post('/usps', async (req, res) => {
    const { from ,message,subject,name,number } = req.body;
try{
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user:process.env.USPS_USER,
          pass: process.env.USPS_PASS,
        },
      });

      const mailOptions = {
        to: "contact@usps.org.in",
        from: 'info@usps.org.in',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Name : ${name}\n
        Number : ${number}\n
        Message : ${message}\n
        `
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  });

//MULNIVASI
  ClientRoute.post('/mulnivasi', async (req, res) => {
    const { from ,message,subject,name,number } = req.body;
try{
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user:process.env.MULNIVASI_USER,
          pass: process.env.MULNIVASI_PASS,
        },
      });
  
      const mailOptions = {
        to: "contact@mulnivasi.in",
        from: 'info@mulnivasi.in',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Name : ${name}\n
        Number : ${number}\n
        Message : ${message}\n
        `
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  });


  //conserve earth
  ClientRoute.post('/conserveearth', async (req, res) => {
    const { from ,message,subject,name,number } = req.body;
try{
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user:process.env.CONSERVE_USER,
          pass: process.env.CONSERVE_PASS,
        },
      });
  
      const mailOptions = {
        to: "contact@conserveearthfoundation.org",
        from: 'info@conserveearthfoundation.org',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Name : ${name}\n
        Number : ${number}\n
        Message : ${message}\n
        `
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  });

  //GD COACHING
   ClientRoute.post('/gdcoaching', async (req, res) => {
    const { from ,message,subject,name,number } = req.body;
try{
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user:process.env.GD_USER,
          pass: process.env.GD_PASS,
        },
      });
  
      const mailOptions = {
        to: "contact@gdcoachingacademy.com",
        from: 'info@gdcoachingacademy.com',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Name : ${name}\n
        Number : ${number}\n
        Message : ${message}\n
        `
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  });

  //Dentistry
  ClientRoute.post('/dentistry', async (req, res) => {
    const { from ,message,subject,name,number } = req.body;
try{
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user:process.env.Dentistry_USER,
          pass: process.env.Dentistry_PASS,
        },
      });
  
      const mailOptions = {
        to: "contact@dentistryfoundation.in",
        from: 'info@dentistryfoundation.in',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Name : ${name}\n
        Number : ${number}\n
        Message : ${message}\n
        `
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  });


  //JM AGRO TECH
  ClientRoute.post('/jmagrotech', async (req, res) => {
    const { from ,message,subject,name,number } = req.body;
try{
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user:process.env.JM_AGRO_USER,
          pass: process.env.JM_AGRO_PASS,
        },
      });
  
      const mailOptions = {
        to: "contact@jmagrotechpvtltd.com",
        from: 'info@jmagrotechpvtltd.com',
        subject: `${subject}`,
        text: `You have an enquiry from your website\n
        Email : ${from} \n
        Name : ${name}\n
        Number : ${number}\n
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