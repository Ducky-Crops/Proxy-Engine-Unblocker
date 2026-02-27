export function Cloak() {
  const win = window.open();
  const url = "http://localhost:5173";
  if (win && url) {
    const iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.src = url;
    win.document.body.appendChild(iframe);
  }
}   