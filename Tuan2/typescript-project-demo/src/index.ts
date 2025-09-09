// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});


myPromise.then((message) => {
  console.log(message);
});


// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
export function returnTenAfterOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
// Call the function and log the result.
returnTenAfterOneSecond().then((number) => {
    console.log(number);
});


// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// second.

// export function rejectAfterOneSecond() {
//     return new Promise((reject) => {
//         setTimeout(() => {
//             reject("Something went wrong");
//         }, 1000);
//     });
// }
// rejectAfterOneSecond().then((mess)=>{
//     console.log(mess);
// })


// 4. Use .then() and .catch() to handle a Promise that returns a random number.
export function randomNumberPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
                if(randomNum > 0.5){
                    resolve(randomNum);
                }else{
                    reject("Random number is less than 0.5");
                }
        }, 2500);
        
    });
}

randomNumberPromise()
    .then((num) => {
        console.log("Random number:", num);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    
// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
export function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time + ". Task done");
        }, time);
    });
}
simulateTask(3000).then((result) => {
    console.log(result); // "Task done" 
});


// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
Promise.all([simulateTask(3500), simulateTask(4000), simulateTask(4500)]).then((results) => {
    console.log(results); // ["Task done", "Task done", "Task done"]  
});



// 7. Use Promise.race() to return whichever Promise resolves first.
Promise.race([simulateTask(5000), simulateTask(5500), simulateTask(6000)]).then((result) => {
    console.log(result); // "Task done" from the fastest Promise    
});


// 8. Create a Promise chain: square the number 2, then double it, then add 5.
setTimeout
Promise.resolve(2)
    .then((num) => num * num) 
    .then((squared) => squared * 2) 
    .then((doubled) => doubled + 5) 
    .then((finalResult) => {
        console.log("8. FinalResult = " + finalResult);
    }); 



// 9. Write a Promise that reads an array after 1 second and filters even numbers.
export function filterEvenNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 6001);
    });
}
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
filterEvenNumbers([1, 2, 3, 4, 5, 6])
    .then((evenNums) => {
        console.log("9. Even Numbers:", evenNums); // [2, 4, 6]
    })
    .finally(() => {
        console.log("10. Done");
    });


