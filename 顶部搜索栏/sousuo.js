$(function(){
	var box=$(".box")[0];
	var flag=true;
	window.onscroll=function(){
	 var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
	 if(tops>=400){
	 
	 	if(flag==true){
	 		animate(box,{top:0},300);	
	 	    flag=false;
	 	}

	 }
	 else{
	    if(flag==true){
           animate(box,{top:-50},300);
	 	   flag=false;
	   }
	 	   flag=true;
	 }
	}
})