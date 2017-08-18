  function Sendperevod(kn, gl, st, tolk){ //перевод
      document.getElementById('stih').style.opacity="0.5";
      document.getElementById('stih2').style.opacity="0.5";
      document.getElementById('spis_per2').style.opacity="0.5";
      document.getElementById('tolk_aj').style.opacity="0.5";

        
var perevod=document.getElementById("perevod").value;
  $.ajax({
 type: "GET",
 url: "perevod_aj.php",
 data: "perevod="+perevod+"&kn=" + kn + "&gl=" + gl + "&st=" + st + "&tolk=" + tolk,
  success: function(response){
      document.getElementById('stih').style.opacity="1";
      document.getElementById('stih2').style.opacity="1";
      document.getElementById('spis_per2').style.opacity="1";
      document.getElementById('tolk_aj').style.opacity="1";

        perevod_array = response.split('#%#');
 $('#stih').html(perevod_array[0]);
 $('#stih2').html(perevod_array[1]);
 $('#spis_per2').html(perevod_array[3]);
 $('#tolk_aj').html(perevod_array[4]);
 $('#parallel').html(perevod_array[5]);

 }
   });
  };
  function Sendperevod2(kn, gl, st, tolk){
      document.getElementById('stih').style.opacity="0.5";
      document.getElementById('stih2').style.opacity="0.5";
      document.getElementById('spis_per').style.opacity="0.5";
      document.getElementById('tolk_aj').style.opacity="0.5";
var perevod=document.getElementById("perevod2").value;
  $.ajax({
 type: "GET",
 url: "perevod_aj.php",
 data: "perevod="+perevod+"&kn=" + kn + "&gl=" + gl + "&st=" + st + "&tolk=" + tolk,
 success: function(response){
      document.getElementById('stih').style.opacity="1";
      document.getElementById('stih2').style.opacity="1";
      document.getElementById('spis_per').style.opacity="1";
      document.getElementById('tolk_aj').style.opacity="1";
        perevod_array = response.split('#%#');

 $('#stih').html(perevod_array[0]);
 $('#stih2').html(perevod_array[1]);
 $('#spis_per').html(perevod_array[2]);
 $('#tolk_aj').html(perevod_array[4]);
 $('#parallel').html(perevod_array[5]);

 }
   });
  };
