// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                          function()}


const person={
    fullname: "Yusra Shiekh",
    age: 18,
    education:"intermediate",
    isEmploye:true,
    hobbies:["Studying","Reading","Coding"],
    greet:function name() {
        console.log("hi,this is me shazadi malika" )
    }
}

const student={
    name:"aliza",
    grade:"10th",
    marks:390,
    subjects:["chemistry","physics","computer science"],
    isapss:true,
    sayhello:()=>{
        console.log("Hi,i am exhaustic.......");
    }   
    }

console.log(person.fullname);
console.log(person.age);
console.log(person.education);
console.log(person.isEmploye)
console.log(person.hobbies[1]);
person.greet();


console.log(student.name);
console.log(student.grade);
console.log(student.marks);
console.log(student.subjects);
console.log(student.isapss);
student.sayhello();

// Changing a property
student.marks=400,
console.log(student.marks);

