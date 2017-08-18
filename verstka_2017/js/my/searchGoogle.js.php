<script type="text/javascript">
jQuery(function($) {
 
 var $txt = '';
  
 $('#osn_text').bind("mouseup", function(e){
  if (window.getSelection){
  $txt = window.getSelection();
  }
  else if (document.getSelection){
  $txt = document.getSelection();
  }
  else if (document.selection){
  $txt = document.selection.createRange().text;
  }
  else return;
  if ($txt!=''){
  $('#popUpBox').css({'display':'block', 'left':e.pageX-60+'px', 'top':e.pageY+5+'px'});
  $('#favorite').css({'display':'block', 'left':e.pageX-110+'px', 'top':e.pageY+5+'px'});
  }
 });
  
 $(document).bind("mousedown", function(){
     if(document.selection && document.selection.empty) {
  document.selection.empty();
 } else if(window.getSelection) {
  var sel = window.getSelection();
  sel.removeAllRanges();
 }

  $('#popUpBox').css({'display':'none'});
  $('#favorite').css({'display':'none'});
 });  
  
  $('#popUpBox').bind("mousedown", function searchGoogle() {

     var selected
 if (window.getSelection) selected = window.getSelection()
 else if (document.getSelection) selected = document.getSelection()
 else selected = document.selection.createRange().text
 var q = " " + selected + " "
 
var q = q.match(/\s\d{1,3}\s/g)
qq = " "
for (var i = 0; i < q.length; i++) {
 qq = qq + " " + q[i];
}

 location="generator.php?kn=<?php echo $kn;?>&gl=<?php echo $gl;?>&marker_st=<?php echo $marker_st;?>&st="+qq;
 void 0;
}
);
 $('#favorite').bind("mousedown", function searchGoogle() {

     var selected
 if (window.getSelection) selected = window.getSelection()
 else if (document.getSelection) selected = document.getSelection()
 else selected = document.selection.createRange().text
 var q = " " + selected + " "
 
var q = q.match(/\s\d{1,3}\s/g)
qq = " "
for (var i = 0; i < q.length; i++) {
 qq = qq + " " + q[i];
}
 var ab = q[0].replace(/\s/,"")
 location="favorite.php?kn=<?php echo $kn;?>&gl=<?php echo $gl;?>&st="+qq+"&diez="+ab;
 void 0;
}
);
 
});
</script> 
