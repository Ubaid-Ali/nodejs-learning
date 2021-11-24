
var msg = "This is Message!";

console.log(`msg is`, msg) // Working

// console.log(global.msg); // Undefined

// console.log("window.msg", window.msg);
// ReferenceError: window is not defined

// global.console.log(`global.console`, msg) // Working

// Working
// global.setTimeout(() => {
//     console.log(`TimeOut Working`)
// }, 1);