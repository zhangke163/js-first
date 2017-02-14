$(function(){
	var yiji=$(".yiji");
	var erji=$(".erji");
	var mainmenu=$(".mainmenu")[0];
	for(var i=0;i<yiji.length;i++){
		yiji[i].aa=i;
		hover(yiji[i],function(){
		   var li=$("li",erji[this.aa]);  //获取每一个一级的li
           var h=(li.length)*(li[0].offsetHeight);  //获得每个二级li的总高度
           animate(erji[this.aa],{height:h},300); 
		},function(){
	       animate(erji[this.aa],{height:0},300);
		})
	}
   
   //实现导航栏置于顶部
	window.onscroll=function(){   //添加滚动条的事件
		  //获取滚动条的位置
        var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;

        if(tops>=200){
            mainmenu.style.cssText="position:fixed;left:0;right:0;top:0;margin:0 auto";
        }
        else{
        	mainmenu.style.cssText="";
        }        
	}
})