let multiple=(num1,num2)=>{
    return  num1*num2;
}
console.log(multiple(4,5));



let greet=()=>{
return "salam"+ " yusar"
}
let result=greet();
console.log(result);




let volcount=(str)=>{
    let count=0;
    const vowels="aeiouAEIOU";
    for(const char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(volcount("hello world"));








// let a = "24";
// let b =Number(a);
// console.log(b);
// console.log(typeof b);