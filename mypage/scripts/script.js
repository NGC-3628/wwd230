function toggledMenu() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
  }
  
  const hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", toggledMenu);
  