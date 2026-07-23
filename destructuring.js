
// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 2;
let b = 8;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

let arr = ["fish", "cat", "cow", "gaot", "deer"];
[arr[0], arr[4]] = [arr[4], arr[0]];

console.log(arr);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

let colors = ["red", "green", "blue", "pink", "black", "white"];

let [item1, item2, item3, item4, ...extraitem] = colors
console.log(item1, item2, item3, item4, extraitem);

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

let obj1 = {
    firstname: "yusra",
    lastname: "shiekh",
    age: 19,
    food: "biryanI",
}

let obj2 = {
    firstname: "hania",
    lastname: "mughal",
    age: 20,
    food: "fast food",
}

let { firstname, lastname, age, food, job = 'unemployed' } = obj2
console.log(firstname, lastname, age, food, job);

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS

function display({ firstname, lastname,food }) {
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`food ${food}`);
}
display(obj2);
