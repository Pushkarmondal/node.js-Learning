//CRUD Operation:
const fs = require('fs')

// to open file:
fs.open("file.txt", "w", function (err, file) {
    if (err) throw err;
    console.log('File created');
});

//to write some context to our existing file:
fs.writeFile("file.txt", "hello how are you", function (err) {
    if (err) throw err;
    console.log("write content successfully");
})

//to update file:
data ="This is a data saying some random things which is only for example purposes xD";
fs.writeFile("mynewfile1.txt", data, function (err) {
  if (err) throw err;
  console.log("Updated!");
});

//to read file context(data) from our file:
fs.readFile("file.txt","utf-8", function (err, data) {
    if (err) throw err;
    console.log(data);
})

//delete file or unlink our file we have created:
fs.unlink("file.txt", function (err) {
    if (err) throw err;
    console.log("Success");
})