let fruit = ["apple","banana","orange"]
fruit.forEach(function(element){
        console.log(element)
})



let color=[ "red" , "blue" , "pink"]
color.forEach(function(element,index,array){
        console.log(element,index,array)
}
)



let vegetable=[ "potato" , "onion" , "eggplant"]
vegetable.forEach(function(val){
        console.log(val)
}
)



let number = [1,2,3,4,5,6]
number.forEach(function(val){
         console.log(val*5);
})


let num= [4,6,8,10]
num.forEach(element=>{
        console.log(element);
})



let display = [1,2,3,4]
display.forEach((element,index,array) => {
        array[index]=element*2
})
console.log(display);




let fruits = ["apple","kiwi", "orange", "banana",];

fruits.forEach(capitalize);
// fruits.forEach(print);
function capitalize(element,index,array){
array[index]=element.charAt(0).toUpperCase()+element.slice(1)
}
console.log(fruits)
// function UpperCase(element,index,array){
//         array[index]=element.toUpperCase()
// }
// console.log(UpperCase)


// //  function print(element){
// //         console.log(element);
// //  }


let digits = [1,2,3,4,5]

 digits.forEach(cube);
digits.forEach(showNumber);


function double(element,index,array){
        array[index]=element*2
}


function tripple(element,index,array){
        array[index]=element*3
}


function square(element,index,array){
        array[index]=Math.pow(element,2)
}

 
function cube(element,index,array){
        array[index]=Math.pow(element,3)
}

function showNumber(element){
        console.log(element);
}






