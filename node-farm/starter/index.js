const fs = require("fs")

const textIn = fs.readFileSync('./txt/input.txt')

const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${new Date().now}`
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File written')