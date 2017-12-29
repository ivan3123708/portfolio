const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

// Static folder setup
app.use(express.static(buildPath));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.post('/send', (req, res) => {
  const output = `
    <h3>Contact info:</h3>
    <p>Name: ${req.body.name}</p>
    <p>E-mail: ${req.body.email}</p>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sonithepanda@gmail.com',
      pass: 'semetijebem'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: `${req.body.name} <sonithepanda@gmail.com>`,
    to: 'ivan3123708@gmail.com',
    subject: 'PORTFOLIO CONTACT MESSAGE',
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});

app.listen(port, () => {
  console.log('Server running...');
});