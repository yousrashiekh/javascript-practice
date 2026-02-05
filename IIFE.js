(function(){
    console.log("IIFE ");
})();


(function(name){
    console.log("Salam!", name)
})("Mama");



(function test(){
    console.log("Test function");
})();



(function(a, b){
   console.log("Sum is:", a + b);
})(5, 10);




(function secret(){
      const password = "secret1234";
      console.log("The secret password is:", password);
})();













