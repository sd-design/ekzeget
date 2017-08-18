// изменение расположения текста главы
  function Sendmarkup(kn, gl, marker_st, name_user, tolk){
  document.getElementById('osn_text').style.opacity="0.5";
  $.ajax({
 type: "GET",
 url: "markup_aj.php",
 data: "kn=" + kn + "&gl=" + gl + "&marker_st=" + marker_st + "&name_user=" + name_user + "&tolk=" + tolk,

 success: function(response){
  document.getElementById('osn_text').style.opacity="1";
 $('#osn_text').html(response);
 }   
 });
  };
