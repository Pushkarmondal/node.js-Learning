const os = require('os');

//to get our system architecture:
console.log(os.arch());

//total system's used memory:
const mem = os.freemem();
console.log(`${mem / 1024 / 1024 / 1024}`);

//total system's memory overall:
const mem1 = os.totalmem();
console.log(`${mem1 / 1024 / 1024 / 1024}`);

//to get system host name:
console.log(os.hostname());

//to get our working environment name:
console.log(os.platform());
