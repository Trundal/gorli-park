"use strict";
const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const { email, name } = req.body;

  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    async function send() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"GorliPark" <info@example.com>', // sender address
        to: `${email}`, // list of receivers
        subject: `Thank you ${name} for contacting GorliPark`, // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log(`Message sent: ${email}`, info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }
    if (!email || !name) {
      throw new error("did not receive name or email adress");
    }
    send();
    res.status(200).json(`Message sent: ${email}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// const { lang1, lang2, bought, date, fromTo } = req.body
// try {
//   const newItem = new Item({ lang1, lang2, bought, date, fromTo })
//   const item = await newItem.save()
//   if (!item) {
//     throw new error('item save error')
//   }
//   res.status(200).json(item)
// } catch (error) {
//   res.status(400).json({ message: error.message })
// }
