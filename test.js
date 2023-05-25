// function replaceElements(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let max_value = -1;
//     for(let j = i + 1; j < arr.length; j++) {
//       max_value = Math.max(max_value, arr[j]);
//     }
//     arr[i] = max_value;
//   }
//   return arr
// }

// let arr = [16, 17, 4, 3, 5, 2];
// console.log(nextGreatest(arr));

// let arr = [40,10,20,30];
// let output = [];
// let k = [...arr].sort((a, b) => a - b);

// let obj = {};
// let rank = 1;

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[k[i]]) {
//     obj[k[i]] = rank++;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   output.push(obj[arr[i]]);
// }
// console.log(output);

// let s = "  hello world  ";

// let splits = s.split(" ");
// //console.log(splits);
// let reverse = [];

// for (let i = splits.length - 1; i >= 0; i--) {
//   if (splits[i]!=='') {
//     reverse.push(splits[i]);
//   }  
// }
// //console.log(reverse);
// s = reverse.join(" ");
// //console.log(s);;


