// Import required modules

import express from 'express'
import bodyParser  from 'body-parser';
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import ClientRoute from './routes/ClientRoute.js';
import cors from "cors";
app.use(express.json());

const corsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST','PUT','DELETE','PATCH'], // Allow only these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization','user-role'], // Allow only these headers
  credentials: true, // Allow cookies to be included in the requests
};

app.use(cors(corsOptions));
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/mail',ClientRoute)

//Welcome template
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})



// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Nodemailer Email Service!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/* 
To run this server:
1. Install dependencies:
   npm install express body-parser nodemailer dotenv

2. Create a `.env` file in the root directory with your email and password:
   EMAIL=your-email@gmail.com
   PASSWORD=your-email-password

3. Run the server:
   node server.js

4. Test the email sending functionality with a POST request to `/send-email` using Postman or any HTTP client. 
   Example body:
   {
       "to": "recipient@example.com",
       "subject": "Test Email",
       "message": "Hello, this is a test email."
   }
*/
