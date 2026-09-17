const { createServer } = require('node:http');
const hostname = 'localhost';
const port = 3000;
const server = createServer((request, response) => {
    response.statusCode = 200;
    const url = request.url;
    response.setHeader('Content-Type', 'text/plain');
    
    if (url === '/') {
        response.write('Inicio');
        response.end();
    }
    else if (url === '/alumnos') {
        response.write('Carlos, Maria, Juan');
        response.end();
    }
    else {
        response.write('No encontrado');
        response.end();
    }});

server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}/`);
});