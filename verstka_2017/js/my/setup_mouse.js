// передвижное окно

/* определим тип браузера */ 
var bIE=0;bOp=0;bFF=0;
var verBr=navigator.userAgent;
if (verBr.indexOf("Opera")!=-1)
bOp=1;
else 
{
if (verBr.indexOf("MSIE")!=-1)
bIE=1;
else
{
//if (verBr.indexOf("Firefox")!=-1)
bFF=1;
}
}

setup_mouse("answer_z","zagol_okno1");

var obj_okno;
var obj_zagol_okno;
delta_x=0;
delta_y=0;

function setup_mouse(id_div_okno,id_div_zagol)
{
obj_okno=document.getElementById(id_div_okno);
obj_zagol_okno=document.getElementById(id_div_zagol);

obj_zagol_okno.onmousedown=save_delta_koor;
if (bOp || bFF)
{
obj_zagol_okno.addEventListener("onmousedown",save_delta_koor,false);

}

document.onmouseup=clear_delta_koor;
}

function save_delta_koor(obj_evt)
{
if (obj_evt)
{
x=obj_evt.pageX;
y=obj_evt.pageY;
}
else
{
x=window.event.clientX;
y=window.event.clientY;
if (bIE)
{
y-=2;
x-=2;
}

}

x_okno=obj_okno.offsetLeft;
y_okno=obj_okno.offsetTop;

delta_x=x_okno-x;
delta_y=y_okno-y;


document.onmousemove=motor_okno;
if (bOp || bFF)
document.addEventListener("onmousemove",motor_okno,false);

}

function clear_delta_koor()
{
document.onmousemove=null;

}

function motor_okno(obj_event)
{

if (obj_event)
{
x=obj_event.pageX;
y=obj_event.pageY;
}
else
{
x=window.event.clientX;
y=window.event.clientY;
if (bIE)
{
y-=2;
x-=2;
}

}
new_x=delta_x+x;
new_y=delta_y+y;

obj_okno.style.top=new_y+"px";
obj_okno.style.left=new_x+"px";

}

