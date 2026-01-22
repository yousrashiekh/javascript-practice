

// first class function in js


function first(val){
    val();
}
first(function(){
    console.log("this is first class function");
})



let  abcd = function(hello){
    hello();
}
abcd(function(){
    console.log("its amazing");
})