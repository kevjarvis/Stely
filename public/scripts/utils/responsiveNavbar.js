import {toggleAttr} from "./toggleAttr.js";

/*NAVBAR*/
let toggle = document.getElementById("toggle");
let menu = document.getElementById("navmenu");
let opacity_blur = document.getElementById("glass-background");
let body = document.getElementsByTagName('body')[0];

const toggleNavbar = () => {
  toggleAttr(
    [menu, 'class', 'nav-menu--collapsed'],
    [opacity_blur, 'class', 'opacity-blur'],
    [body, 'class', 'no-scroll'],
    [toggle, 'aria-expanded']
  )
}

toggle.addEventListener('click', function () {
  toggleNavbar()
})

opacity_blur.addEventListener('click', function () {
  toggleNavbar()
})