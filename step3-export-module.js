
// create a module

const url = "https://mywebsite.com/logger"

function myFunction(message) {
    // Send http request
    console.log(`message: `, message)
}

// myFunction("This is simple Message!")

module.exports = myFunction // export Function
// myFunction [Function: myFunction]

// module.exports.obj = myFunction; // export Obj  ect
// myFunction { myFunction: [Function: myFunction] }

// module.exports.url = url         //true
// module.exports.endpoint = url    //true
