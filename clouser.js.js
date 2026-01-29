function myfunction(){
    let a = 5
     function hello(){
        console.log(a);
    }
    return hello;
}
let greet = myfunction();
greet();



function outer(){
    let value=30;
    return function inner(){
        console.log(value);
    }
}
let ans = outer();
ans();




function first(){
    let name = "javascript";
      function second() {
        console.log(name);
    }

    return second;
}
let result = first();
result();




function counter(){
    let count = 0;
    function math(){
        count++;
        console.log(count);
    }
 return math;
}
let counter1 = counter();
counter1();
counter1();
counter1();
counter1();




function add(a, b){
    function addition(){
        console.log(a + b);
    }
 return addition;
}
let conclusion = add(5, 10);
conclusion();





function yusra(FIRSTname, LASTname){
    let name = FIRSTname + LASTname;
    function shiekh(FIRSTname, LASTname){
        console.log(name);
    }
    return shiekh;
}
let fullname=yusra("Yusra", " Shiekh");
fullname();
