// Função para alternar o modo light/dark
function toggleMode() {
  const htmlElement = document.documentElement;
  const profileImage = document.querySelector("#profile img");

  // Verifica a classe "light" no elemento HTML
  if (htmlElement.classList.contains("light")) {
    // Se a classe "light" estiver presente, remove-a e muda a imagem
    htmlElement.classList.remove("light");
    profileImage.src = "assets/Imagem-Dark.png";
  } else {
    // Caso contrário, adiciona a classe "light" e muda a imagem de volta
    htmlElement.classList.add("light");
    profileImage.src = "assets/Imagem-Light.png";
  }
}

// Função para responder ao clique no botão de alternância
function togglemode() {
  toggleMode();
}

// Verifique a preferência do sistema para definir o modo inicial
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggleMode();
}
