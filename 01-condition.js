// // // const product ={
// // //     name: "parkar jotter standard",
// // //     rating: 7002,
// // //     offer:5,
// // //     isdeal:true,
// // //     pirce:100,

// // // }
// // // product["rating"]=product["rating"]+5
// // //     product["name"]="yusra pen"
// // // console.log(product["rating"]);

// // // const profile={
// // //     username:"shradhkhapra",
// // //     followers:569,
// // //     post:195,
// // //     company:"apna school",
// // //     isfollowers:true

// // // }
// // console.l og(profile)

// // let a = 2
// // let b = 4
// // let c = 2
// // console.log("a =", a, "b =", b, "c =", c);
// // console.log("a+b+c=",a+b+c)
// // console.log("a-b-c =", a-b-c)

// // console.log("a++=", a++)
// // console.log("a=",a)



// // assignment operator//
// // let x = 5;
// // let y = 10;


// // // y -= 4; y=y-4
// // //  console.log("y=", y);

// // x *= 2; 
// // console.log("x=", x);
 
// // y **= 4; 
// // console.log("y=", y);


let a= 2
let b= 2

console.log("a>=b",a>=b)


// let a=  8
// let b= 2
// let cond1 = a>b
// let cond2 =a!==b
// console.log("!(a<b)",!(a<b)) ;


// conditional statement
//  let age =20
// if ( age >= "18" ){
//     console.log(  "adult");
// }
// else{
//     console.log("child" )
// }
//  2 condition
// let num = 45

// if( num % 2==0){
//     console.log( num," is even")
// }
// else{
//     console.log( num," is odd")
// }
//  3 condition 
// let number = 30
// if( num >= 0){
//     console.log("positive");
// }
// else if ( num === 0){
//     console.log("zero");
// }
// else{
//     console.log("negative");
// 
//  4 condition
// let marks = 90
// if( marks >= 80){
//     console.log(  marks," is A grade");
// }

// else if(marks >= 70){
//     console.log(marks, " is B grade");
// }
// else if(marks >= 60){
//         console.log( marks,"C grade");
// }
// else {
//     console.log( "fail")
// }
//  5 condition
let username = "yusra";
 let password = "admin123";

 if( username==="yusra" && password==="admin123"){
    console.log("login")
 }
 else{
        console.log( "not login")
 }
let temperature = 30
if(temperature >= 30){
    console.log( temperature, " is hot")
}
else if (temperature >=20 && temperature<30 ){
    console.log( temperature, " is normal")
}
else{console.log("cold");
    }

    // condition

    let bill = 5000 

    if( bill >= 5000){
        console.log("20% discount");
    }
    else if(bill > 3000 ){
        console.log("10% discount");
    }
    else {
        console.log( "no discount");
    }
    // condition 

    let time = 12
    if( time >= 5 && time < 12){
        console.log( "good morning");
    }
    else if( time >= 12 && time < 17)
        console.log( "good afternon");

    else if( time > 17 && time < 21)
        console.log( "good evening");
    else{
        console.log( "good night");
    }
// condition 
let year = 2024;

if( year  %  4 === 0 && year % 100 !==0 || year % 400 === 0){
    console.log( year, "is leap year")
}
else{
    console.log(  year ," is not a leap year" )
}
//  condition 
let age = 18
if( age >= 18 || age < 60){
    console.log ( 'adult');
}
 else if(  age > 60  && age <18 ){
        console.log ( 'minor');
    }
else{
    console.log ( 'old');
    }       

    // condition
    let num = 50

    if(num % 5 === 0){
        console.log( num, "is a multiple of 5" )
    }
    else{
        console.log(num,  "is NOT a multiple of 5")
    }
        
// condition
let marks = 79

if( marks >= 80 && marks < 100){
    console.log(marks,"is A grade");
}
else if( marks >= 70 && marks < 89){
console.log(marks, " is B grade");
} 
else if( marks >= 60 && marks < 69){
console.log(marks, " is C grade");
}
else if( marks >= 50 && marks < 59){
console.log(marks," is D grade");
}
else{console.log(marks,"fail");
}

    
// let amount = 8000
// if( amount >= 5000){
//     console.log("20% discount");
// }
// else if ( amount >= 3000){
//     console.log("10 discount");
// }
// else{ 
//      console.log("no discount");


// }
 
let amount = 8000;
let discount = 0;

if (amount >= 5000) {
    discount = 0.20;
}
else if (amount >= 3000) {
    discount = 0.10;
}
let finalAmount = amount - (amount * discount);
console.log("Final Amount:", finalAmount);


let balance = 50
if(balance > 0)    {
    console.log("positive");
}
else if (balance < 0 ){
        console.log("negative");
}
else {
    console.log( "zer0");
}
