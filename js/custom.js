$(document).ready(function(){






// faq section js
var faq1 = $("#faq .faq-1 ").click(function(){
    
    $(this).toggleClass('active');
    $("#faq .faqs .ans1").toggleClass('active');
    $("#faq .faqs .arrow1").toggleClass('active');
    
});

var faq2 = $("#faq .faq-2 ").click(function(){
    
    $(this).toggleClass('active');
    $("#faq .faqs .ans2").toggleClass('active');
    $("#faq .faqs .arrow2").toggleClass('active');
    
});
var faq3 = $("#faq .faq-3 ").click(function(){
    
    $(this).toggleClass('active');
    $("#faq .faqs .ans3").toggleClass('active');
    $("#faq .faqs .arrow3").toggleClass('active');
    
});
var faq4 = $("#faq .faq-4 ").click(function(){
    
    $(this).toggleClass('active');
    $("#faq .faqs .ans4").toggleClass('active');
    $("#faq .faqs .arrow4").toggleClass('active');
    
});


















// countdown section js plugin

$('.getting-started').countdown('2021/10/10', function(event) {
    $(this).html(event.strftime(' %H:%M:%S'));
    $(this).html(event.strftime('<div class="single-counter">%H<span>hours</span></div> <div class="single-counter">%M<span>mins</span></div> <div class="single-counter">%S<span>secs</span></div> '));
  });


// custom scroll bar

// $('.tournament-list').mCustomScrollbar({
//     scrollButtons:{
    
//         enable:true
        
//         }
// });


    








    
    







    // banner counter  js
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    
    // games slide
    $('.game-slider').slick({

        arrows:false,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        

    });



});