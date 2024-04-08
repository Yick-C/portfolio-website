$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

/**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
let selectHeader = select('#header')
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    }
  }
  window.addEventListener('load', headerScrolled)
  onscroll(document, headerScrolled)
}

function openNavbar(menu) {
  console.log("CLICKED");
  menu.classList.toggle("open");
}