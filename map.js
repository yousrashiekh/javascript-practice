let numbers = [1,2,3,4]
 let newnumber=numbers.map(shownum)

function shownum(element){
    return Math.pow(element,2)
}
console.log(newnumber)
console.log(numbers)


let friends=["areeba","mahnoor","aiman","mehreen"]
let newfriends=friends.map(names)

function names(element){
        return element.charAt(0).toUpperCase()+element.slice(1);
}
console.log(newfriends)






let jewellary=["gold", "silver"]
let newjewellary=jewellary.map(artificial)


function artificial(element){
        return element.toUpperCase().charAt(0)+element.slice(1)
}
console.log(newjewellary)







let num = [1,32,3,34,4,5]
let newNum = num.map (function(val){
    if(val>30){
        return val
    } 
    else{
        return val*3
    }
})
console.log(newNum);



















