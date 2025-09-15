const output = document.getElementById("output");

// --------------> FUNCTIONS <-----------------
//basic function
function greet() {
  output.innerHTML = "HELLO WORLD";
  console.log("HELLO WORLD, from btn1");
}
document.getElementById("btn1").onclick = greet;

//function with parameters
function greetPerson(name) {
  output.innerHTML = "Hello " + name;
  console.log("Hello " + name + ", from btn2");
}
document.getElementById("btn2").onclick = function () {
  greetPerson("Israk");
};

// function with return value
function sqr(num) {
  return num * num;
}
console.log("square of 5 is: " + sqr(5));

// arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log("multiply 5 and 6: " + multiply(5, 6));
//-----------------------------------------------------------

//--------------> OBJECTS <-----------------
// basic object
let car = {
  brand: "AUDI",
  model: "A6",
  year: 2023,
  color: "Red",
};
document.getElementById("btn3").onclick = function () {
  output.innerHTML = `Car Details: ${car.brand} ${car.model}, ${car.year}, ${car.color}`;
};

// object with method
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("Person's full name is: " + person.fullName());
// -----------------------------------------------------------

//--------------> EVENTS <-----------------
// click event
document.getElementById("btn4").onclick = function () {
  output.innerHTML = "Button 4 Clicked!";
  console.log("Button 4 Clicked!");
};

// mouseover ir mouseout event

output.addEventListener("mouseover", function () {
  output.style.backgroundColor = "lightblue";
});
output.addEventListener("mouseout", function () {
  output.style.backgroundColor = "white";
});

// input event
document.getElementById("inputBox").addEventListener("keyup", function (e) {
  output.innerHTML = "You typed: " + e.target.value;
});

//----------------STRINGS------------------

//quotes + quotes inside
document.getElementById("btn5").onclick = function () {
  let str1 = "hello";
  let str2 = '"JS is fun!"';
  output.innerHTML = str1 + ", " + str2;
};

// template string
document.getElementById("btn6").onclick = function () {
  let name = "Israk";
  let age = 22;
  let msg = `My name is ${name} and I am ${age} years old.`;
  output.innerHTML = msg;
};

// string length with escape character
document.getElementById("btn7").onclick = function () {
  let text = "Hello\nWorld!";
  output.innerHTML = `String: ${text} <br> Length: ${text.length}`;
  console.log(text);
};

// string methods
document.getElementById("btn8").onclick = function () {
  let text = "JavaScript is awesome!";
  output.innerHTML =
    `Slice(0,10): ${text.slice(0, 10)} <br` +
    `Substring(0, 10): &{text.substring(0, 10)} <br>` +
    `Replace: ${text.replace("awesome", "fun")} <br>` +
    `Uppercase: ${text.toUpperCase()} <br>` +
    `Lowercase: ${text.toLowerCase()} <br>` +
    `Concat: ${text.concat(" Let's code!")} <br>` +
    `Trim: ${"   Hello World!   ".trim()} <br>` +
    `PadStart: ${"5".padStart(4, "0")} <br>` +
    `PadEnd: ${"5".padEnd(4, "0")} <br>` +
    `CharAt(0): ${text.charAt(0)} <br>` +
    `CharCodeAt(0): ${text.charCodeAt(0)} <br>` +
    `Split(' '): ${text.split(" ")} <br>`;
};
