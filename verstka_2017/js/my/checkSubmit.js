function checkSubmit ( thisForm ) { // �������� ������������ �����
if ( thisForm.name_tolk.value =="�������� ���"){ 
alert('����������, ������� ��� ����������!'); 
return false;
}
if ( thisForm.comment_tolk.value ==""){
alert('����������, ������� ����� ����������!'); 
return false;
}
return true;
}
