let name="yusra"

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.replace("yusra","yusra shiekh"));


//concateantion : joining two or more strings together
let friend="Areeba"
console.log(name.concat(" is the friend of ",friend," guided!"));

//Trim remove the white space from the start and end of the string
let name2="    mama    "
console.log(name2.trim());



let username = window.prompt("Enter your FULLNAME🌈");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);



let student = window.prompt("ENTER YOUR NAME AND ROLLNUMBER");
student = student.trim().charAt(0).toLowerCase() + student.trim().slice(1).toUpperCase();
alert("Your formatted input is: " + student);
console.log(student);

// let student = window.prompt("ENTER YOUR NAME AND ROLLNUMBER")
// // student=student.trim().charAt(0).toLowerCase()+student.trim().slice(1).toUpperCase();
// // console.log(student);