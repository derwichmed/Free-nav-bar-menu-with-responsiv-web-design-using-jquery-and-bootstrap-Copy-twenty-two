$(function (){
    $('.nav_bar_item').mouseover(function (){
        $('.nav_bar_item > div > .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show(); 
    });
    
    $('.sub_menu_item').mouseover(function (){
        $('.sub_menu_item > div > .sub_menu:visible').hide();
        $(this).find('> div > .sub_menu').show(); 
    });
    
    $('body').children().not('header').mouseover(function (){
        //$('.nav_bar_item > div > .sub_menu:visible').hide();
        //$('.sub_menu_item > div > .sub_menu:visible').hide();
        $('.sub_menu:visible').hide();
    });
    
    $('.menu_icon').click(function (){
       $('.nav_bar').css('width','0px');
       $('.nav_bar').children().fadeIn("slow");
       $('.nav_bar').show();
        $('.nav_bar').animate({
            width: '250px'
        }, 500);
    });
    
    $('.nav_bar .header img').click(function (){
        $('.nav_bar').children().fadeOut("slow");
       $('.nav_bar').animate({
            width: '0px'
        }, 500, function (){
            $('.nav_bar').hide();
        }); 
    });
});