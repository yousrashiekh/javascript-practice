function api1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data received successfully!")
            resolve();
        }, 2000);
    })
}

function api2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2 received successfully!")
            resolve();
        }, 2000);
    })
}

function api3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data didnot received!")
            reject("new Error Failed to receive data");
        }, 2500);
    })
}


async function getWeatherdata() {
    await api1();
    await api2();
    await api3();
}
getWeatherdata();


// Promise.all([api1(), api2(), api3()])
//     .then((val) => {
//         console.log("All promises resolved:", val);
//     })
//     .catch((err) => {
//         console.log("Error occurred:", err);
//     });




