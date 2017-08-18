  function update_spisok(page){ // формируем список глав выбранной книги
 document.getElementById('answer_m').style.opacity="0.5";
var categori=document.getElementById("categori").value;
  $.ajax({
 type: "GET",
 url: "glav_st_aj.php",
 data: "kn="+categori + "&page=" + page,
  success: function(html){
     document.getElementById('answer_m').style.opacity="1";

 $("#tovar").html(html);
 }
   });
   return false;
  };
