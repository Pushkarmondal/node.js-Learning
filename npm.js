// const chalk = require("chalk");

// import chalk from "chalk";
// console.log(chalk.blue("Hello world!"));
import chalk from "chalk";
import validator from "validator";

const res = validator.isEmail("foo@bar.c");

// console.log(chalk.blue("Hello world!"));
// console.log(chalk.green.underline.inverse("true"));
// console.log(chalk.red.underline.inverse("false"));
console.log(res ? chalk.green.underline.inverse(res) : chalk.red.underline.inverse(res));