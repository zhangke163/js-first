$(function(){
	var smallimg=$(".smallimg")[0];
	var bigimg=$(".bigimg")[0];
	var small=$("img",smallimg)[0];
	var big=$("img",bigimg)[0];
	hover(small,function(){
		bigimg.style.display="block";
	},function(){
        bigimg.style.display="none";
	})
	
	small.onmousemove=function(e){
        var eve=e||window.event;
        var ox=eve.offsetX;    //获取到事件源的距离
        var oy=eve.offsetY;
        var x=(big.offsetWidth-bigimg.offsetWidth)/small.offsetWidth;  //获得比例
        var y=(big.offsetHeight-bigimg.offsetHeight)/small.offsetHeight;
        big.style.marginLeft=-ox*x+"px";     //获得大图片的移动位置
        big.style.marginTop=-oy*y+"px";
	}
})