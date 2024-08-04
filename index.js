
/**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
$(function () {
  $(document).scroll(function () {
    var $nav = $("#header");
    $nav.toggleClass('header-scrolled', $(this).scrollTop() > $nav.height());
  });
});

function openNavbar(menu) {
  console.log("CLICKED");
  menu.classList.toggle("open");
}

const toggleIcon = document.getElementById('toggle-icon')
const heroImage = document.getElementById('heroImage');
const aboutImage = document.getElementById('aboutImage');
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Dark Mode Styles
function darkMode() {
    toggleIcon.children[0].classList.remove('fa-sun');
    toggleIcon.children[0].classList.add('fa-moon');
    heroImage.src = './assets/images/undraw_welcome_dark.svg'
    aboutImage.src = './assets/images/undraw_dream_world_light.svg'
}

function lightMode() {
    toggleIcon.children[0].classList.remove('fa-moon');
    toggleIcon.children[0].classList.add('fa-sun');
    heroImage.src = './assets/images/undraw_welcome_light.svg'
    aboutImage.src = './assets/images/undraw_dream_world_dark.svg'
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

AOS.init();