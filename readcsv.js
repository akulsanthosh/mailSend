const csvFilePath = 'list.csv'
const csv = require('csvtojson')
const util = require('util')
// const mail = require('./select.js') //For lucky bitches
// const mail = require('./wait.js') //For waiting list bitches
const mail = require('./thanksbutno.js') //For poor people
// mail('akul753@gmail.com', 'Akul Santhosh', '')

var capitalize = function (str) {
    var strArr = str.split(' ');
    var newArr = [];
    for (var i = 0; i < strArr.length; i++) {
        newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
    };
    return newArr.join(' ')
}

var getLinkName = function (name) {
    var str = name;
    var strArr = str.split(' ');
    var newArr = [];
    for (var i = 0; i < strArr.length; i++) {
        newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
    };
    return newArr.join('+')
}

var getLink = function (link, name, email, phone) {
    var str = '?data_name=%s&data_readonly=data_name&data_email=%s&data_readonly=data_email&data_phone=%s&data_readonly=data_phone'
    str = link + str;
    return util.format(str, name, email, phone)
}

// console.log(
//     getLink('https://www.instamojo.com/make_a_ton_/make-a-ton-8feb5', 'Akul Santhosh', 'email@email.com', '9876543210')

// )

// var person = {
//     Email: 'akul753@gmail.com',
//     Name: 'Siddharth Bhai',
//     Phone: '9876543210'
// }

// mail(person.Email, capitalize(person.Name), '')

var count = 0;
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        // console.log(jsonObj);
        jsonObj.forEach(person => {
            // console.log(person.Name, person.Email, person.Status);

            if (person.Status == 'N') {
                // console.log(count)
                console.log(count, capitalize(person.Name), person.Email, person.Status);
                // console.log(count, capitalize(person.Name), person.Email, person.Status, getLink('https://www.instamojo.com/makeaton/make-a-ton-ticket/', getLinkName(person.Name), person.Email));
                // mail(person.Email, capitalize(person.Name), getLink('https://www.instamojo.com/Make_a_Ton/make-a-ton-cusat-79b35', getLinkName(person.Name), person.Email, person.Phone))
                // https://www.instamojo.com/Make_a_Ton/make-a-ton-cusat-79b35/
                mail(person.Email, capitalize(person.Name), '')
                count++;

            }

        });
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
    })

// Async / await usage
// const jsonArray = csv().fromFile(csvFilePath);

