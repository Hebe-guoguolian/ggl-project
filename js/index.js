$(function(){
    //navd的导航条的硬件和软件显示li
   $('.nav_le ul li p').click(function(){
      $(this).next().slideToggle();
      $(this).find('i').toggleClass('cur')
   })
    $('.nav_le ul li:gt(1)').hover(function(){
        $(this).children().css({
            'text-decoration':'underline'
        })
    },function(){
        $(this).children().css({
            'text-decoration':'none'
        })
    });
    //吸顶操作//返回顶部
    var nav_top=$('.nav').offset().top;
    $(window).scroll(function(){
        var scrooTop = $(window).scrollTop();
        if(scrooTop>=nav_top){
            $('.nav').css({
                'position':'fixed',
                'top':'0',
                'left':'0',
                'z-index':'99'
            })
            $('.top-fixed').show();
        }else {
            $('.nav').css({
                'position':'static',
            })
            $('.top-fixed').hide();
        }
    });
    $('.top-fixed').click(function(){
        $('html body').animate({
            'scrollTop':0
        },200)
    });

    //con1中的tab栏切换
    $('.artical .bottom li').hover(function(){
        $(this).css({
            'background':'#eee',
        })
    },function(){
        $(this).css({
            'background':'#fff',
        })
    });

    $('.artical .bottom li').click(function(event){
        event.preventDefault();
        $(this).addClass('cur').siblings().removeClass('cur');
        var index = $(this).index();
        $('.artical .bottom div').eq(index).removeClass('active').siblings().addClass('active');
    });
    //让二维码出现
    $('.footer .center span').eq(1).hover(function(){
        $(this).children().fadeIn();
    },function(){
        $(this).children().fadeOut();
    });
    //手机端的ul出现
    $('.nav_ri .tow').click(function () {
        $(this).parents('.nav_ri').siblings('.nav_le').find('ul').slideToggle();
    });
    $('.footer_center dl dt .tow').click(function () {
        $(this).parents('dt').siblings('dd').slideToggle();
    });
})