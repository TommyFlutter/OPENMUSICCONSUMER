const nodemailer = require('nodemailer');
 
class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 465,
      secure: true,
      auth: {
        user: '4a5950a3b2bb7c',
        pass: c9fe2b499b8715,
      },
    });
  }
 
  sendEmail(targetEmail, content) {
    const message = {
      from: 'Openmusic',
      to: targetEmail,
      subject: 'Ekspor Lagu',
      text: 'Terlampir hasil dari ekspor lagu',
      attachments: [
        {
          filename: 'songs.json',
          content,
        },
      ],
    };
 
    return this._transporter.sendMail(message);
  }
}
 
module.exports = MailSender;


