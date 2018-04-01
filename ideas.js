/*global $ , console , alert , document, window */
$(function () {
  'use strict';
  
  
  //auto-run Function
  //auto-run Function
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





}); //End Start Function
