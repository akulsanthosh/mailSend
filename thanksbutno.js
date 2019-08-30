var nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: "smtpout.asia.secureserver.net",
    secureConnection: true,
    port: 465,
    auth: {
        user: 'pr@makeaton.org',
        pass: 'bluevitrol2012@'
    }

});


function mail(email, name, link) {

    var body = 'Hi ' + name + ', \n\n'

    body += `Thank you for your interest in Make-a-Ton.

With a record-breaking number of incredible submissions, the selection process was more difficult than ever and we regret to inform you that we are unable to have you for this edition of Make-a-Ton.

Wishing you good luck for your future endeavours.
Regards,
Team Make-a-Ton`

    var mailOptions = {
        from: '"Make-a-Ton" <pr@makeaton.org>', // sender address
        to: email,
        bcc: 'siddharthshiv2798@gmail.com',
        subject: 'Results | Make-a-Ton',
        text: body,
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = mail;

// mail('akul753@gmail.com', 'Akul Santhosh', '')
