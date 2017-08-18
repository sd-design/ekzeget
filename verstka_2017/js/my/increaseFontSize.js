// увеличение / уменьшение текста
var min=9;
var max=27;
function increaseFontSize(size) {
var p = document.getElementsByClassName('bible-poem-text');
for(i=0;i<p.length;i++) {
if(p[i].style.fontSize) {
var s = parseInt(p[i].style.fontSize.replace("px",""));
} else {
var s = size;
}
if(s!=max) {
s += 2;
}
p[i].style.fontSize = s+"px"
}
 $.ajax({
  type: "GET",
  url: "uvelich_aj.php",
  data: "size="+s,
 });

}
function decreaseFontSize(size) {
var p = document.getElementsByClassName('bible-poem-text');
for(i=0;i<p.length;i++) {
if(p[i].style.fontSize) {
var s = parseInt(p[i].style.fontSize.replace("px",""));
} else {
var s = size;
}
if(s!=min) {
s -= 2;
}
p[i].style.fontSize = s+"px"
} 
 $.ajax({
  type: "GET",
  url: "uvelich_aj.php",
  data: "size="+s,
 });

}