// открытие окна заметки
$(document).ready(function () {
  $('a.toggler_z').click(function (e) {
  $(this).toggleClass('active');
  $('#answer_z').toggle();
 
  e.stopPropagation();
  }); 
    
    $('.closed').click(function (e) {
  $(this).toggleClass('active');
  $('#answer_z').toggle();
 
  e.stopPropagation();
  });
 
  
 });
