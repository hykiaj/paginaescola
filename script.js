window.addEventListener("load", () => {
  const banner = document.querySelector(".banner1 img");
  banner.style.opacity = "0";
  banner.style.transform = "scale(1.1)";
  banner.style.transition = "all 1.5s ease";
  setTimeout(() => {
    banner.style.opacity = "1";
    banner.style.transform = "scale(1)";
  }, 300);
});
