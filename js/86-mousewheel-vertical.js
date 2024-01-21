$(function(){
    //스크롤의 위치를 저장할 변수 만들기
    var moveTop=0;
    //각각의 section에서 마우스 휠 이벤트가 발생하면
    //휠을 아래로 내리면 다음 section이 있는 위치로 스크롤top을 이동
    //휠을 위로 올리면 이전 section이 있는 위치로 스크롤top을 이동하기
    $("section").each(function(i){
        $(this).on("mousewheel DOMMouseScroll",function(e){
            //이벤트 정보를 저장할 변수
            var event = e.originalEvent;
            //방향을 체크할 변수
            var delta=0;
            //파이폭스
            if(event.detail){
                //아래 3 위로 -3
                delta= event.detail*-40;
            }
            else{
                //다른브라우저 아래 -120 위 120
                delta = event.wheelDelta;        
            }
            if(delta<0){
                console.log($(this).next().length)
                if($(this).next().length){
                    moveTop = $(this).next().offset().top;
                }
            }
            else{
                if($(this).prev().length){
                    moveTop = $(this).prev().offset().top;
                }
            }
            
            $("html,body").stop().animate({
                scrollTop:moveTop
            },500)            

        })
    })
})