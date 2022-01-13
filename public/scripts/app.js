let toggle = document.getElementById("toggle");
let menu = document.getElementById("navmenu");
let opacity_blur = document.getElementById("glass-background");
let body = document.getElementsByTagName('body')[0];

let menu_items = document.getElementsByClassName('navlink')

function toggle_nav() {
  if (menu.classList.contains('nav-menu--collapsed')) {
    menu.classList.remove('nav-menu--collapsed');
    opacity_blur.classList.add('opacity-blur');
    toggle.setAttribute('aria-expanded', 'true')
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
    menu.classList.add('nav-menu--collapsed');
    opacity_blur.classList.remove('opacity-blur');
    toggle.setAttribute('aria-expanded', 'false')
  }
}

toggle.addEventListener('click', function () {
  toggle_nav();
})

opacity_blur.addEventListener('click', function () {
  toggle_nav();
})

for (const menuItemsKey in menu_items) {
  menu_items[menuItemsKey].addEventListener('click', function () {
    toggle_nav();
  })
}




