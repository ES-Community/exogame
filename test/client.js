const net = require('net');

const client = net.connect({port: 1337}, () => {
    console.log('connected to server!');
});
