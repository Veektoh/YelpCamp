function toggleMenu () {
    const menu = document.querySelector("#nav-wrapper");
    menu.classList.toggle("show-menu");
}
function btnToggle () {
    const menuBtn = document.querySelector(".menu-bar-btn");
    menuBtn.addEventListener("click", toggleMenu);
}
btnToggle ()
