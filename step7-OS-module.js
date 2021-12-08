const os = require("os")

let totalMemory = os.totalmem()
console.log("totalMemory", totalMemory)

let freeMemory = os.freemem()
console.log(`freeMomory ${freeMemory}`)

let currentUser = os.userInfo()
console.log(`currentUser`, currentUser)

let version = os.version()
console.log(`version ${version}`);

let osType = os.type()
console.log(`osType ${osType}`);

let hostName = os.hostname()
console.log(`hostName ${hostName}`);