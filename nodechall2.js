const fs = require('fs');

//create a folder:
fs.mkdir('challange', (err) => {
    console.log("Folder created");
});

//create a file:
fs.writeFile("./challange/aboutme.txt", "My name is pushkar", (err) => {
  console.log("File createdd");
});

//append data to our existing file:
fs.appendFile("./challange/aboutme.txt",  " Please give me life", (err) => {
    console.log("append success");
});

//read data without buffer:
fs.readFile("./challange/aboutme.txt", "utf-8", (err, data) => {
    console.log(data);
});

//rename our file:
fs.rename("./challange/aboutme.txt", "./challange/aboutnone.txt", (err) => {
    console.log("Name changed");
});

//delete file:
fs.unlink("./challenge/aboutnone.txt", (err) => {
    console.log("File deleted");
})