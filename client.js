const net = require('net');

const connect = function() {
    const conn = net.createConnection({ 
      host: 'localhost',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    conn.on('connect', () => {
      console.log('connected Successfully to game');
      conn.write(`Name : Player1`)
    });
    conn.on('data', (data) => {
        console.log('Server says: ', data);
      });
      return conn;
    }    

 
  module.exports = {connect};
