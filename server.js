// server.js — signaling + static hosting
const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// serve ./public
app.use('/', express.static(path.join(__dirname, 'public')));

// relay WebRTC signaling messages
io.on('connection', (sock) => {
  sock.on('signal', (msg) => sock.broadcast.emit('signal', msg));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`AirCanvas signaling on http://localhost:${PORT}`));
