function disableBtn() //деактивация кнопки заметки
{
    var textarea = jQuery('#zamet');
    var btn  = jQuery('.submit');
    
    textarea.keyup(function() {
    btn.removeAttr('disabled');
    });
    
    btn.click(function() {
    btn.attr('disabled', 'true');
    });
}

jQuery(document).ready(function() {
    disableBtn();
})
