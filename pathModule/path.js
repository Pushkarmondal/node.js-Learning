const path = require('path');

//to get my directory name:
console.log(path.dirname("/Users/pushkarmondal/Learn JavaScript/pathModule/path.js"));

//to get my file extension name:
console.log(
  path.extname("/Users/pushkarmondal/Learn JavaScript/pathModule/path.js")
);

//to get our file name:
console.log(
  path.basename("/Users/pushkarmondal/Learn JavaScript/pathModule/path.js")
);

//to get our directory, root, base, name, extension name together:
console.log(
  path.parse("/Users/pushkarmondal/Learn JavaScript/pathModule/path.js")
);






