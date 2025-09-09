"use strict";
// All functions are defined but not immediately executed
// They will only run when explicitly called
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHelloAsyncPromise = createHelloAsyncPromise;
exports.returnTenAfterOneSecond = returnTenAfterOneSecond;
exports.randomNumberPromise = randomNumberPromise;
exports.simulateTask = simulateTask;
exports.filterEvenNumbers = filterEvenNumbers;
// 1. Promise that returns "Hello Async"
function createHelloAsyncPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
// 2. Function returning Promise with number 10
function returnTenAfterOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
// 4. Promise with random number
function randomNumberPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            if (randomNum > 0.5) {
                resolve(randomNum);
            }
            else {
                reject("Random number is less than 0.5");
            }
        }, 2500);
    });
}
// 5. SimulateTask function
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time + ". Task done");
        }, time);
    });
}
// 9. Filter even numbers function
function filterEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 6001);
    });
}
