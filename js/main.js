

$(document).ready(function(){
    var containerHeight = $('.header').height();

    $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
        
        //parallax header    
        // if(wScroll <= containerHeight) {
        //     $('.header__middle-svg').css({
        //         'transform': 'translate(0%, '+ (wScroll/15) +'%)'
        //     });
        //     $('.header__middle').css({
        //         'transform': 'translate(0%, '+ (wScroll/8) +'%)'
        //     });
        //     // $('.header__back').css({
        //     //     'transform': 'translate(0%, '+ wScroll/17 +'%)'
        //     // });
        //     // $('.header__fore').css({
        //     //     'transform': 'translate(0%, -'+ wScroll/70 +'%)'
        //     // });
        // }
       
        // sticky header 
        if(wScroll >= 80){
            $('.nav').addClass('nav__sticky');
        } else {
            $('.nav').removeClass('nav__sticky');
        }
    });


    //menu modal
    $('.menu').click(function(){
        $('.nav__menu').toggleClass('visible');
    });

    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest('.nav__menu,.menu').length) {
          $('body').find('.nav__menu').removeClass('visible');
        //   console.log('click ouside')
        }
    });

    //dropdown modal
    $('.dropdown').hover(function() {
        var current = $(this).find('.dropdown__list');
        current.toggleClass('dropdown__list-visible');
    });
});
