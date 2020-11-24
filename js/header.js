$(function () {
    //var $menuGroup = $(".menu-group");
    var $menu = $(".menu");
    var $subZn = $(".sub_zn");
    var $subMenu = $(".sub_menu")
    
    $.ajax({
        url: './json/data.json',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //console.log(json);
            var navJs = json[0].subs;
            var navtwo = json[1].subs
            // console.log(navJs);
            // console.log(333);
            
            $menu.on("mouseenter", '.menu_group', function () { //未来元素有效
                $subMenu.css("display", "block")
                // $(this).siblings("sub_menu").css("display", "block")
                // console.log(444);
                var navStr = "";
                $.each(navJs, function (index, item) {
                    navStr += `
                        <li>
                        <a href="#">
                        <span class="pic"><img src="${item.img}" alt=""></span>
                        <span class="name">${item.name}</span>
                        <span class="price">￥ ${item.price}</span>
                        </a>
                        </li>
                        `;
                })
                $subZn.html(navStr);
                // $subMenu.show()
                $menu.on("mouseenter", '.sub_menu', function () {
                    $subMenu.css("display", "block")
                })
                $menu.on("mouseleave", '.sub_menu', function () {
                    // console.log( $(".menu .sub_menu"));
                    $subMenu.css("display", "none")
    
                });
            });
          
           
            $menu.on("mouseleave", '.menu_group', function () {
                $subMenu.css("display", "none")

            });
            $menu.on("mouseenter", '.menu_tm', function () { //未来元素有效
                // $subZn.html("");
                // $subMenu.css("display","block")
                $subMenu.css("display", "block")
                //console.log(444);
                var navStr = "";
                $.each(navtwo, function (index, item) {
                    navStr += `
                        <li>
                        <a href="#">
                        <span class="pic"><img src="${item.img}" alt=""></span>
                        <span class="name">${item.name}</span>
                        <span class="price">￥ ${item.price}</span>
                        </a>
                        </li>
                        `;
                })
                $subZn.html(navStr);
                // $subMenu.show()
                
            });
            $menu.on("mouseleave", '.menu_tm', function () {
                //  $subZn.html("");
                // $subZn.html(" ");
                console.log(141414);
                
                $subMenu.css("display", "none")
            });
            // $menu.on("mouseenter", ".sub_menu", function () {
            //     $subZn.css("display", "black")
            // })
        }
    });
    
})
