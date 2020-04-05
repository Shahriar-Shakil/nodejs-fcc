const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 12, 12);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let pedro = new Person("Pedro");
let shahriar = new Person("shahriar");
shahriar.on("name", () => {
  console.log(`my name is ${shahriar.name}`);
});
pedro.on("name", () => {
  console.log(`my name is ${pedro.name}`);
});

pedro.emit("name");
shahriar.emit("name");
