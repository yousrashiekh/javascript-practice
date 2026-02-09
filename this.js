
// this keyword gives reference to the object


const child={
    name:"arshman",
    favfood:"pizza",
    age:10,
    getinfo:function(){
        console.log(`hi,my name is ${this.name}and 1 am ${this.age}years old `)
    }
}
child.getinfo();


const person = {
    firstName: "Yusra",
    lastName: "Shiekh",
    favfood:"lazania",
    age: 18,
    isEmployed: false,
    talk : function(){
        console.log(`Hi I am ${this.firstName}`)
    },
    eat : function(){
        console.log(`my fav food is ${this.favfood}`)
    },
}

person.talk();
person.eat();