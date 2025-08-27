"use strict";
// A new Promise is created, which takes a function with 'resolve' and 'reject' as arguments.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
myPromise.then((message) => {
    console.log(message);
});
// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function returnTenAfterOneSecond() {
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
