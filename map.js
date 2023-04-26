//map implemention

Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }
  let context = this;
  let obj = Object(this);
  if (arguments.length > 1) {
    context = thisArg;
  }
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  let len = obj.length;
  let i = 0;
  let newArray = [];
  while (i < len) {
    if (i in obj) {
      newArray[i] = callback.call(context, this[i], i, obj);
    }
    i++;
  }
  return newArray
};

//Example for array

const sample = [1, 2, 3];
const mapResult = sample.myMap(function (val) {
  return val * 2;
});

console.log(mapResult);

//Example for object

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.myMap(({ key, value }) => ({ [key+1]: value+1 }));
console.log(reformattedArray);