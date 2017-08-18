function TolkSsilAjax(kn, gl, st, tolk){ // на стих ссылаются
 $.ajax({
  type: "POST",
  url: "tolk_ssil_ajax.php",
  data: "kn=" + kn + "&gl=" + gl + "&st=" + st + "&tolk=" + tolk,
  success: function(response){
  $('#ssil_aj').html(response);
 }
 });
};
