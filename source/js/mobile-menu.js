var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

//navMain.classList.remove('site-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__menu-open')) {
    navMain.classList.remove('page-header__menu-open');
  } else {
    navMain.classList.add('page-header__menu-open');
  }
});
