const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req, res, next) => {
    res.end('Will add dishes!' + req.body.name);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported');
});

app.delete('/dishes', (req, res, next) => {
    res.end('Deleting dishes');
});

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send details of dish ' + req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported');
});

app.put('/dishes/:dishId', (req, res, next) => {
    req.statusCode = 403;
    res.end('Will update dish ' + req.params.dishId);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish with ID ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('This is an express server');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Listening at http://${hostname}:${port}`);
});