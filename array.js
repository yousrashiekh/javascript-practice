
let color1=["orange","purple","blue","red"];
console.log(color1.indexOf("purple"));


// modify array
let number=[1,2,3,4];
number[1]=9;
console.log(number);


let array=[1,2,3]
array.push(4);
console.log(array);


let arra=[1,2,3]
arra.pop()
console.log(arra);


let ara=[1,2,3,4]
ara.shift()
console.log(ara);


let are=[2,3,4]
are.unshift(1)
console.log(are);


let number=[1,2,3,4,5,6]
number.splice(2,3)
console.log(number);


let num=[7,8,9,10,11]
let number1=num.slice(0,3)
console.log(number1);
console.log(num);


let part=[1,2,3,4,5]
console.log(part.reverse());


let com=[11,55,34,0,1]
 let sr=com.sort(function(hi,hello){
  return hi-hello         //ascending order
})
console.log(sr);


let campare=[6,1,9,33,6,0 ,77]
let arr = campare.sort(function(a,b){
    return b-a             //descending order
})
 console.log(arr);


let fruit = ["orange","apple","pomegranate"]
fruit.sort();
console.log(fruit);


let arr1 = [1,2,3,4,5,6];
arr.push(8);
console.log(arr1)


let arrey=[1,2,3,4,5,6,7];
arrey.pop();
console.log(arrey)


let nam=[1,2,3,4,5,6,7];
num.splice(2,1);
console.log(nam)

let js=[1,2,3,4,5,6,7];
let newjs=js.slice(2,4);
console.log(newjs);
console.log(js);
