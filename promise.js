 function laptop() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Laptop is ready!")
        }, 4000);
    })  
}

function mobile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mobile is ready!");
        }, 3500);
    })
}

function LCD() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("LCD is so boring to watch")
        }, 500);
    })
}

laptop().then(value => {console.log(value); return mobile();})
        .then(value=>{console.log(value); return LCD()})
        .then(value=>{console.log(value); console.log("ALL TASK COMPLETE");})



        const age = 15;
const ageCheck = new Promise((resolve, reject) => {
  if (age >= 40) {
    resolve("Access granted");
  } else {
    reject("Access denied");
  }
});

ageCheck
.then(message => {console.log(message);})
  .catch(error => {console.log(error);});


function getdata1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("data recieved");
          resolve("successfully");
        }, 4000);
    })
}

  function getdata2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("data recieved");
          resolve("successfully");
        }, 2000);
    })
    
  }

console.log("fetching data1.........");
getdata1().then(val => {console.log(val);

    console.log("fetching data2.........");
    getdata2().then(value => {console.log(value);});

});





   