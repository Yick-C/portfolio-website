
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