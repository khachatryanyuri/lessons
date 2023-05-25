////////////////Polyfilling////////////

///////////////SIMD(Single instruction, multiple data )//////////////////

var v1 = SIMD.float32x4(3.14159, 21.0, 32.3, 55.55);
var v2 = SIMD.float32x4(2.1, 3.2, 4.3, 5.4);

var v3 = SIMD.int32x4(10, 101, 1001, 10001);
var v4 = SIMD.int32x4(10, 20, 30, 40);

SIMD.float32x4.mul(v1, v2); // [ 6.597339, 67.2, 138.89, 299.97 ]
SIMD.int32x4.add(v3, v4); // [ 20, 121, 1031, 10041 ]

//////////////////////////asm.js//////////////////////////////

function fooASM(stdlib, foreign, heap) {
  "use asm";

  var arr = new stdlib.Int32Array(heap);

  function foo(x, y) {
    x = x | 0;
    y = y | 0;

    var i = 0;
    var p = 0;
    var sum = 0;
    var count = ((y | 0) - (x | 0)) | 0;

    // calculate all the inner adjacent multiplications
    for (i = x | 0; (i | 0) < (y | 0); p = (p + 8) | 0, i = (i + 1) | 0) {
      // store result
      arr[p >> 3] = (i * (i + 1)) | 0;
    }

    // calculate average of all intermediate values
    for (
      i = 0, p = 0;
      (i | 0) < (count | 0);
      p = (p + 8) | 0, i = (i + 1) | 0
    ) {
      sum = (sum + arr[p >> 3]) | 0;
    }

    return +(sum / count);
  }

  return {
    foo: foo,
  };
}

var heap = new ArrayBuffer(0x1000);
var foo = fooASM(window, null, heap).foo;

foo(10, 20); // 233
