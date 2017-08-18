 //Новое окно для исследования манускрипта
 var popupURL = "";
 
 function ShowPopup()
 {
 var lefto = screen.availWidth/2-500;

 var righto = screen.availHeight/2-250;
 var popup = window.open(popupURL, null, 'toolbar=0, location=0, directories=0, status=0, menubar=0, scrollbars=yes, resizable=yes, width=1000, height=500, left=' + lefto + ', top='+righto+'');
 }