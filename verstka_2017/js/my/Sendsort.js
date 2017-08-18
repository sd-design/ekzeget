 // сортирвка списка экзегетов

 function Sendsort(kn, gl, st, marker_st, tolk, name_user){
 document.getElementById('blok_open1').style.opacity="0.5";
 document.getElementById('answer_sort').style.opacity="0.5";
var sorty=document.getElementById("sorty").value;
  $.ajax({
 type: "GET",
 url: "sorty_aj.php",
 data: "sorty=" + sorty + "&kn=" + kn + "&gl=" + gl + "&st=" + st+ "&marker_st=" + marker_st + "&tolk=" + tolk + "&name_user=" + name_user,
  success: function(response){
     document.getElementById('answer_sort').style.opacity="1";
     document.getElementById('blok_open1').style.opacity="1";
 $('#blok_open1').html(response);
 }
   });
  var link = $('a#toggler_sort');
  if (link.hasClass('active')) {
   link.click();
  } };
