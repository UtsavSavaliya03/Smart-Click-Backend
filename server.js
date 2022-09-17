const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const App = require('./App');

const server = http.createServer(App);

server.listen(process.env.PORT);