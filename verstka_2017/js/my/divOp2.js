//открытие/закрытие блоков в главе и глава.толк
function divOp1(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_tolk&open=on",
 });
document.getElementById('blok_open1').style.display='block';
document.getElementById('open1').innerHTML='<a onclick="divOp1(0);"><img src="IMG/top.png" title="Скрыть"/></a>';
document.getElementById('open1_box').innerHTML='<a onclick="divOp1(0);">ТОЛКОВАНИЯ</a>';
}
else {
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_tolk&open=off",
 });
document.getElementById('blok_open1').style.display='none';
document.getElementById('open1').innerHTML='<a onclick="divOp1(1);"><img src="IMG/bottom.png" title="Раскрыть"/></a>';
document.getElementById('open1_box').innerHTML='<a onclick="divOp1(1);">ТОЛКОВАНИЯ</a>';
}
}
function divOp2(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_audio&open=on",
 });
document.getElementById('blok_open2').style.display='block';
document.getElementById('open2').innerHTML='<a onclick="divOp2(0);"><img src="IMG/top.png" title="Скрыть"/></a>';
document.getElementById('open2_box').innerHTML='<a onclick="divOp2(0);">АУДИО</a>';
}
else {
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_audio&open=off",
 });
document.getElementById('blok_open2').style.display='none';
document.getElementById('open2').innerHTML='<a onclick="divOp2(1);"><img src="IMG/bottom.png" title="Раскрыть"/></a>';
document.getElementById('open2_box').innerHTML='<a onclick="divOp2(1);">АУДИО</a>';
}
}
function divOp3(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_para&open=on",
 });
document.getElementById('blok_open3').style.display='block';
document.getElementById('open3').innerHTML='<a onclick="divOp3(0);"><img src="IMG/top.png" title="Скрыть"/></a>';
document.getElementById('open3_box').innerHTML='<a onclick="divOp3(0);">ПАРАЛЛЕЛЬНЫЕ СТИХИ</a>';
}
else { $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_para&open=off",
 });
document.getElementById('blok_open3').style.display='none';
document.getElementById('open3').innerHTML='<a onclick="divOp3(1);"><img src="IMG/bottom.png" title="Раскрыть"/></a>';
document.getElementById('open3_box').innerHTML='<a onclick="divOp3(1);">ПАРАЛЛЕЛЬНЫЕ СТИХИ</a>';
}
}
function divOp4(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_issled&open=on",
 });
document.getElementById('blok_open4').style.display='block';
document.getElementById('open4').innerHTML='<a onclick="divOp4(0);"><img src="IMG/top.png" title="Скрыть"/></a>';
document.getElementById('open4_box').innerHTML='<a onclick="divOp4(0);">ИССЛЕДОВАНИЯ</a>';
}
else {
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_issled&open=off",
 });
document.getElementById('blok_open4').style.display='none';
document.getElementById('open4').innerHTML='<a onclick="divOp4(1);"><img src="IMG/bottom.png" title="Раскрыть"/></a>';
document.getElementById('open4_box').innerHTML='<a onclick="divOp4(1);">ИССЛЕДОВАНИЯ</a>';
}
}
