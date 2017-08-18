// скролл вверх
$(function(){
 $.fn.scrollToTop=function(){
  $(this).hide().removeAttr("href");
  if($(window).scrollTop()!="0"){
    $(this).fadeIn("slow")
 }
 var scrollDiv=$(this);
 $(window).scroll(function(){
  if($(window).scrollTop()=="0"){
  $(scrollDiv).fadeOut("slow")
  }else{
  $(scrollDiv).fadeIn("slow")
 }
 });
  $(this).click(function(){
   $("html, body").animate({scrollTop:0},"slow")
  })
 }
});
$(function() {$("#toTop").scrollToTop();});

//листаем чтения AJAX'ом
function SendRequest(){
 document.getElementById('response').style.opacity="0.3";
 $('#loading').show(0);
 $.ajax({
    type: "GET",
    url: "chten_aj.php",
    data: "data_today="+$('#dat_send').val(),
    success: function(response){
         $('#loading').hide(0);
 document.getElementById('response').style.opacity="1";
$('#response').html(response);
    }
  });
};
function SendRequestPOST(){
 document.getElementById('response').style.opacity="0.3";
    document.getElementById('answer').style.opacity="0";
 $('#loading').show(0);
 $.ajax({
    type: "POST",
    url: "chten_aj.php",
    data: "data_today="+$('#data_today').val(),
    success: function(response){
         $('#loading').hide(0);
            document.getElementById('answer').style.opacity="1";
  document.getElementById('response').style.opacity="1";
 $('#response').html(response);
    }
  });
};
//закрываем окошко с просьбой о пожертвовании
$(document).ready(function () {
 
    $("#closed-red-many").click(function () {
     document.getElementById("many").style.display="none";
    });
  });
// куки
function MyFunc(){
  document.cookie = "pda=no;"; }; 

  // закрываем окошко с призывомк регистрации
  $(document).ready(function () {
 
    $("#closed-red").click(function () {
     document.getElementById("user_ip").style.display="none";
    });
  });
// закрываем окошко
function openip(type) { if (type == 1) { document.getElementById("blok_open").style.display="block";
document.getElementById("open").innerHTML="<br />";
}
}

// табы чтений
$(function () {
  var tabContainers = $('div.tabs > div');
  tabContainers.hide().filter(':first').show();
  
  $('div.tabs ul.tabNavigation a').click(function () {
    tabContainers.hide();
    tabContainers.filter(this.hash).show();
    $('div.tabs ul.tabNavigation a').removeClass('selected');
    $(this).addClass('selected');
    return false;
  }).filter(':first').click();
});

// табы меню
$(function () {
 var tabContainers = $('div.tabsmenu > div');
  tabContainers.hide().filter(':first').show();
 
 $('div.tabsmenu ul.tabNavigationmenu a').click(function () {
 tabContainers.hide();
 tabContainers.filter(this.hash).show();
 $('div.tabsmenu ul.tabNavigationmenu a').removeClass('selected');
 $(this).addClass('selected');
 return false;
 }).filter(':first').click();
});

// для чтений
$(document).ready(function () {
    $('a#toggler').click(function (e) {
      $(this).toggleClass('active');
      $('#answer').toggle();
         
      e.stopPropagation();
    });
 
    $('#answer').click(function (e) {
      e.stopPropagation();
    });
 
    $('body').click(function () {
      var link = $('a#toggler');
      if (link.hasClass('active')) {
        link.click();
      }
    });
  });
// личное меню
$(document).ready(function () {
    $('a#toggler1').click(function (e) { 
      $(this).toggleClass('active');
      $('.t2').toggle();
         
      e.stopPropagation();
    });
 
    $('.t2').click(function (e) {
      e.stopPropagation();
    });
 
    $('body').click(function () {
      var link = $('a#toggler1');
      if (link.hasClass('active')) {
        link.click();
      }
    });
  });
   // закладки
  $(document).ready(function () {
    $('a#toggler2').click(function (e) {
      $(this).toggleClass('active');
      $('.t4').toggle();
         
      e.stopPropagation();
    });
 
    $('.t4').click(function (e) {
      e.stopPropagation();
    });
 
    $('body').click(function () {
      var link = $('a#toggler2');
      if (link.hasClass('active')) {
        link.click();
      }
    });
  });
   // расширенный поиск
  $(document).ready(function () {
    $('a#togglersearch').click(function (e) {
      $(this).toggleClass('active');
      $('.tsear').toggle();
         
      e.stopPropagation();
    });
 
    $('.tsear').click(function (e) {
      e.stopPropagation();
    });
 
    $('body').click(function () {
      var link = $('a#togglersearch');
      if (link.hasClass('active')) {
        link.click();
      }
    });
  });
  
 // блок для расширенного поиска
 function once(fn, context) {  // запускаем ф-ию только один раз
    var result;

    return function() { 
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

var advanced_search = once(function() { // тело функции

 $.ajax({
  type: "GET",
  url: "advanced_search_aj.php",
  success: function(response){
  $('#res_advanced').html(response);
 }
 });

});
