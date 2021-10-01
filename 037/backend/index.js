var nodemailer = require('nodemailer');

const fetch = require("node-fetch");

const api = 'http://localhost:8080/sendTo'

fetch(api)
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log(data)
  data.map((data) => {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hugofol#####@gmail.com',
        pass: '######'
      }
    });

    var mailOptions = {
      from: 'hugofol#####@gmail.com',
      to: data.email,
      subject: 'My portfolio website is working now!',
      text: 'You can check it clicking right here!'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent to ' + data.email + ':' + info.response);
      }
    });
  });
})


