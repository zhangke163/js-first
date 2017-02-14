$(function(){
	var father=$(".father")[0];
	var son=$(".son")[0];
	//捕获型
	// son.addEventListener("click",function(){
	// 	alert("son");
	// },true);
	// father.addEventListener("click",function(){
	// 	alert("father");
	// },true);
	// document.body.addEventListener("click",function(){
	// 	alert("body");
	// },true);
	//冒泡型
	//     son.onclick=function(){
	// 	alert("son");
	// }
	// 	father.onclick=function(){
	// 	alert("father");
	// }
	// 	document.body.onclick=function(){
	// 	alert("body");
 //    }
 //   son.onclick=function(e){
	// 	var eve=e||window.event;
	// 	if(e.stopPropagation){   //火狐   //只适用于阻止冒泡型的事件流
	// 		e.stopPropagation();
	// 	}else{
	// 		e.cancelBubble=true;//IE
	// 	}
	// 	alert("son");
	// }
	var bigbox=$(".bigbox")[0];
	var box=$(".box");
    bigbox.onclick=function(e){
       var eve=e||window.event;
       var obj=eve.target||eve.srcElement; //鼠标单击谁，谁就是目标对象
       if(obj.className=="box"){
  	     obj.style.background="#ff00ff";
      }
    }

  
  
})