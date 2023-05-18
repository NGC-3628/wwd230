function toggledMenu(){
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("menu").classList.toggle("");
}

const x = document.getElementById("hamburger")
x.onclick = toggledMenu;


