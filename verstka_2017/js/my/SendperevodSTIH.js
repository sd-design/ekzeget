  function SendperevodSTIH(kn, gl, st){ //перевод
      document.getElementById('stih').style.opacity="0.5";
        
var perevod=document.getElementById("perevod").value;
  $.ajax({
 type: "GET",
 url: "perevod_stih_aj.php",
 data: "perevod="+perevod+"&kn=" + kn + "&gl=" + gl + "&st=" + st,
  success: function(response){
      document.getElementById('stih').style.opacity="1";
     $('#parallel').html(response);
  }
   });
  };
