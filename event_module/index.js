const EventEmitter = require('events')
const event = new EventEmitter();

//Example - 1:
const cat = new EventEmitter();
const dog = new EventEmitter();

dog.on("bark", () => {
  console.log("Woof! Woof!");
});

cat.on("bark", () => {
  console.log("Meow! Meow!");
});

dog.emit("bark");
cat.emit("bark");

const change = new EventEmitter();

change.on('changes', (args) => {
    console.log(`A saved events occures: name: ${args.name}, id: ${args.id}`);
})

change.emit('changes', {
    id: 10,
    name: "Pushkar"
});

//Example - 2:
event.off("joota japani", () => {
    console.log("solidity auditing");
});

event.on("joota japani", () => {
  console.log("solidity security");
});

event.on("joota japani", () => {
  console.log("solidity lang");
});
event.emit('joota japani');

event.on("page", (sc, msg) => {
    console.log(`status code ${sc} and page is ${msg}`);
})
event.emit("page", 200, "ok");