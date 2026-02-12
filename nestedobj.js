const student={
    name:"john",
    age:40,
    address:{
        city:"karachi",
        country:"pakistan",
        street:"abc street"
    }
}
// console.log(student.name);
// console.log(student.address.city);
// console.log(student.age);
// console.log(student.address.country);

for (const property in student.address) {
  console.log(student.address[property]);
}


class person {
    constructor(name,age,address,hobbies) {
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
        this.hobbies=hobbies;    
    }
}

class Address {
    constructor(city, country, street) {
        this.city = city;
        this.country = country;
        this.street = street;
    }
}

const person1=new person("Esha",14,[ "Lahore","Pakistan","xyz street"],["reading","coding"]);
const person2=new person("Ali",16,[ "Islamabad","Pakistan","abc street"],["gaming","swimming"]);
const person3=new person("Sara",12,[ "Karachi","Pakistan","def street"],["drawing","dancing"]);

console.log(person1.name);
console.log(person2.age);
console.log(person3.hobbies);
console.log(person1.address);
console.log(person2.address);




let marks = 85;

if (marks >= 50) {
    if (marks >= 80) {
        console.log("Grade A");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Fail");
}
