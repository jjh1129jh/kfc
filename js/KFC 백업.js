$(function(){
    var yyPos=[];

    //풀페이지
    var moveTop=0;
    //스크롤의 위치를 저장할 변수
    $("section").each(function(i){
        yyPos[i]=$(this).position().top
        console.log(yyPos[i]);
        $(this).on("mousewheel DOMMouseScroll",function(e){
            
            var event = e.originalEvent;
            //이벤트 저장 변수
            var delta=0;
            //방향 체크변수
            if(event.detail){
                delta = event.detail*-40;
            }
            else{
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
                    moveTop =$(this).prev().offset().top;
                }
            }
            $("html,body").stop().animate({
                scrollTop:moveTop
            },500)
        })
    })
    //스크롤탑의 위치에 따른 메뉴 글씨 색반전
    $(window).scroll(function(){
        var scrollY = $(this).scrollTop();
        // console.log(scrollY);
        if (scrollY >= yyPos[3]){
            $('#nav>li>a').stop().animate({
                color:"#000"
            },100)
        }
        else if (scrollY >= yyPos[2])
            {
                $('#nav>li>a').stop().animate({
                    color:"#fff"
                },100)
            }
        else if (scrollY >= yyPos[1])
            {
                $('#nav>li>a').stop().animate({
                    color:"#000"
                },100)
            }
        else{
            $('#nav>li>a').stop().animate({
                color:"#fff"
            },100)
        }
    })
    //탑스크롤 버튼
    var HomeTop = $('.Topscroll');
    HomeTop.on('click', function() {
    $('html, body').stop().animate({scrollTop: 0}, 600);
    });


    //집에꺼랑 합쳐야 하는부분 시작

    //좌측서클 클릭시
    $(".navigation>ul>li").click(function(){
        var ht = $(this).index();
        $('.navigation>ul>li>a').removeClass("onLC")
        $(this).children().addClass("onLC");
        $("html,body").stop().animate({scrollTop: yyPos[ht]}, 700);
    })
    
    //스크롤탑의 위치에 따른 좌측서클 변화
    $(window).scroll(function(){
        if (scrollY == 0)
        {
            $('.navigation>ul>li>a').removeClass("onLC")
            $('.LC1').addClass("onLC")
            $('.navigation>ul>li>a').stop().animate({
                borderColor : 'rgba(255,255,255,0.5)',
                backgroundColor:'transparent'
            }, 50)
            $('.onLC>span').stop().animate({
                color : 'whitesmoke'
            }, 50)
            $('.onLC').stop().animate({
                backgroundColor:'whitesmoke'
            }, 50)
        }
        if (scrollY > yyPos[1]-1)
            {
            $('.navigation>ul>li>a').removeClass("onLC")
            $('.LC2').addClass("onLC")
            $('.navigation>ul>li>a').stop().animate({
                borderColor : 'rgba(0,0,0,0.3)',
                backgroundColor:'transparent'
            }, 50)
            $('.onLC>span').stop().animate({
                color : 'black'
            }, 50)
            $('.onLC').stop().animate({
                backgroundColor:'black'
            }, 50)
            }
        if (scrollY > yyPos[2]-1)
            {
            $('.navigation>ul>li>a').removeClass("onLC")
            $('.LC3').addClass("onLC")
            $('.navigation>ul>li>a').stop().animate({
                borderColor : 'rgba(255,255,255,0.5)',
                backgroundColor:'transparent'
            }, 50)
            $('.onLC>span').stop().animate({
                color : 'whitesmoke'
            }, 50)
            $('.onLC').stop().animate({
                backgroundColor:'whitesmoke'
            }, 50)
            }
        if (scrollY > yyPos[3]-1){
            $('.navigation>ul>li>a').removeClass("onLC")
            $('.LC4').addClass("onLC")
            $('.navigation>ul>li>a').stop().animate({
                borderColor : 'rgba(0,0,0,0.3)',
                backgroundColor:'transparent'
            }, 50)
            $('.onLC>span').stop().animate({
                color : 'black'
            }, 50)
            $('.onLC').stop().animate({
                backgroundColor:'black'
            }, 50)
        }
    })

    //1구역 메인베너 바꾸기
    //오른쪽 버튼
    $('.triangle>.TrBR').click(function(){
        if($('.firstBanner').hasClass("onBanner")){
            $('.secondBanner,.textBox2,.cimg2').stop().animate({
                opacity:'100%'
            },500)
            $('.firstBanner,.textBox1,.cimg1').stop().animate({
                opacity:'0%'
            },500)
            $('.firstBanner').removeClass("onBanner");
            $('.num1').removeClass("onNum");
            $('.num2').addClass("onNum");
            $('.textBox1').removeClass("onText");
            $('.textBox2').addClass("onText");
            $('.cimg1').removeClass("onImg");
            $('.cimg2').addClass("onImg");
            $('.secondBanner').addClass("onBanner");
            

        }else if($('.secondBanner').hasClass("onBanner")){
            $('.thirdBanner,.textBox3,.cimg3').stop().animate({
                opacity:'100%'
            },500)
            $('.secondBanner,.textBox2,.cimg2').stop().animate({
                opacity:'0%'
            },500)
            $('.secondBanner').removeClass("onBanner");
            $('.num2').removeClass("onNum");
            $('.num3').addClass("onNum");
            $('.textBox2').removeClass("onText");
            $('.textBox3').addClass("onText");
            $('.cimg2').removeClass("onImg");
            $('.cimg3').addClass("onImg");
            $('.thirdBanner').addClass("onBanner");
        }else if($('.thirdBanner').hasClass("onBanner")){
            $('.firstBanner,.textBox1,.cimg1').stop().animate({
                opacity:'100%'
            },500)
            $('.thirdBanner,.textBox3,.cimg3').stop().animate({
                opacity:'0%'
            },500)
            $('.thirdBanner').removeClass("onBanner");
            $('.num3').removeClass("onNum");
            $('.num1').addClass("onNum");
            $('.textBox3').removeClass("onText");
            $('.textBox1').addClass("onText");
            $('.cimg3').removeClass("onImg");
            $('.cimg1').addClass("onImg");
            $('.firstBanner').addClass("onBanner");
        }
    })
    //왼쪽 버튼
    $('.triangle>.TrBL').click(function(){
        if($('.firstBanner').hasClass("onBanner")){
            $('.thirdBanner,.textBox3,.cimg3').stop().animate({
                opacity:'100%'
            },500)
            $('.firstBanner,.textBox1,.cimg1').stop().animate({
                opacity:'0%'
            },500)
            $('.firstBanner').removeClass("onBanner");
            $('.num1').removeClass("onNum");
            $('.num3').addClass("onNum");
            $('.textBox1').removeClass("onText");
            $('.textBox3').addClass("onText");
            $('.cimg1').removeClass("onImg");
            $('.cimg3').addClass("onImg");
            $('.thirdBanner').addClass("onBanner");

        }else if($('.thirdBanner').hasClass("onBanner")){
            $('.secondBanner,.textBox2,.cimg2').stop().animate({
                opacity:'100%'
            },500)
            $('.thirdBanner,.textBox3,.cimg3').stop().animate({
                opacity:'0%'
            },500)
            $('.thirdBanner').removeClass("onBanner");
            $('.num3').removeClass("onNum");
            $('.num2').addClass("onNum");
            $('.textBox3').removeClass("onText");
            $('.textBox2').addClass("onText");
            $('.cimg3').removeClass("onImg");
            $('.cimg2').addClass("onImg");
            $('.secondBanner').addClass("onBanner");
        }else if($('.secondBanner').hasClass("onBanner")){
            $('.firstBanner,.textBox1,.cimg1').stop().animate({
                opacity:'100%'
            },500)
            $('.secondBanner,.textBox2,.cimg2').stop().animate({
                opacity:'0%'
            },500)
            $('.secondBanner').removeClass("onBanner");
            $('.num2').removeClass("onNum");
            $('.num1').addClass("onNum");
            $('.textBox2').removeClass("onText");
            $('.textBox1').addClass("onText");
            $('.cimg2').removeClass("onImg");
            $('.cimg1').addClass("onImg");
            $('.firstBanner').addClass("onBanner");
        }
    })

    setInterval(function(){
        $('.triangle>.TrBR').click()
        },10000);
})