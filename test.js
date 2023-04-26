// let digits = "23";
// digits = digits.split("");
// let phone = {
//   2: "abc",
//   3: "dev",
//   4: "ghi",
//   5: "jkl",
//   6: "mno",
//   7: "pqrs",
//   8: "tuv",
//   9: "wxyz",
// };

// let k = [];
// for (let i = 0; i < digits.length; i++) {
//   for (let j = 2; j < 9; j++) {
//     if (j == digits[i]) {
//       k.push(phone[j]);
//     }
//   }
// }

// for (let i = 0; i < k.length; i++) {
//   k[i] = k[i].split("");
// }
// console.log(k);
// let fin = [];

// for (let i = 0; i < k[i].length; i++) {
//   for (let j = 1; j < k[j].length; j++) {
//     let tmp = k[i][j]+k[i][j]
//   }

// }

// function myFunction() {
//   for (var i = 0; i < 10; i++) {

//     setTimeout(console.log(i), 3000);

//   }}

//   myFunction()

// for (var i = 1; i <= 10; i++) {
//   (function (j) {
//     setTimeout(function(){ console.log(j) }, 1000);
//   })(i)
// }

// function doSetTimeout(i) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }

// for (var i = 1; i <= 10; ++i)
//   doSetTimeout(i);

// function aaa(params) {
//   params = params*5
//   return function bbb(i) {
//     console.log(params);  }
// }

// let k = aaa(5)

// k(5)

// let a = NaN

// console.log(typeof a);
let s = "-47";
// for (let i = 0; i < s.length; i++) {
//   if (s[i] === "0" && s[i + 1] === " ") {
//     return 0;
//   } else {
//     continue;
//   }
// }
// s = s.replace(/ /g, "");
// s = s.split("");
// if (+s[0]) {
//   s=s.join("")
//   console.log(Number.parseInt(s));
// }else{
//   if (s[0]==="-" || s[0]==="+") {
//     console.log(Number.parseInt(s));
//   }else{
//     console.log(0);
//   }

// }
// let k = [];

// for (let i = 0; i < s.length; i++) {
//   if (
//     (s[i] === "+" && +s[i + 1]) ||
//     (s[i] === "+" && s[i + 1] === "0") ||
//     (s[i] === "-" && +s[i + 1]) ||
//     (s[i] === "-" && s[i + 1] === "0") ||
//     +s[i] ||
//     (+s[i + 1] && s[i] === ".") ||
//     s[i] === "0"
//   ) {
//     k.push(s[i]);
//   } else {
//     break;
//   }
// }

// let t = k.join("");
// t = t
//   .split(/([\+\-\*\/])/)
//   .map((a) => parseFloat(a) || a)
//   .join("");
// let m = 0;
// while (k[m] === "0") {
//   m++;
//   if (k[m] === "-" || k[m] === "-") {
//     return 0;
//   }
// }

// let fin = eval(t);
// if (typeof fin === "number") {
//   if (fin < -2147483648) {
//     return -2147483648;
//   }
//   if (fin >= 2147483648) return 2147483647;
// }
// if (fin <= 2147483648 && fin >= -2147483648) {
//   return fin;
// } else {
//   return 0;
// }
// console.log(Number.parseInt("-002e023ex23"));

// Javascript program to print all permutations of a
// given string.

// function permute(nums) {
//   let result = [];
//   if (nums.length === 0) return [];
//   if (nums.length === 1) return [nums];
//   for (let i = 0; i < nums.length; i++) {
//     const currentNum = nums[i];
//     const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
//     const remainingNumsPermuted = permute(remainingNums);
//     for (let j = 0; j < remainingNumsPermuted.length; j++) {
//       const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
//       result.push(permutedArray);
//     }
//   }
//   return result;
// }
// let nums = [1, 2, 3, 4];
// console.log(permute(nums));

// var permute = function (nums) {
//   const result = [];
//   const dfs = (i, nums) => {
//     if (i === nums.length) {
//       result.push(nums.slice());
//       // return result;
//     }
//     for (let j = i; j < nums.length; j++) {

//       let tmp = nums[i]
//       nums[i] = nums[j]
//       nums[j] = tmp
//       dfs(i + 1, nums)
//       tmp = nums[i]
//       nums[i] = nums[j]
//       nums[j] = tmp
//     }
//   };
//   dfs(0, nums);
//   return result;
// };
// let nums = [1, 2, 3];
// console.log(permute(nums));
// for (var i = 0; i < 3; i++) {

//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
//  }

// let strs = ["flower", "flow", "flight"];
// if (strs.length === 0) return "";
// let prefix = strs[0];
// for (let i = 1; i < strs.length; i++) {
//   while (strs[i].indexOf(prefix) != 0) {
//     prefix = prefix.substring(0, prefix.length - 1);    
//   }
//   if (prefix.length === 0){
//     return "";
//   } else{
//     return prefix
//   }
// }
// console.log(prefix);

let strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++)
      while (strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.substring(0, prefix.length - 1);
          if (prefix.length===0) return "";
      }        
  return prefix;
  };
console.log(longestCommonPrefix(strs));

