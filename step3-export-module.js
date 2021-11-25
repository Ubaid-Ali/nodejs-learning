
var url = "https://mywebsite.com/logger"

function logFunction(message) {
    // Send http request
    console.log(`message: `, message)
}

logFunction("This is simple Message!")


module.exports.logFunction = logFunction;

// module.exports.url = url         //true
// module.exports.endpoint = url    //true
