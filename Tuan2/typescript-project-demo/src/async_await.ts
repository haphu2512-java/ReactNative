import { simulateTask,randomNumberPromise } from "./index"; 

// 11. Convert Exercise 1 into async/await.
//Create a Promise that resolves with the string "Hello, World!" after 2 seconds.
const helloWorldPromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});
async function fetchHelloWorld() {
  const message = await helloWorldPromise;
  console.log(message);
}
fetchHelloWorld();
//Write an async function that returns the number 20 after 1 second.
async function returnTwentyAfterOneSecond(): Promise<number> {  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
}
async function logTwenty() {
  const number = await returnTwentyAfterOneSecond();
  console.log(number);
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
async function logSimulatedTask() {
    const result = await simulateTask(2000);
    console.log(result);
}
logSimulatedTask();

// 13. Handle errors using try/catch with async/await.
try {
    const result = await  randomNumberPromise();
    console.log(result);
} catch (error) {
  
}


// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
// 15. Call multiple async functions sequentially using await.
// 16. Call multiple async functions in parallel using Promise.all().
// 17. Use for await...of to iterate over an array of Promises.
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
// ID.
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.