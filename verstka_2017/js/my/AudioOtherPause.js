var a=document.getElementsByTagName("audio"); // для выключения аудио файла при проигрывании другого
 
function other_pause(b){
    for(i=0;i<a.length;i++){
        if(!(i==b)){a[i].pause()};
    }
}
 
