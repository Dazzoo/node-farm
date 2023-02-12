const fs = require("fs")

// //Blocking synchrous way
// const textIn = fs.readFileSync('./txt/input.txt')

// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${new Date().now}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written')
 
// Non-blocking async
fs.readFile('./txt/start.txt', { encoding : 'utf8' }, (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, { encoding : 'utf8' }, (err, data2) => {
        console.log(data2)
        fs.readFile(`./txt/append.txt`, { encoding : 'utf8' }, (err, data3) => {
            fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, { encoding : 'utf8' }, (err) => {
                console.log('Your file has been written')
            })
        })
    })
})
console.log('We will read this')