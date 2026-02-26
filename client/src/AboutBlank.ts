export function Cloak() {
  const win = window.open();
  const url = "https://mj89sp3sau2k7lj1eg3k40hkeppguj6j-a-sites-opensocial.googleusercontent.com/...";
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