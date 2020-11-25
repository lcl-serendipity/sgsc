$("#header").load("./header.html");
$.getScript("./js/header.js");


//console.log($(".but_show .tp_show li img"));
$(".but_show .tp_show li img").on("mouseenter",function(){
    $(".top_show .pic").attr("src",$(this).attr("src"))
})

//数量加减
$btnA = $(".btn_a")