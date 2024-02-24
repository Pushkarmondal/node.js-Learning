const fs = require("fs");
// fs.writeFileSync("read.js", "Welcome to my website");

// fs.appendFileSync("read.txt", "Welcome to my website");
const read1 = fs.readFileSync("read.txt"); 
ans = read1.toString();
console.log(ans);

//to rename file.
fs.renameSync("read.txt", "new_name.txt");