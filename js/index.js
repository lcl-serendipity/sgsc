$("#header").load("./header.html");

$.getScript("./js/header.js");

var Swiper1 = new Swiper ('#swiper1', {
    //direction: 'vertical', // 垂直切换选项
    //loop: true, // 循环模式选项
    loop:true,
    autoplay: {
        dela:2000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
      },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
     /* scrollbar: {
      el: '.swiper-scrollbar',
    },  */
}) 


var Swiper2 = new Swiper ('#swiper2', {
//direction: 'vertical', // 垂直切换选项
//loop: true, // 循环模式选项
loop:true,
autoplay: {
    dela:2000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
    },

// 如果需要分页器
pagination: {
    el: '.swiper-pagination',
    clickable :true,
},

// 如果需要前进后退按钮
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
})

var Swiper3 = new Swiper ('#swiper3', {
    //direction: 'vertical', // 垂直切换选项
    //loop: true, // 循环模式选项
    loop:true,
    autoplay: {
        dela:2000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        },
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

//侧边栏

    $(".gotop").on('click',function(){
        $(window).scrollTop(0);
    })
    