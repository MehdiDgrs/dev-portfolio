let nodemailer = require("nodemailer");

export default function handler(req, res) {
  const body = req.body;
  let { Name, email, message } = body;

  async function mailHandler() {
    let transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com", // Gmail Host
      port: 465, // Port
      secure: true, // this is true as port is 465
      auth: {
        user: process.env.MAIL, // username
        pass: process.env.PASSWORD, // password
      },
    });
    let info = await transporter.sendMail({
      from: "meddeg59@gmail.com", // sender address
      to: "meddeg59@gmail.com", // list of receivers
      subject: "Portfolio Web", // Subject line
      text: "Hello world?", // plain text body
      html: `Name: ${Name} <br> email :${email}<br> message:${message}`, // html body
    });
  }
  mailHandler().catch();
  res.status(200).json(body);
}
