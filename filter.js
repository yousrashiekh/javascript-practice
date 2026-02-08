let number=[1,2,3,4,5,6]
 let newnumb=number.filter(evenNum)

function evenNum(element){
     return element % 2 === 0
}
console.log(newnumb);



let num=[1,2,3,4,5,6,7]
let newnum = num.filter(isOld)

function isOld (element){
   return element % 2!== 0
}
console.log(newnum)



let age = [16, 17, 18, 19, 20, 21, 22, 23]
let adult=age.filter(isAdult);
let young=age.filter(isyoung);


function isAdult(val){
        if(val > 18)
            return isAdult
}
console.log(adult)


function isyoung(val){
        if(val < 18)
            return isyoung
}
console.log(young)



const words = ["apple","banana","pomegranate","orange","redApple","sweetpotato"]
const getshortwords=words.filter(shortwords)

function shortwords(val) {
        if(val.length <= 5)
            return shortwords;
}
console.log(getshortwords);
