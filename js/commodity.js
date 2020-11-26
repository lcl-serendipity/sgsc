$("#header").load("./header.html");
$("#foot").load("./foot.html");
$.getScript("./js/header.js");


//console.log($(".but_show .tp_show li img"));
$(".but_show .tp_show li img").on("mouseenter",function(){
    $(".top_show .pic").attr("src",$(this).attr("src"))
})

//数量加减
$btnA = $(".btn_a");
$btnB = $(".btn_b");
$ipt = $(".count_box .ipt");
console.log($ipt.val());
$btnB.on("click",function(){
    var numb =Number( $ipt.val())
    numb++
    $ipt.val(numb)
})
$btnA.on("click",function(){
    var numa =Number( $ipt.val())
    numa--
    if(numa <= 1){
        numa = 1
    }
    $ipt.val(numa)
    
})