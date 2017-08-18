  function SendperevodEDIT(kn, gl, st, tolk){ //перевод
      document.getElementById('stih').style.opacity="0.5";

        
var perevod=document.getElementById("perevod").value;
  $.ajax({
 type: "GET",
 url: "perevod_aj_edit.php",
 data: "perevod="+perevod+"&kn=" + kn + "&gl=" + gl + "&st=" + st + "&tolk=" + tolk,
  success: function(response){
      document.getElementById('stih').style.opacity="1";
          $('#stih').html(response);
 }
   });
  };
