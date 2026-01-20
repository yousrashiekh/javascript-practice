function firstfun(){
     console.log("this is my first function");
}
firstfun();




function greet(name){
    console.log("salam"+ "! " + name);
}
greet("madam");
greet("sir");




function sum(x,y){
    console.log(x+y);
}
sum(7,2);

function divide(a,b){
    console.log(a/b)
}
divide(3,7);




function iseven(number){
    if(number%2===0){
        return true;
    }
else{
    return false;
}
}
console.log(iseven(8));
console.log(iseven(7));



function fullname(firstname,lastname){
    return firstname+" "+lastname;
}
console.log(fullname("yusra","shiekh"));




function square(num){
    return num*num;
}

let number=prompt("enter a number");

let result=square(number);
console.log(result);