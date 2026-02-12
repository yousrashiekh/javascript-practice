
function hello(callback) {
    console.log("hello!");
    callback();
}

function saybye() {
    console.log("byee");
}
function wait() {
    console.log("wait");
}

function leave() {
    console.log("leave");
}

hello(saybye);




function sum(a,b,callback) {
    let result=a+b;
    callback(result);  
}
function display(result) {
    console.log("The sum is:", result);
}
function displaypage(result) {
    document.getElementById( "hello").textContent="The sum is:" + result;
}
sum(5,10,displaypage);   //display on webpage
  sum(5,10,display);     //console print




function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayhi() {
    console.log("Bye Bye");
}
greet("yusra shiekh", sayhi);