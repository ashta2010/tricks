/*global $ , console , alert , document, window */
$(function () {
  'use strict';
  
  
  //Auto-run and Start Function
  //Auto-run and Start Function
  (function () {
  }()); 

  
  
  
 //Check max Heigh in div and make all divs like it 
 //Check max Heigh in div and make all divs like it   
 var maxh = 0;
    $('.container > div').each(function () {

        if ($(this).height() > maxh) {

            console.log( $(this).height());
            maxh = $(this).height();
        }
        
        maxh = $(this).height();
    });  
console.log('max H = ' + maxh);
$('.container > div').height(maxh);



  
  
  
//Check if Div have not another div
//Check if Div have not another div
  $("div").not(':has(anotherDiv)').remove();
  
  
  
  
  
  //Filter without plugin
  //Filter without plugin
  $('.chos li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');


        if ($(this).data('showw') == 'all') {
            $('.imgs .col-md-4').css("opacity", '1');

        } else {
            $('.imgs .col-md-4').css("opacity", '0.2');
            $($(this).data('showw')).css("opacity", '1');
        }

});
  
  
  
  //Make footer under body in small html
  if ($('body').height() < 900) {
        console.log('the body is small');
        $('body').css({
            'min-height': '100%'
        });

        $('.footer').css({
            position: "absolute",
            right: 0,
            bottom: 0,
            left: 0,
        });

    }


//Media Query with Jquery with resize
//Media Query with Jquery with resize
$(window).resize(function(){
       if ($(window).width() <= 320) {  
              // is mobile device
       }     
});
  
  
//Media Query with Jquery on Reload
//Media Query with Jquery on Reload
    if (window.matchMedia('(max-width: 767px)').matches) {
        //...
    } else {
        //...
    }



}); //End Start Function
