$(function () {
    var now=0;
    var next=0;
    var t1,t2;
    var nowtime=0;
    var flag=true;
    var flag1=true;
    t1=setInterval(move,4000);
    function move(type) {
        var type=type||"right";
        if(type=="right"){
            next++;
            if(next>$("ul.banner_box>li").length-1){
                next=0;
            }
            $("ul.banner_box>li").eq(now).css({zIndex:1}).animate({left:0,width:"80%",height:"80%"},1000);
            $("ul.banner_box>li").eq(next).css({zIndex:2}).animate({left:"0"},1000,function(){
                $("ul.banner_box>li").eq(now).css({left:"100%",width:"100%",height:"100%"});
                now=next;
                nowtime=0;
                flag1=true;
                if(next==0){

                    flag=false;
                }

            });


        }else{
            next--;
            if(next<0){
                next=$("ul.banner_box>li").length-1;
            }
            $("ul.banner_box>li").eq(next).css({zIndex:2,left:"-100%"}).animate({left:"0"},1000,function () {
                now=next;
                flag1=true;
            });
            $("ul.banner_box>li").eq(now).css({zIndex:1}).animate({left:"100%"},1000);
        }

    }

    t2=setInterval(btn,50);
    function btn(){
        nowtime+=50;
        var bili=nowtime/3000;
        if(bili>=1){
            bili=1;
        }
        $(".progress").eq(now).css({width:bili*100+"%"});
        if(!flag){
            $(".progress").css({width:0});
            flag=true;
        }
    }
    function stop() {
        clearInterval(t1);
        clearInterval(t2);

    }

    $("ul.btn>li").click(function(){
            stop();
            var index=$(this).index();
            $(".progress").css({width:0});
            $(this).find(".progress").css({width:"100%"});
            if(index>now){
                $("ul.banner_box>li").eq(index).css({zIndex:2}).animate({left:0},1000,function () {
                    $("ul.banner_box>li").eq(now).css({left:"100%",width:"100%",height:"100%"});
                    now=index;
                });
                $("ul.banner_box>li").eq(now).css({zIndex:1}).animate({width:"80%",height:"80%"},1000)

            }
            if(index<now){

                $("ul.banner_box>li").eq(index).css({zIndex:1,left:"0",width:"80%",height:"80%"}).animate({left:"0",width:"100%",height:"100%"},1000,function () {

                    now=index;
                });
                $("ul.banner_box>li").eq(now).css({zIndex:2}).animate({left:"100%"},1000);
            }else{
                return;0
            }

    })
    $(".right_b").click(function (event) {
        //event.preventDefault();
        if(!flag1){
            return;
        }
        flag1=false;
            stop();
            move();
        $(".progress").css({width:0});
        $("ul.btn>li").eq(next).find(".progress").css({width:"100%"});
    })
    $(".left_b").click(function (event) {
       // event.preventDefault();
        if(!flag1){
            return;
        }
        flag1=false;
        stop();
        move("left");
        $(".progress").css({width:0});
        $("ul.btn>li").eq(next).find(".progress").css({width:"100%"});
    })
    window.onblur=function () {
        stop();
        $(".progress").css({width:0});
    }
    window.onfocus=function () {
        t1=setInterval(move,4000);
        t2=setInterval(btn,50);
    }
    $(function () {
    	var flag=true;	
  	window.onresize=function(){
	    	var ch=document.documentElement.clientHeight;
	    	var cw=document.documentElement.clientWidth;
	    	
	    	if(cw>=750){
	    		$(".bg").css({display:"none"});
	    		
	    	}else{
	    		$(".bg").css({height:ch});
	    	}

	
    	}
  	        $("#iphone").click(function () {
	            if(flag){
	                flag=false;
	                
	                $(".bg").slideDown(500);
	                $(".line").animate({marginBottom:-1},500);
	                $(".line").css({transform:"rotate(-45deg)"});
	                $(".addmargin").css({transform:"rotate(45deg)",marginTop:22});
	            }else{
	                flag=true;
	                $(".bg").slideUp(500);
	                $(".line").animate({marginBottom:10},500);
	              $(".addmargin").css({transform:"rotate(45deg)",marginTop:20});
	                $(".line").css({transform:''});
	                $(".addmargin").css({transform:""});
	            }
				
        })	

    })
    var flag3=true;
    $(".biubiu").click(function(index){
    	if(flag3){
    		flag3=false;
    		$(this).find("ul.zu").slideDown();
    		$(this).find(".right").css({transform:"rotate(45deg)"});//flag3=false;
    	}else{
    		flag3=true;
    		$(this).find("ul.zu").slideUp();
    		$(this).find(".right").css({transform:"rotate(0)"});
    	}
    	
    })



})
