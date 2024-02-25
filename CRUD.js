//create a folder:
const fs = require('fs');
// fs.mkdirSync("Pushkar");

//create a file:
fs.writeFileSync("Pushkar/bio.txt", "Hey there");

//append any text/anything on our existing file:
fs.appendFileSync("Pushkar/bio.txt", "hey get me job in web3 solidity")

//read data without buffer data:
const data = fs.readFileSync("Pushkar/bio.txt");
// console.log(data);
decode = data.toString();
// console.log(decode);

//another method:
const data1 = fs.readFileSync("Pushkar/bio.txt", "utf8");
console.log(data1);

//rename my our file:
fs.renameSync("Pushkar/bio.txt", "Pushkar/Nishit.txt");

//delete everything:
fs.unlinkSync("Pushkar/Nishit.txt");