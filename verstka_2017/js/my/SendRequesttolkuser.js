function SendRequesttolkuser(id){ // новое или отредактированное толкование
 document.getElementById('img_war').style.opacity="0.5";
 document.getElementById('img_war1').style.opacity="0.5";
 $.ajax({
  type: "GET",
  url: "tolk_aj.php",
  data: "id=" + id,
  success: function(response){
  $('.rep_war').html(response);
  }
 });
};

function SendRequesttolkedit(id){
 document.getElementById('edit_war').style.opacity="0.5";
 document.getElementById('edit_war1').style.opacity="0.5";
 $.ajax({
  type: "GET",
  url: "tolk_edit_aj.php",
  data: "id=" + id,
  success: function(response){
  $('.rep_ed').html(response);
  }
 });
};
