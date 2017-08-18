$(function() {
// функцию скролла привязать к окну браузера
$(window).scroll(function(){
 
// distanceTop = (высота: от начала страницы до эл-та #last) -
//- высота окна браузера
var distanceTop = $('#last').offset().top;
// если величина прокрутки больше distanceTop 
if ($(window).scrollTop() > distanceTop) {
$('#slidebox').animate({'top':'0px'},100);
$('#slidebox3').animate({'top':'0px'},100);
}
else
{
    $('#slidebox').stop(true).animate({'top':'-500px'},100);
    $('#slidebox3').stop(true).animate({'top':'-500px'},100);
}
});
//связываем function() с событием click для эл-та .close 
  $('#close').click(function () {
 document.getElementById('slidebox').style.display='none';
     document.getElementById('slidebox3').style.boxShadow ='0 3px 3px #aaa';
 document.cookie = "slidebox=close; expires=Sun, 20 Dec 9998 06:10:00 GMT"; }); 
     $('#open').click(function () {
 document.getElementById('slidebox').style.display='block';
 document.getElementById('slidebox3').style.boxShadow ='none';
 document.cookie = "slidebox=open"; });
    });
