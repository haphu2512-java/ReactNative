"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// 11. Convert Exercise 1 into async/await.
//Create a Promise that resolves with the string "Hello, World!" after 2 seconds.
const helloWorldPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
function fetchHelloWorld() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = yield helloWorldPromise;
        console.log(message);
    });
}
fetchHelloWorld();
//Write an async function that returns the number 20 after 1 second.
function returnTwentyAfterOneSecond() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(20);
            }, 1000);
        });
    });
}
function logTwenty() {
    return __awaiter(this, void 0, void 0, function* () {
        const number = yield returnTwentyAfterOneSecond();
        console.log(number);
    });
}
logTwenty();
// 12. Write an async function that calls simulateTask(2000) and logs the result.
// function simulateTask(time: number): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task done");
//         }, time);
//     });
// }
function logSimulatedTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, index_1.simulateTask)(2000);
        console.log(result);
    });
}
logSimulatedTask();
// 13. Handle errors using try/catch with async/await.
// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
// 15. Call multiple async functions sequentially using await.
// 16. Call multiple async functions in parallel using Promise.all().
// 17. Use for await...of to iterate over an array of Promises.
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
// ID.
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
