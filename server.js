// server.js — signaling + static hosting
const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Serve ./public
app.use('/', express.static(path.join(__dirname, 'public')));

// Relay WebRTC signaling + helpful logs
io.on('connection', (sock) => {
  console.log('[io] client connected', sock.id);
  sock.on('signal', (msg) => sock.broadcast.emit('signal', msg));
  sock.on('disconnect', () => console.log('[io] disconnected', sock.id));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`AirCanvas signaling on http://localhost:${PORT}`));
