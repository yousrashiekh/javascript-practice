function task1(callback) {
    setTimeout(() => {
            console.log( "Task 1 is completed" );
    }, 4000);
    callback();
}
function task2(callback) {
    setTimeout(() => {
        console.log( "Task 2 is completed" );
        callback();
    },1500);
}
function task3(callback) {
    setTimeout(() => {
        console.log( "Task 3 is completed" );
        callback();
    }, 1000);
}
function task4(callback) {
    setTimeout(() => {
        console.log( "Task 4 is completed" );
        callback();
    }, 3000);
    callback();
}
function task5(callback) {
    setTimeout(() => {
        console.log( "Task 5 is completed" );
        callback();
    }, 2500);
}
function task6(callback) {
    setTimeout(() => {
        console.log( "Task 6 is completed" );
        callback();
    }, 4000);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6((()=>{
                        console.log("All task are complete");   
                    }))
                })
            })
        })
    })
})