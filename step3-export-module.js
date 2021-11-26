
const url = "https://mywebsite.com/logger"

function myFunction(message) {
    // Send http request
    console.log(`message: `, message)
}

console.log(`Console Only`)

// myFunction("This is simple Message!")

module.exports = myFunction; // export Entire Module

// module.exports.url = url         //true
// module.exports.endpoint = url    //true
