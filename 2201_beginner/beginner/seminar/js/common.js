// JRA vol.1
$(window).load(function () {
    if ($('#racec_dtl').length) {
        $('<img>').attr('src', '../img/close.png');
    }
    $("#racec_dtl dl dt:not(.off)").click(function () {
        $(this).next().slideToggle();
        if ($(this).attr("class") == 'opn') {
            $(this).removeClass('opn');
        } else {
            $(this).addClass('opn');
        }
    });
});

// JRA vol.2
$(window).load(function(){
    $(function(){
        // modal
        $('.popup').click(function(){
            var modal = '#' + $(this).attr('data-target');
            $('.modal_area').show();
            $(modal).show();
            $(modal).find('iframe').attr('src', 'https://www.youtube.com/embed/' + $(modal).find('iframe').attr('data-src') + '?autoplay=1&loop=1&playlist=' + $(modal).find('iframe').attr('data-src'));
            $('.modalOverlay').show();
            $('.modal_close,.modalOverlay').click(function(){
                $(modal).find('iframe').attr('src', '');
                $('.modal_area').hide();
                $(modal).hide();
                $('.modalOverlay').hide();
                return false;
            });
        });
    });
    // tab_area
    $('.tab_area ul li a').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        if (! $(target).length) return false;
        $('li.current', $(this).closest('.tab_area')).removeClass('current');
        $(this).closest('.tab_area ul li').addClass('current');
        $('.inner_aco', $(target).closest('.aco_area')).removeClass('current');
        $(target).addClass('current');
    });
    // aco_area
    $('.aco_block dt').click(function(){
        $(this).next('dd').slideToggle();
		$(this).toggleClass('open');
        //$('dd').not($(this).next('dd')).slideUp();
//        if($(this).hasClass('open')) {
//            $(this).removeClass('open');
//        } else {
//            $(this).addClass('open');
//        }
//        var self = $(this);
//        $('.aco_block dt').not(self).removeClass('open');
    });
	// aco_area more
    $('.aco_more').click(function(){
		//$(this).toggleClass('open');
        $(this).next('.more_block').slideToggle();
		$(this).remove();
    });
    // qa_area
   // $('.qa_area .ques a').click(function(e){
//        e.preventDefault();
//        var target = $(this).attr('href');
//        if (! $(target).length) return false;
//        $('.ques.current', $(this).closest('.qa_area')).removeClass('current');
//        $(this).closest('.qa_area .ques').addClass('current');
//        $('.ans', $(target).closest('.ans')).removeClass('current');
//        $(target).addClass('current');
//    });
});

$(function(){
  var pagetop = $('.pagetop');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
	
	/*** Smooth Scroll ***/
    $('a[href^="#"]').click(function() {
        var speed    = 'slow';
        var href     = $(this).attr("href");
        var target   = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});

<!-- Global site tag (gtag.js) - Google Analytics -->
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-116486472-1');

