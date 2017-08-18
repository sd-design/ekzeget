// ЗАМЕТКА 
function SendRequestzametka(kn, gl, st, name_user){
   document.getElementById('loading_z').style.opacity="1";
 $.ajax({
  type: "POST",
  url: "zam_aj.php",
  data: "zamet="+$('#zamet').val()+"&kn=" + kn + "&gl=" + gl + "&st=" + st + "&user=" + name_user,
  success: function(response){
   document.getElementById('loading_z').style.opacity="0";
 $('#not').html(response);
 $('#not2').html(response);
 $('#status_zam').html('Заметка сохранена').fadeIn(200, function()
   {
 var save = $(this);
 setTimeout(function()
 {
 save.fadeOut(500);
 }, 4000);
   });
}
 });
};
