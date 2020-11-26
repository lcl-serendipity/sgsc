$("#header").load("./header.html");
$("#foot").load("./foot.html");
$.getScript("./js/header.js");

console.log($(".ipt"));
$(".ipt").keydown(function(){
    console.log($(this).val());
    if($(this).val().length >= 0){
         //console.log(1);
         $(".sz").show()
        }
    if($(this).val()===""){
        $(".login_b .sz").hide()
    }
})

$(".sz").on("click",function(){
    $(".ipt").val("")
})

//登录注册切换
console.log($(".login_c_a"));
$("h5").on("click",function () {
    $(".login_c").css({"display":"none"})
    /* $(".login_c_a").css({"display":"black"}) */
    $(".login_c_a").show()
    $("h5").css("opacity","1");
    $("h3").css("opacity","0.5")
})
$("h3").on("click",function () {
    $(".login_c_a").css({"display":"none"})
    /* $(".login_c_a").css({"display":"black"}) */
    $(".login_c").show()
    $("h5").css("opacity","0.5");
    $("h3").css("opacity","1");
})