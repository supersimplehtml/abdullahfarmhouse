var express = require('express');
var http = require('http')
var router = express.Router();
var connectDB = require('../db/connectdb');
const path = require('path')
var productModel = require('./product');
const nodemailer = require('nodemailer');
connectDB()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Abdullah Farm House', name: 'style', jsname: 'index' });
});

router.get('/buy', function(req, res, next) {
  res.render('buy',{title: 'Order Now', name: 'style', jsname: 'index'});
});


router.post('/buy', async (req, res) => {
  // Create a transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'demondeath42@gmail.com',
      pass: 'crmjknpidztgghnl', // Remove the space at the end of the password
    },
  });

  // Define the email options
  const mailOptions = {
    from: req.body.email,
    to: 'demondeath42@gmail.com', // Fix the email address
    subject: "I placed an order",
    text: `
      Address: ${req.body.address}
      Phone: ${req.body.phone}
      Email: ${req.body.email}
      Name: ${req.body.name}
      
      Quantity: ${req.body.quantity} kg(s)
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Order placed successfully');
    }
  });
});





module.exports = router;
