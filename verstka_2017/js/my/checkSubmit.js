function checkSubmit ( thisForm ) { // проверка зполненности формы
if ( thisForm.name_tolk.value =="Выберите имя"){ 
alert('Пожалуйста, введите имя толковника!'); 
return false;
}
if ( thisForm.comment_tolk.value ==""){
alert('Пожалуйста, введите текст толкования!'); 
return false;
}
return true;
}
