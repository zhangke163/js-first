//漂浮窗
$(function(){
	var box=$(".box")[0];              
	var x=$(".x",$(".box")[0])[0];
	var cw=document.documentElement.clientWidth;     //获取浏览器的宽高
	var ch=document.documentElement.clientHeight;
	window.onresize=function(){
	 cw=document.documentElement.clientWidth;      //重新获取浏览器的宽高
	 ch=document.documentElement.clientHeight;
	}
    var ox=box.offsetWidth;     //获取元素的实际宽高
	var oy=box.offsetHeight;
	var speedx=10;        //歩进值
	var speedy=10;   
	function change(){    
        var ol=box.offsetLeft;   //获取元素的位置
	    var ot=box.offsetTop;

        var x=ol+speedx;    //保存元素的位置
        var y=ot+speedy;
        if(y>=(ch-oy)){y=ch-oy;speedy*=-1};      //判断边界
        if(y<0){speedy*=-1};
        if(x>=(cw-ox)){x=cw-ox;speedx*=-1}
        if(x<0){speedx*=-1};
        box.style.left=x+"px";    //赋值
        box.style.top=y+"px";
	}
	var t=setInterval(change,50);
	//鼠标移入停止，移出继续动
	box.onmouseover=function(){
       clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(change,50);
	}
	//点击关闭按钮退出漂浮窗
	x.onclick=function(){
		box.style.display="none";
	}
});