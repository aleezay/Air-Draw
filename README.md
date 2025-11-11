# ✋🎨 Air-Draw

Experimental hand-gesture → Figma control using MediaPipe + WebRTC + Figma Plugin.

Air-Draw lets you control Figma layers with your hands using real-time computer-vision gestures.  
It runs completely locally — no cloud, no data upload.

## ⚙️ Stack
- Node.js + Express + Socket.io (signaling)
- MediaPipe Tasks Vision (hand tracking)
- WebRTC DataChannel (gesture transport)
- Figma plugin (manifest-based)

## 💻 Dev Setup
```bash
npm install
node server.js
# open http://localhost:8080 in your browser
# in Figma Desktop: Plugins → Development → Create from manifest → plugin/manifest.json

---

## 🧠 What It Does

| Gesture | Figma Action | HUD Label |
|----------|---------------|-----------|
| 🖐 Both hands up | Calibrate tracking | `Calibrated: yes` |
| 🤏 Pinch + rotate wrist | Rotate selection | `orbit` |
| ✋ Move both hands apart / together | Scale selection | `scaleSnap` |
| 👋 Move one hand quickly off-screen | Reset / pause | — |

> 💡 Works only when a layer is selected in Figma.


🎉 You’re ready to draw with your hands in the air!

---
