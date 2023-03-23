
$(function(){
    //头部导航
    $(".navico").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".logo").css("z-index","8");
            $(".fixcon").css("z-index","99");
            $(".navul2").slideUp(300);
            $("body,html").css("overflow","auto");
        }
        else{
            $(this).addClass("active");
            $(".logo").css("z-index","10");
            $(".fixcon").css("z-index","2");
            $(".navul2").slideDown(300);
            $("body,html").css("overflow","hidden");
        }

    });

});



