

//high order function




function oder(){
    return function(){
        console.log("this is high order function");
    }
}
let result1=oder("oh");
result1();




let add = (a,b)=>{
    return function(){
        console.log(a+b);
    }
}
let sum = add(8,7);
sum();     
