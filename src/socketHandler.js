// Require third-party dependencies
const is = require("@sindresorhus/is");

// Declare TOP vars
const socketUsers = new Set();

// Close every sockets properly
process.once("SIGINT", disconnectAllSockets);
process.once("exit", disconnectAllSockets);

/**
 * @func disconnectAllSockets
 * @desc Disconnect all sockets users properly
 * @returns {void}
 */
function disconnectAllSockets() {
  for(const socket of socketUsers) {
    socket.destroy("Server error");
  }
}

/**
 * @func broadcast
 * @desc Broadcast a message to all sockets users!
 * @param {!string} message Message title
 * @param {*} data Data to send (if any)
 * @returns {void}
 */
function broadcast(message, data) {
  if(!is.string(message)) {
    throw new TypeError("message argument should be typeof string");
  }
  for(const socket of socketUsers) {
    socket.emit(message, data);
  }
}

/**
 * @func socketHandler
 * @desc Socket server main (connection) handler
 * @param {net.Socket} socket
 * @returns {void}
 */
function socketHandler(socket) {
    socketUsers.add(socket);
    console.log("New socket connected!");

    socket.on("data", function socketDataHandler(data) {
      console.log("Receiving date from socket");
    });

    // Define socket close/error(s) handler
    function socketClose() {
      socketUsers.delete(socket);
    }
    socket.on("close", socketClose);
    socket.on("error", socketClose);
}
module.exports = socketHandler;
