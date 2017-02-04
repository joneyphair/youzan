const http = require('http');
const server = http.createServer(function(request, response) {});





module.exports = function(){



server.listen(1740, function() {
    console.log((new Date()) + ' Server is listening on port 1740');
});


const WebSocketServer = require('websocket').server;

const wsServer = new WebSocketServer({
    httpServer: server
});

var connection = null;



wsServer.on('request', function(req){

    connection = req.accept('echo-protocol', req.origin);

	connection.on('message', function(message) {
		var msgString = message.utf8Data;
		connection.sendUTF(msgString);
	});

	connection.on('close', function(reasonCode, description) {
   	    console.log(connection.remoteAddress + ' disconnected.');
	});


});



}



