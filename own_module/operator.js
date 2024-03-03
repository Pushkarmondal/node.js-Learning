const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const name = 'Pushkar';

//for single 
// module.exports = add;

//for multiple modules:)
// module.exports.add = add;
 //when I call this function it will throw error.
// module.exports.sub = sub;

module.exports = { add, sub, mult, name};

