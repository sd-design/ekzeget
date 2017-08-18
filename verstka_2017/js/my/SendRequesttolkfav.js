function SendRequesttolkfav(id_tolk, kn, gl, st, tolk, name_user){ // отправка избранного толкования
 document.getElementById('fav_tolk').style.opacity="0.3";
 document.getElementById('fav_tolk1').style.opacity="0.3";
 $.ajax({
  type: "POST",
  url: "tolk_fav_aj.php",
  data: "id_tolk=" + id_tolk + "&kn=" + kn + "&gl=" + gl + "&st=" + st + "&tolk=" + tolk + "&name_user=" + name_user,
  success: function(response){
   document.getElementById('fav_tolk').style.opacity="1";
   document.getElementById('fav_tolk1').style.opacity="1";
  $('#fav_tolk').html(response);
  $('#fav_tolk1').html(response);
 }
 });
};
