

 //ternary operator
 
let age = 14 ; 
 let status = age<=13 ? "your are adult" : "you are minor";
console.log(status);


let age2 = 20;
let driverlicense = age2 > 19 ? "you are eligible for driver license" : "you are not eligible for driver license";
console.log(driverlicense);

let age = 18;
let message = age >= 18 ? "eligible for booking" : "can't eligible for booking";
console.log(message);

let username = "admin";
let password = "";
let login = username && password? "login successfully": "login failed";
console.log( login);