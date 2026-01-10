const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('e:/Portfolio/Kunal_Tomar_Resume.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error(error);
});
