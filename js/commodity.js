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


// 设置cookie
function setCookie(options){
    options.days = options.days || 0
    options.path = options.path || ''
    if (options.days === 0) {
      document.cookie = options.key+'='+options.val+'; path='+options.path
    } else {
      var d = new Date()
      d.setDate(d.getDate()+options.days)
      document.cookie = options.key+'='+options.val+'; expires='+d+'; path='+options.path
    }
  }
  
//点击立即购买
$(".buy .pro").on("click",function(){
    window.open("./shopping.html")
})
console.log($(".buy .join"));
$(".buy .join").on("click",function(){
    alert("添加成功")
    setCookie({
        key:"code",
        val:"321",
        days:7
    })
})