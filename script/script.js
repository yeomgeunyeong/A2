$(function(){
    //메뉴, 슬라이드
    $(".main > li, .sub_bg").mouseover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    })//

    $(".main > li, .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//

    // $(".main > li, .sub_bg").hover(function(){
    //     $(".sub, .sub_bg").stop().slideDown();
    // }, function(){
    //     $(".sub, .sub_bg").stop().slideUp();
    // })

    
    //이미지 슬라이드
    // var i=0;  // 0 1 2 이미지 인덱스 번호

    // // .left_move / position: absolute / left: 0 / width: calc(1200px * 3)
    // // 0 * -1200 =   0      0
    // // 1 * -1200 = -1200  -100%
    // // 2 * -1200 = -2400  -200%

    // setInterval(function(){

    //     if(i==2){
    //         i=0;
    //     }else{
    //         i++;
    //     }
    //     console.log("i:", i);

    //     pos = i * -1200 + "px";
    //     console.log("pos:", pos);


    //     $(".left_move").animate({left:pos}, 500);
    //     // 좌표를 끌어오는 방법
    // }, 2500)

    setInterval(move ,3000)
    function move(){

        $(".left_move").animate({left:"-1200px"}, 500, function(){
            $(".left_move").css({left:"0"});
            $(".left_move").append($(".left_move li").first());
            // $(".left_move").append($(".left_move li").eq(0));
        })
    }

    
    //팝업
    $(".p_click").click(function(){
        $(".pop_bg, .pop").show();
    })//

    $(".close").click(function(){
        $(".pop_bg, .pop").hide();
    })


})