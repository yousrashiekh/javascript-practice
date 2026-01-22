function grade(scrore){
if(scrore >=90 && scrore <=100 ) return "A";
 else if(scrore >=80 && scrore <=89 ) return "B";
 else if(scrore >=60 && scrore <=69 ) return "C";
 else if(scrore >=50 && scrore <=59 ) return "D";

else return "F";  
}
let result= grade(12);
console.log(result);



//rest operator
function abc(...number){
    console.log(number);
}
abc(1,2,3,4,5);
