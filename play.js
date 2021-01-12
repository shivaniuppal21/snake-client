/*const net = require('net');

/**
 * Establishes connection with the game server
 */
/*const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

console.log('Connecting ...');
connect();
*/


const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function(){
    const stdin = process.stdin;
    stdin.setRawMode(true)
    stdin.setEncoding("utf-8");
    stdin.resume();
    return stdin
}