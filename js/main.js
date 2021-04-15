

$(document).ready(function(){
    var containerHeight = $('.header').height();

    $(window).scroll(function(){
        //parallax header
        var wScroll = $(this).scrollTop();
        if(wScroll <= containerHeight) {
            $('.header__middle-1').css({
                'transform': 'translate(0%, '+ (wScroll/25) +'%)'
            });
            // $('.header__middle-2').css({
            //     'transform': 'translate(0%, '+ (wScroll/3) +'%)'
            // });
            $('.header__back').css({
                'transform': 'translate(0%, '+ wScroll/17 +'%)'
            });
            $('.header__fore').css({
                'transform': 'translate(0%, -'+ wScroll/70 +'%)'
            });
        }
       
        // sticky header 
        if(wScroll >= ($('.header__textbox').offset().top - 60)){
            $('.nav').addClass('nav__sticky');
        } else {
            $('.nav').removeClass('nav__sticky');
        }
    });


    //menu modal
    $('.menu').click(function(){
        $('.nav__menu').toggleClass('visible');
        console.log('visible toggle')
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".nav__menu,.menu").length) {
          $("body").find(".nav__menu").removeClass("visible");
        //   console.log('click ouside')
        }
    });

});