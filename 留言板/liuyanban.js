$(function(){
	var lyb=$("#lyb");
	var btn=$("#btn");
	var title=$("#title");
	var tishi=$("#tishi");
	btn.onclick=lyb.onkeydown=function(e){
		var eve=e||window.event;  //获取事件对象
		if(eve.type=="click"){    //判断事件类型
			var val=lyb.value;    //取留言板里的值
			val=val.replace(/^\s*|\s$/g,"");  //去除空格
			if(val==""){
				alert("内容为空");
			}else{
				var p=document.createElement("p");
				p.innerHTML=val;   //给p标签赋值
				title.appendChild(p);   //追加
				lyb.value="";
				lyb.focus();   //自动获得焦点
				tishi.innerHTML="您可以输入40个字符，已经输入0个字符，还剩下40个字符";

			}
		}else if(eve.type=="keydown"){
			if(eve.ctrlKey && eve.keyCode==13){    //ctrl 回车
				alert(1)
                var val=lyb.value;    //取留言板里的值
			    val=val.replace(/^\s*|\s$/g,"");  //去除空格
				if(val==""){
					alert("内容为空");
				}else{
					var p=document.createElement("p");
					p.innerHTML=val;   //给p标签赋值
					title.appendChild(p);   //追加
					lyb.value="";
					lyb.focus();   //自动获得焦点
					tishi.innerHTML="您可以输入40个字符，已经输入0个字符，还剩下40个字符";
				}
		    }
	    }
	}

	lyb.onkeyup=lyb.onkeypress=function(){
		var val=lyb.value;    //获取留言板里的内容
		var len=val.length;     //获取留言板内容的长度
		var max=40;
		if(len>40){
			tishi.innerHTML="您可以输入40个字符，已经输入40个字符，还剩下0个字符";
			lyb.value=val.substr(0,40);
		}
		else{
			tishi.innerHTML="您可以输入40个字符，已经输入"+len+"个字符，还剩下"+(max-len)+"个字符";
		}
	}



})