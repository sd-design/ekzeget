// перевод главы
  function SendperevodGlavaTolk(kn, gl, marker_st, name_user, tolk){
      document.getElementById('osn_text').style.opacity="0.5";
  document.getElementById('para_aj').style.opacity="0.5";

var perevod=document.getElementById("perevod").value;
  $.ajax({
 type: "GET",
 url: "glava_tolk_aj.php",
 data: "perevod="+perevod+"&kn=" + kn + "&gl=" + gl + "&marker_st=" + marker_st + "&name_user=" + name_user + "&tolk=" + tolk,
  success: function(response){
      document.getElementById('osn_text').style.opacity="1";
  document.getElementById('para_aj').style.opacity="1";
        perevod_array = response.split('#%#');
 $('#osn_text').html(perevod_array[0]);
 $('#para_aj').html(perevod_array[1]);
 $('#audiobox').html(perevod_array[2]);

 }


 });
  };

