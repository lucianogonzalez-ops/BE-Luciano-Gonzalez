const fs = require('fs');
const lector= fs.readFileSync("mensaje.txt", "utf8")
console.log(lector)
console.log(lector.length)
