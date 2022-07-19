const express = require('express')
const app = express()
require('dotenv').config()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json())

  app.use(cors())

  app.post('/api/email', cors(), async (req, res) => {
    let {name, phone, message} = req.body
    
    const transporter = nodemailer.createTransport({  //сюда вставляем ключи из .env
        host: process.env.MAIL_HOST,                 //.env автоматически добавляется в gitignore
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
      });

      const options = {
        from: process.env.MAIL_USER,      //почта, которую использует nodemailer как шлюз
        to: "test@test.ru",              //почта на которую будут приходить заявки
        subject: "frontiers.ru",
        html: `<p>Вам пишет ${name}</p>
              <p>Сообщение: ${message}</p>
              <p>Контактный номер: ${phone}</p>`,
      };
      
      await transporter.sendMail(options, function (err, info) {

        options

        if (err) {
          console.log(err);
          return;
        }
        console.log("Sent: " + info.response);
      });
  })

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
      console.log(`serve at hhtp://localhost:${port}`);
  })