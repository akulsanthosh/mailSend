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

    body += "Thank you for your participation in our event. \n\nWe're happy to announce that you've made it to the Waiting List of participants for Make-A-Ton. \n\nWith a record-breaking number of incredible submissions, the selection process was more difficult than ever this year, taking into account a myriad of different factors. In the event that a participant would not be competing in the final competition, you will be invited for the same. In case of selection, you will be informed shortly. \n \nWishing you good luck. \nRegards,\nTeam Make-a-Ton"

    var mailOptions = {
        from: '"Make-a-Ton" <pr@makeaton.org>', // sender address
        to: email,
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
