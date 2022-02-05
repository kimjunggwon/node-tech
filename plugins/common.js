$( document ).ready( function() {
    var widthW = $(window).width();
    //header hover
    function h_hover(){
        widthW = $(window).width();
        if(widthW>=1200){
            $("header").hover(
                function(){
                    $(this).addClass('on');
                },
                function(){
                    $(this).removeClass('on');
                }
            );
        }else{
            $('header').off('mouseenter mouseleave');
        }
    }
    //header scroll
    function h_scroll(){
        var scroll = $(this).scrollTop();
        widthW = $(this).width();
        if(scroll>0 && widthW>=1200){
            $("header").addClass('scroll');
            $("#wrapper").addClass('scroll');
        }else if(scroll==0 && widthW>=1200){
            $('header').removeClass('scroll');
            $('#wrapper').removeClass('scroll');
        }else if(widthW<1200){
            $('header').removeClass('scroll');
            $('#wrapper').removeClass('scroll');
        }
    }
    h_scroll();
    h_hover();

    //scroll event
    $(window).scroll(function(){
        h_scroll();
    });

    //resize event
    $(window).on("resize",function(){
        widthW = $(window).width();
        if(widthW > 1200){
			$('body').removeClass('m_body');
			$('header').removeClass('m_header');
            $('header nav').show();
            $('header nav').css('height','')
            $('header .inner .m_gnb').removeClass('ani_on');
		}else if(widthW <= 1200){
            $('header').removeClass('on');
            $('.m_f_btn.f_btn').removeClass('on')
            // m_menu();
        }
        h_scroll();
        h_hover();
    });
    
    //header mobile btn
    $('header .inner .m_gnb').click(function(){
        var m_menuB = $('header').hasClass('m_header')
		if(widthW <= 1200){
			$('body').toggleClass('m_body')
			$('header').toggleClass('m_header');
            $('.m_f_btn.f_btn').toggleClass('on')
            // m_menu()
		}else{}
        if(widthW <= 1200 && m_menuB==1){
            $(this).removeClass('ani_on');
            $(this).addClass('ani_off');
            // $(this).children().eq(0).css('transform','rotate(0deg)')
        }else if(widthW <= 1200 && m_menuB==0){
            $(this).removeClass('ani_off');
            $(this).addClass('ani_on');
            // $(this).children().eq(0).css('transform','rotate(45deg)')
        }else{}
	});

    //nav tab
    $('header nav .gnb>a').click(function(e){
		if(widthW <= 1200){
            e.preventDefault();
            $('header nav .gnb').removeClass('on')
			$(this).parent('.gnb').addClass('on')
        }
        // else if(widthW > 1200){
        //     
        // }
	});

    //scroll Top
    $('#top').click(function(){
        $("html,body").stop().animate({"scrollTop": 0 },800)
    });

    //mobile menu height
    // function m_menu(){
    //     var winH = $(window).height();
    //     var m_menuH = $('.m_header').height();
    //     var sub = winH-m_menuH
    //     console.log(sub)
    //     $('header nav').css('height',sub+'px');
    // }
    
});