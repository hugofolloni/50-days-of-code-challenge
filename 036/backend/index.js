var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hugofol#####@gmail.com',
    pass: '######'
  }
});


var mailOptions = {
  from: 'hugofol#####@gmail.com',
  to: 'hugofollogua07@gmail.com',
  subject: 'My portfolio website is working now!',
  text: 'You can check it clicking right here!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});