////for of task


// first example

const iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return {
            value: i++,
            done: false,
          };          
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

for (let k of iterator) {
  console.log(k);  
}

//second example

function* iter(n=10) {
  for (let i = 0; i < n; i++) {
    yield i    
  }
}

for (let k of iter()) {
  console.log(k);  
}