// Animação do banner com efeito de zoom + fade-in
window.addEventListener("load", () => {
  const banner = document.querySelector(".banner1 img");

  // Estado inicial
  banner.style.opacity = "0";
  banner.style.transform = "scale(1.1)";
  banner.style.transition = "all 1.5s ease";

  // Executa o efeito após um pequeno atraso
  setTimeout(() => {
    banner.style.opacity = "1";
    banner.style.transform = "scale(1)";
  }, 300);
});

