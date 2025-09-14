const output = document.getElementById("output");

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
