$(function(){
	var box=$(".box");
	var line_top=$(".line-top");
	var line_bottom=$(".line-bottom");
	var line_left=$(".line-left");
	var line_right=$(".line-right");
	for(var i=0;i<box.length;i++){
		box[i].aa=i;
	    hover(box[i],function(){
        animate(line_top[this.aa],{width:box[this.aa].offsetWidth},500);
        animate(line_bottom[this.aa],{width:box[this.aa].offsetWidth},500);
        animate(line_left[this.aa],{height:box[this.aa].offsetHeight},500);
        animate(line_right[this.aa],{height:box[this.aa].offsetHeight},500);
	    },function(){
        animate(line_top[this.aa],{width:0},500);
        animate(line_bottom[this.aa],{width:0},500);
        animate(line_left[this.aa],{height:0},500);
        animate(line_right[this.aa],{height:0},500);
	    })
	}

})