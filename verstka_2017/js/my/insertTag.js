//добавление в редактирование вики-тегов

function insertTag(_obj_name, _tag_start, _tag_end)
// _obj_name - name объекта - как правило, textarea, но при желании можно сделать любой
// указываем именно NAME, так как согласно стандартам DOCTYPE HTML 4.01 strict и выше
// свойство ID у объектов ввода является не приемлемым и требуется обращаться только name
// _tag_start - что вставлять перед выделенным текстом
// _tag_end - что вставлять после выделенного текста
{
// берем объект
var area=document.getElementsByName(_obj_name).item(0);

// Mozilla и другие НОРМАЛЬНЫЕ браузеры
// ЕСЛИ есть что-либо выделенное, ТО
if (document.getSelection)
{ // берем все, что до выделения
 area.value=area.value.substring(0,area.selectionStart)+

 // вставляем стартовый тег
 _tag_start+

 // вставляем выделенный текст
 area.value.substring(area.selectionStart, area.selectionEnd)+

 // вставляем закрывающий тег
 _tag_end+

 // вставляем все, что после выделения
 area.value.substring(area.selectionEnd,area.value.length);
}

// Заплатка для ебучего Internet Explorer, извинете за грубость,
// но других слов просто нет, так как уже честно заебался в каждой функции
// писать под него заплатки
else
{ // берем текст
 var selectedText=document.selection.createRange().text;
 // ЕСЛИ имеется какой-то выделенный текст, ТО
 if (selectedText!='')
 { // составляем новые текст
 var newText=_tag_start+selectedText+_tag_end;
 // вставляем новый текст
 document.selection.createRange().text=newText;
 }
}
}// /insertTag
