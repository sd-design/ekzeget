//открытие окна сортировки экзегетов
$(document).ready(function () {
  $('a#toggler_sort').click(function (e) {
  $(this).toggleClass('active');
  $('#answer_sort').toggle();
 
  e.stopPropagation();
  });
 
  $('#answer_sort').click(function (e) {
  e.stopPropagation();
  });
 
  $('body').click(function () {
  var link = $('a#toggler_sort');
  if (link.hasClass('active')) {
   link.click();
  }
  });

 });
