function SendRequestzak(pr_zak, tolk, name_user){
   document.getElementById('zak').style.opacity="0";
   document.getElementById('zak1').style.opacity="0";
               document.getElementById('loading_zak').style.opacity="1";
               document.getElementById('loading_zak1').style.opacity="1";
    $.ajax({
        type: "GET",
        url: "zak_ja.php",
  data: "color="+$('#color').val()+"&pr_zak=" + pr_zak + "&tolk=" + tolk + "&name_user=" + name_user,
        success: function(response){
		data_array = response.split('#%#');
               document.getElementById('loading_zak').style.opacity="0";
               document.getElementById('loading_zak1').style.opacity="0";
               document.getElementById('zak').style.opacity="1";
               document.getElementById('zak1').style.opacity="1";
  $('#zakladki').html(data_array[0]);
  $('#zak').html(data_array[1]);
  $('#zak1').html(data_array[2]);
        }
    });
};
function SendRequestzakdel(pr_zak, tolk, name_user){
 document.getElementById('zak').style.opacity="0";
 document.getElementById('zak1').style.opacity="0";
   document.getElementById('loading_zak').style.opacity="1";
   document.getElementById('loading_zak1').style.opacity="1";

 $.ajax({
  type: "GET",
  url: "zak_ja.php",
  data: "del="+$('#color').val()+"&pr_zak=" + pr_zak + "&tolk=" + tolk + "&name_user=" + name_user,
  success: function(response){
    datadel_array = response.split('#%#');
   document.getElementById('loading_zak').style.opacity="0";
   document.getElementById('loading_zak1').style.opacity="0";
   document.getElementById('zak').style.opacity="1";
   document.getElementById('zak1').style.opacity="1";
 $('#zakladki').html(datadel_array[0]);
 $('#zak').html(datadel_array[1]);
 $('#zak1').html(datadel_array[2]);
  }
 });
};
