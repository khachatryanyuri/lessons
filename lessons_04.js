// 1. Write iterator function for an array that returns each value of the array when called, one element at  a time
// const returnIterator = (arr) => {
//     // ... your code here
// };

// const array2 = ["a", "b", "c", "d"];
// const myIterator = returnIterator(array2);

// console.log(myIterator.next()); // -> should log [0, 'a']
// console.log(myIterator.next()); // -> should log [1, 'b']
// console.log(myIterator.next()); // -> should log [2, 'c']

// 2. Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!) Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
// function Words(string) {
//     this.str = string;
// }
// ... your code here

// 3. Write a function that will console.log "hello there", or "bye", every three seconds depending on if the word passed into the function is 'english'. Do not use any type of loop constructor and only make the call to createConversation once.
// function* createConversation(str) {
//    ... your code here
// }
// ... your code here

// 4. Write a generator function which takes 3 arguments` start, end, step, and gives back values in range [start, end], incrementing by "step".
// function* rangeIter(start, end, step) {
//     // ... your code here
// }
// ... your code here

// 5. Write a function which takes an array as argument and removes duplicates from that array
// function removeDuplicates(arr) {
//     ... your code here
// }
// ... your code here

// Ex: [1, 2, 2, 3] --> [1, 2, 3]
// [1, 1, 1] --> [1]

// 6. Write a function which takes an array with length "n" as argument and swaps 1st and nth, 2nd and (n-1)th and so on items.
// function swapArray(arr) {
// ... your code here
// }
// ... your code here
// Ex: [1, 2, 3, 4] --> [4, 3, 2, 1]
// [1, 2, 3, 4, 5] --> [5, 4, 3, 2, 1]

// 7. what will be the output, why ?
// async function getData() {
//     return await Promise.resolve('I made it!');
// }

// const data = getData();
// console.log(data);

// 8. what will be the output, why ?
// const myPromise = () => Promise.resolve("I have resolved!");

// function firstFunction() {
//   myPromise().then((res) => console.log(1, res));
//   console.log("first");
// }

// async function secondFunction() {
//   console.log(2, await myPromise());
//   console.log("second");
// }

// firstFunction();
// secondFunction();