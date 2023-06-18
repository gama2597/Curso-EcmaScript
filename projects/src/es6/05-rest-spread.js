// arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: "Gabriel", age: 34 };
let { username, age } = user;
console.log(username, user.age);

// spread operator ...

let person = { name: "Gabriel", age: 28 };
let country = "PE";

let data = { id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3)