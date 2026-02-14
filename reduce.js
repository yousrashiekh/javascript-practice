let price=[10, 20, 30, 40, 50, 60, 70]
let total = price.reduce(sum);

function sum(accumalator,currentvalue) {
    return accumalator +currentvalue
}0;
console.log(total);



const grades=[40, 50, 60, 70, 80, 90]
const maximum=grades.reduce(getMax)
const minimum=grades.reduce(getmin)

function getMax(accumalator,currentvalue) {
    return Math.max(accumalator,currentvalue)
}
console.log(maximum);


function getmin (accumalator,currentvalue){
        return Math.min(accumalator,currentvalue)
}
console.log(minimum);


