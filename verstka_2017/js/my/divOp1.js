//открытие/закрытие блоков в стихе и толкованиях
function divOp1(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_tolk&open=on",
 });
document.getElementById('blok_open1').style.display='block';
document.getElementById('open1_box').innerHTML='<a onclick="divOp1(0);" class="btn btn-lg btn-primary">Толкования</a>';

}
else {
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_tolk&open=off",
 });
document.getElementById('blok_open1').style.display='none';



document.getElementById('open1_box').innerHTML='<a onclick="divOp1(1);" class="btn btn-lg btn-primary">Толкования</a>';

}
}
function divOp2(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_prop&open=on",
 });
document.getElementById('blok_open2').style.display='block';
document.getElementById('open2').innerHTML='<a onclick="divOp2(0);"><img src="/assets/IMG/top.png" title="Скрыть"/></a>';
document.getElementById('open2_box').innerHTML='<a onclick="divOp2(0);">Проповеди</a>';

}
else {
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_prop&open=off",
 });
document.getElementById('blok_open2').style.display='none';
document.getElementById('open2').innerHTML='<a onclick="divOp2(1);"><img src="/assets/IMG/bottom.png" title="Раскрыть"/></a>';
document.getElementById('open2_box').innerHTML='<a onclick="divOp2(1);">Проповеди</a>';

}
}
function divOp3(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_para&open=on",
 });
document.getElementById('blok_open3').style.display='block';
document.getElementById('open3_box').innerHTML='<a onclick="divOp3(0);">Параллельные стихи</a>';


}
else { $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_para&open=off",
 });
document.getElementById('blok_open3').style.display='none';
document.getElementById('open3_box').innerHTML='<a onclick="divOp3(1);" class="btn btn-lg btn-primary">Параллельные стихи</a>';

}
}
function divOp4(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_ssil&open=on",
 });
document.getElementById('blok_open4').style.display='block';
document.getElementById('open4').innerHTML='<a onclick="divOp4(0);"><img src="assets/IMG/top.png" title="Скрыть"/></a>';
document.getElementById('open4_box').innerHTML='<a onclick="divOp4(0);">На стих ссылаются</a>';

}
else {
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_ssil&open=off",
 });
document.getElementById('blok_open4').style.display='none';
document.getElementById('open4').innerHTML='<a onclick="divOp4(1);"><img src="/assets/IMG/bottom.png" title="Раскрыть"/></a>';
document.getElementById('open4_box').innerHTML='<a onclick="divOp4(1);">НА СТИХ ССЫЛАЮТСЯ</a>';

}
}
function divOp5(type) { if (type == 1) { 
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_issled&open=on",
 });
document.getElementById('blok_open5').style.display='block';
document.getElementById('open5').innerHTML='<a onclick="divOp5(0);"><img src="/assets/IMG/top.png" title="Скрыть"/></a>';
document.getElementById('open5_box').innerHTML='<a onclick="divOp5(0);">ИССЛЕДОВАНИЯ</a>';

}
else {
 $.ajax({
  type: "GET",
  url: "open_aj.php",
  data: "name=open_issled&open=off",
 });
document.getElementById('blok_open5').style.display='none';
document.getElementById('open5').innerHTML='<a onclick="divOp5(1);"><img src="/assets/IMG/bottom.png" title="Раскрыть"/></a>';
document.getElementById('open5_box').innerHTML='<a onclick="divOp5(1);">ИССЛЕДОВАНИЯ</a>';

}
}
