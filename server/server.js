const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

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
    service: 'gmail',
    auth: {
      XOAuth2: xoauth2.createXOAuth2Generator({
        user: 'sonithepanda@gmail.com',
        clientId: '460422257608 - h18i84nm10rt93g8tinpctnj6hb0b6g0.apps.googleusercontent.com',
        clientSecret: 'BmC2mJwCM0PaNXqokXDMRlXE',
        refreshToken: '1/zvWby5R1ml1GVa1AnlVLeer8tsix1AwpXvDBjagnLVo'
      })
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"Portfolio Contact Form" <sonithepanda@gmail.com>',
    to: 'ivan3123708@gmail.com',
    subject: 'Contact you',
    text: 'Hello world?',
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