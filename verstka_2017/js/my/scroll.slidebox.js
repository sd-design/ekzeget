$(function() {
// ������� ������� ��������� � ���� ��������
$(window).scroll(function(){
 
// distanceTop = (������: �� ������ �������� �� ��-�� #last) -
//- ������ ���� ��������
var distanceTop = $('#last').offset().top;
// ���� �������� ��������� ������ distanceTop 
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
//��������� function() � �������� click ��� ��-�� .close 
  $('#close').click(function () {
 document.getElementById('slidebox').style.display='none';
     document.getElementById('slidebox3').style.boxShadow ='0 3px 3px #aaa';
 document.cookie = "slidebox=close; expires=Sun, 20 Dec 9998 06:10:00 GMT"; }); 
     $('#open').click(function () {
 document.getElementById('slidebox').style.display='block';
 document.getElementById('slidebox3').style.boxShadow ='none';
 document.cookie = "slidebox=open"; });
    });
