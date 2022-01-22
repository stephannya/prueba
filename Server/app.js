const { btoa } = require('buffer');
const http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const { parse } = require('querystring');

const jsonTest = [["Server TCC_pololos","V1.0","GitHub"],{"name1":"Primer nombre"}];

const server = http.createServer((req, res) => {
    if (req.method == 'POST'){ 
        POST_Request(req, res);
    }else if (req.method == 'GET'){ 
        GET_Request(req,res);
    }
});

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

/* Cada peticion de post se ejecutará en un subproceso independiente del principal, para evitar bloqueos */
async function POST_Request(req, res){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
        body = parse(body);
        console.log(body);
    });

    req.on('end', () => {
        if("command" in body && "data" in body){
            if(body.data == "html") body.data = body;

            switch (body.command) {
                case "usuario_sin_registro": usuario_sin_registro(); break;
                default : fail(); break;
            }
        }else{
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Formato de peticion inválido');
        }
    });  

    function usuario_sin_registro() {
        let name = body.data.Name;
        let table = body.data.Table;
        let position = body.data.Position;

        //Se debe hacer en la base de datos
        API_KEY = Buffer.from(name + table +  position).toString('base64');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify({"API_KEY":API_KEY}));
    }

    function fail(){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify({"LOG":"Comando Invalido"}));
    }
}

/* Cada peticion de get se ejecutará en un subproceso independiente del principal, para evitar bloqueos */
async function GET_Request(req, res){
    if(req.url == "//" || req.url == "/test"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify(jsonTest[0]));
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        // res.end(``);
        fs.readFile("index.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
             
            res.end();
        });
    }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

