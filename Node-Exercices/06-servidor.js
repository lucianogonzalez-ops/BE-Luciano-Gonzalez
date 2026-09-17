const { createServer } = require('node:http');
const hostname = 'localhost';
const port = 3000;
const server = createServer((request, response) => {
    response.statusCode = 200;
    
    response.setHeader('Content-Type', 'text/plain');
    
    response.end('Hola desde Node.JS!!!!!!');
});

server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}/`);
});