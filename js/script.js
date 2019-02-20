$( document ).ready(function() {
  // serch open
  $('.nav-search-button').click(function (e) { 
    e.preventDefault();
    $('.search-overlay').toggleClass('search-open');
  });
  // search close
  $('.search-overlay-close-button').click(function (e) { 
    e.preventDefault();
    $('.search-overlay').removeClass('search-open');
  });
  // side menu open
  $('.menu-toggler').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('menu-open');
  });
  // menu close
  $('.close-menu').click(function (e) { 
    e.preventDefault();
    $('body').removeClass('menu-open');
  });
});