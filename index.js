const fs = require('fs');
// const {startServer} = require('./servers/expressServer');
const {startServer} = require('./servers/turboServer');
// const {startServer} = require('./servers/tcpServer');
const port = +process.argv[2] || 3000

const cardsData = fs.readFileSync('./cards.json');
const cards = JSON.parse(cardsData);

const client = require('redis').createClient()
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('ready', () => startServer(client, port, cards))
client.connect();



// const Redis = require("ioredis");
// const client = new Redis();
// client.on('connect', () => startServer(client, port, cards))
// client.on('error', (err) => console.log('Redis Client Error', err));
