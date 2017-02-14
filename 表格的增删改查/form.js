$(function(){
	tab=$("#tab");
	tab.ondblclick=function(e){  //双击事件
      var eve=e||window.event;  //获取事件
      var obj=eve.target||eve.srcElement;  //td   //事件委托//鼠标单击谁，谁就是目标对象
      if(obj.nodeName=="TH"||obj.className=="del"||obj.className=="bt"){  //通过节点的标签名和类名判断。如果为TH和del时
      	return false;  //为false以下程序将不再进行
      }
      var val=obj.innerHTML;  //将td中的内容保存到变量中
      obj.innerHTML="";  //将td的内容清除
      //创建一个文本框
      var text=document.createElement("input");
      text.type="text";  //把text的类型设为"text";
      text.style.border="0";  //将边框设为0；
      obj.appendChild(text);//追加给obj
      text.focus();  //获得焦点
      text.value=val;  //把val里的值给了文本框

      text.onblur=function(){  //失去焦点的事件
      	obj.innerHTML=text.value;  //保存修改后的值
      	//删除节点
      	obj.removeChild(text);  

      }
	}

    //添加行
	var add=$("#add");
	var tbody=$("tbody")[0];  
	add.onclick=function(){   
		var tr=document.createElement("tr");  //创建tr
		//创建td,由于有5个，所以需要遍历
		for(var i=0;i<5;i++){
			if(i==4){   //判断是否为删除那一列，删除的列不创建空白td;
				var td=document.createElement("td");
				td.className="del";
				td.innerHTML="删除";
                tr.appendChild(td);
			}else{  //创建空白td
				 var td=document.createElement("td");
                 tr.appendChild(td);
			}
		}
		tbody.appendChild(tr);   //将tr追加到tbody上
	}

    //删除行
	tab.onclick=function(e){
	  var eve=e||window.event;  //获取事件
      var obj=eve.target||eve.srcElement; 
      if(obj.className=="del"){
      	var parent=obj.parentNode;//找到父节点   //事件委托
      	tbody.removeChild(parent);
      }
	}
})