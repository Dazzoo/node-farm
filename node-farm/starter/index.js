const fs = require("fs")
const http = require("http")
const url = require("url")

//////////////////////////////////
// FILES

// //Blocking synchrous way
// const textIn = fs.readFileSync('./txt/input.txt')

// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${new Date().now}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written')
 
// Non-blocking async
// fs.readFile('./txt/start.txt', { encoding : 'utf8' }, (err, data1) => {
//     if (err) { return console.log('ERROR') }
//     fs.readFile(`./txt/${data1}.txt`, { encoding : 'utf8' }, (err, data2) => {
//         console.log(data2)
//         fs.readFile(`./txt/append.txt`, { encoding : 'utf8' }, (err, data3) => {
//             fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, { encoding : 'utf8' }, (err) => {
//                 console.log('Your file has been written')
//             })
//         })
//     })
// })
// console.log('We will read this')

//////////////////////////////////
// SERVER

let devDataJSON = fs.readFileSync(`${__dirname}/dev-data/data.json`, { encoding : 'utf8' })

const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end('this it the overview')
    } else if (pathName === '/product') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end('this it the product')
    } else if (pathName === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(devDataJSON)                 
        
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end('<h1>Page not found 404</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
})