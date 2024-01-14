function setSiteHeight() {
  const root = document.documentElement;

  root.style.setProperty("--site-height", `${window.innerHeight}px`);
}

setSiteHeight();
window.addEventListener("resize", setSiteHeight);
