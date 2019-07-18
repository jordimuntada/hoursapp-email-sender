const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});


app.get('/', (req, res) => {
  res.send(process.env.GOOGLE_PASSWORD);
  console.log("FUNCIONA");
  console.log("process.env.GOOGLE_EMAIL = ", process.env.GOOGLE_EMAIL);
  //res.send("funcionaaaaaaa!");
})

//app.post('/api/v1', (req,res) => {
  //var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: "hoursisthefuture@gmail.com", //process.env.GOOGLE_EMAIL,
      pass: "somelfutur2018" //process.env.GOOGLE_PASSWORD
    }
  });

  var mailOptions = {
    from: "hoursisthefuture@gmail.com", //data.email,
    to: 'jmuntada@gmail.com',
    subject: "Prova d'enviar email des de Hours App",
    html: `<p>Homer</p>
            <p>homer@fox.es</p>
            <p>Hi, I am Homer!</p>`
    /*html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`
    */
  };

  smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
      res.send(error)
    }else {
      res.send('Success')
    }
    smtpTransport.close();
  });

//})