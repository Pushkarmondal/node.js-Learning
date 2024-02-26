const fs = require("fs");
fs.writeFile("write1.txt", "today is awesome",
    // callback function:
    (err) => {
        console.log("file created");
});

fs.appendFile("write1.txt", "very hectic day", (err) => {
    console.log("Task completed");
});

//we have to pass two argument while reading data:
fs.readFile("write1.txt", "UTF-8", (err, data) => {
    console.log(data);
});