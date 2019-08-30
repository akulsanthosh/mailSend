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

    var body = 'Congratulations ' + name + '! \n\n'

    body += `We're happy to announce that you've made it to the list of selected participants for Make-A-Ton!

With a record-breaking number of incredible submissions, the selection process was more difficult than ever this year, taking into account a myriad of different factors. From this you've made it to our list of top scoring participants. To confirm your participation, you will have to complete payment of the registration fee (Rs.400) on the link below, on or before 30th of this month.`

    body += '\n\n' + link + '\n\n';

    body += `The registration fee will be fully refunded to you on successful completion of the event. 

Follow us on social media:
Instagram: tiny.cc/makeaton_instagram
Facebook: tiny.cc/makeaton_facebook
Twitter: tiny.cc/makeaton_twitter

Wishing you all the best for the competition ahead!
Regards,\nTeam Make-a-Ton`


    // 1. https://imjo.in/uNSMN9
    // 2. https://imjo.in/UTBcS3
    // 3. https://imjo.in/Zp3yQS
    // 4. https://imjo.in/JkYW8Z


    var mailOptions = {
        from: '"Make-a-Ton" <pr@makeaton.org>', // sender address
        to: email,
        bcc: 'akul753@gmail.com',
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

// mail('akul753@gmail.com', 'Akul Santhosh', 'https://imjo.in/uNSMN9')
