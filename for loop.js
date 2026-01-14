let i = 5 
for( let i = 1;i <= 5; i++){
    console.log("hello")
}
let name= "yusra"
for(let i = 1 ; i <= 100; i++){
    console.log(name);
}

let sum = 0;
for( i=1; i<=5; i++){
    sum +=i
     console.log("sum =",sum  );
}


let num=20
for(let i = 1; i < 30; i++ )
    if( i % 2 === 0){
        console.log( i, " is even number ");
    }
 


    for( let i = 1; i < 30; i++)
    if( i % 2 !==0){
        console.log( i, " is odd number ");
    }



for(  let i=1; i < 50; i++)
   if(i % 2 !==0 ){
     console.log( i, "is not  divisible of 2");

   }
    
   for( let i=1; i<100; i++)
    if( i % 3===0 && i % 5===0 ){
        console.log(i,"is divisible of 3 and 5");
    }

      
    for(let i=1; i<40; i++)
        if( i >= 20) {
    console.log( i, "is grater than 20");
        }

for( let i = 1; i<25; i++){
    if( i % 4===0){
        console.log(i ,"is multiple of 4");
    }
}

for( let i =1; i<60; i++){
    if(i >= 10 && i <=30 ){
         console.log(i );
    }

}

for( let i =1; i<=100; i++){
    if(i % 10===0 ){
        console.log(i );
    }
}

for( let i = 1; i<=100; i++){
    let sqrt=Math.sqrt(i)
    if( sqrt===Math.floor(sqrt) ) 
        console.log(i)
    }

for( let i = 1; i<=100; i++){
     if(i > 50 && i%2===0){
        console.log(i)
    }
     }
     let count=0
for( let i=1;  i<=50;  i++ ){
    if(i%5===0){

        count++;
    }
}
    console.log( count,"count")

       let count1 =0
for( let i=1; i<30; i++){
    if(i%3===0 ){
        count1++;
    }
    }
console.log(count1 ,"count");

let sum3=0
for( i=1; i<100; i++){
    if(i%4===0){
        sum3++;
    }
}
console.log(sum3 ,"sum");



       let count0 =0
for( let i=-50; i<0; i++){
    if(i%5===0 ){
        count0++;
    }
    }
console.log(count ,"count");


       let count3=0
for( let i=-30; i<30; i++){
    if(i%6===0 ){
        count3++;
    }
    }
console.log(count3 ,"count");


let  count4=0
for( let i=1; i<50; i++){
    if(i%7==0){
        console.log("divisible by 7:", i)
    }
}
    count4++;{
        console.log( "count",count4)
    }

let count5=0
for( let i=1; i<50; i++){
    if(i%7==0){
        console.log("divisible by 7:", i)
        count5++;
    }
}
        console.log( "count",count5);

    for(let i=-20; i<20; i++){
        if(i>0 && i%2!==0 ){
            console.log("odd Number:",i)
        }

    }
      let name1 = "yusra"
    for(let i =1; i <50; i++){
        console.log( "name:", name1);
    }




       

 for( let i=1; i<=10; i++){
    console.log("i=",i);
 }
 

 for( let i =5; i>1; i--){
    console.log(i)
 }
for(let i = 1; i>50; i++){
    if(i%2===0){
        console.log("is even number",i)
    }
}

for(let i = 1; i>50; i++){
    if(i%2!==0){
        console.log("is odd number",i)
    }
}

for( let i=1; i<=10; i++){
    console.log( "2 x ", i ,"=",2*i);
}

for(let i = 1; i<=12; i++){
    console.log("5 x", i , "=",5*i );
}
let sum1 = 0
for(let i = 1; i<=10; i++){
    sum1+=i;
    console.log( "current sum",sum );
}
let sum2=0
for(let i = 1; i<=20; i++){
    if(i%2===0){
        console.log("even number =",i)
        sum2+=i;
    }
}
console.log( "current number=",sum2);

for(let i = 1; i<=50; i++){
    if( i%3===0 && i%7===0){
        console.log("multipe of 3 and 7=",i)
    }
}