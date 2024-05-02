const http = require("http");
const host = 'http://localhost';
const port = 3000;
const stats = require('./PcRamUsage')

http.createServer((req,res)=> {
    
    let url = req.url

    if (url === '/stats') {
    
    res.end(JSON.stringify(stats, null, 2));
    } else{
    res.end('<h1> Seja bem vinda</h1>');

    }
}).listen(3000,()=> console.log(`server is running in  ${host}:${port}`));





