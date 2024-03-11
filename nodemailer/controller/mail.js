const nodemailer = require("nodemailer");

const mail = async (req, res) => {
    let test = await nodemailer.createTestAccount(); 

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "christop66@ethereal.email",
        pass: "asH9skJQpqe8W99tZM",
      },
    });


    const info = await transporter.sendMail({
      from: '"Nishit 👻" <christop66@ethereal.email>', // sender address
      to: "nishitm060@gmail.com, pushkar.mondal2021@vitbhopal.ac.in", // list of receivers
      subject: "Testing mail", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    
    // res.send("sending mail");
    res.json(info);
};

module.exports = mail;
