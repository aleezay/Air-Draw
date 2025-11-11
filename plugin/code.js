// Air-Draw Figma Plugin — receives gestures and edits the selection
figma.showUI(__html__, { visible: false });

function rotateSelection(radians) {
  const deg = (radians * 180) / Math.PI;
  for (const n of figma.currentPage.selection) if ("rotation" in n) n.rotation = deg;
}

function scaleSelection(factor) {
  for (const n of figma.currentPage.selection) if ("resize" in n) {
    const w = Math.max(1, n.width * Math.max(0.05, factor));
    const h = Math.max(1, n.height * Math.max(0.05, factor));
    n.resize(w, h);
  }
}

figma.ui.onmessage = (msg) => {
  console.log("code.js got:", msg);
  switch (msg.type) {
    case "orbit":     rotateSelection(msg.angle); break;
    case "scaleSnap": scaleSelection(msg.value || 1); break;
    default: break;
  }
};
