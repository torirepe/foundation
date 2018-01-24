$(document).ready(function(){
  $('#opening').attr('data-o','1');
});
$('[data-ob="4"]').on('transitionend', function() {
  $('main').addClass('active');
  $('[data-f="container"]').fullpage({
    scrollOverflow: true,
    sectionSelector: '[data-f="section"]'
  });
  setTimeout(function() { $.fn.fullpage.reBuild(); }, 1000);
});
