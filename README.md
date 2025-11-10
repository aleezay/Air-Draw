# Air-Draw

Experimental hand-gesture → Figma control using MediaPipe + WebRTC + Figma Plugin.

## Stack
- Node.js + Express + Socket.io (signaling)
- MediaPipe Tasks Vision (hand tracking)
- WebRTC DataChannel (gesture transport)
- Figma plugin (manifest-based)

## Dev Setup
```bash
npm install
node server.js
# open http://localhost:8080 in your browser
# in Figma Desktop: Plugins → Development → Create from manifest → plugin/manifest.json
