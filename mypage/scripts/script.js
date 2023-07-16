
function toggledMenu() {
    document.querySelector("nav ul#menu").classList.toggle("open");
}

const x = document.getElementById("hamburger");
x.onclick = toggledMenu;
