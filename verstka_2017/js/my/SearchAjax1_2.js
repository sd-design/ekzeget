 function SearchAjax(search, perevod, page, zavet, search_on, zavet_tolk, slov, obl, strog) {
    SearchAjaxStih(page, search, perevod, zavet, strog);
    SearchAjaxTolk(page, search, search_on, zavet_tolk, strog);
    SearchAjaxSlov(page, search, slov, obl, strog);
    SearchAjaxProp(page, search, strog);
    SearchAjaxMaps(search, strog);
  }
  
  function SearchAjaxStih(page, search, perevod, zavet, strog){ // поиск по Библии
 document.getElementById('res_st').style.opacity="0.5";
 $.ajax({
  type: "GET",
  url: "search_stih_aj.php",
  data: "page=" + page + "&perevod=" + perevod + "&zavet=" + zavet + "&search=" + search + "&strog=" + strog,
  success: function(response){
  document.getElementById('res_st').style.opacity="1";
  $('#biblia').html(response);
 }
 });
};

  function SearchAjaxTolk(page, search, search_on, zavet_tolk, strog){ // поиск по толкованиям
  document.getElementById('res_t').style.opacity="0.5";
$.ajax({
  type: "GET",
  url: "search_tolk_aj.php",
  data: "page=" + page + "&search_on=" + search_on + "&zavet_tolk=" + zavet_tolk + "&search=" + search + "&strog=" + strog,
  success: function(response){
    document.getElementById('res_t').style.opacity="1";
	$('#tolks').html(response);
 }
 });
};

  function SearchAjaxSlov(page, search, slov, obl, strog){ // поиск по словарям
  document.getElementById('res_sl').style.opacity="0.5";
$.ajax({
  type: "GET",
  url: "search_slovar_aj.php",
  data: "page=" + page + "&slov=" + slov + "&obl=" + obl + "&search=" + search + "&strog=" + strog,
  success: function(response){
    document.getElementById('res_sl').style.opacity="1";
	$('#slovar').html(response);
 }
 });
};

  function SearchAjaxProp(page, search, strog){ // поиск по проповедям
  document.getElementById('res_pr').style.opacity="0.5";
$.ajax({
  type: "GET",
  url: "search_propoved_aj.php",
  data: "page=" + page + "&search=" + search + "&strog=" + strog,
  success: function(response){
   document.getElementById('res_pr').style.opacity="1";
	$('#propoved').html(response);
 }
 });
};

  function SearchAjaxMaps(search, strog){ // поиск по картам
 $.ajax({
  type: "GET",
  url: "search_maps_aj.php",
  data: "search=" + search + "&strog=" + strog,
  success: function(response){
  $('#maps').html(response);
 }
 });
};
