function openNav() {
    const [nav] = document.getElementsByTagName("nav");
    const button = document.getElementById("show-nav");
    if (nav.className) {
        nav.setAttribute("class", "");
        button.innerHTML = 'Menu <img src=\"images/icons-and-logos/close.png\" alt=\"Close Icon\">';
    } else {
        nav.setAttribute("class", "hidden");
        button.innerHTML = 'Menu <img src=\"images/icons-and-logos/open.png\" alt=\"Menu Icon\">';
    }
}