const net = require('net');

const client = net.connect(8080, 'localhost',function () {
    console.log('Client Connected');
    client.write('Utkarsh Malav\r\n');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function () {
    console.log('Server Disconnected');
});

client.on('error',function (err){
    console.error('connection error: ',err.message);
});