// 原生Js选择一个元素并实现一些功能
document
.getElementById('a')
.style
.background = 'blue';

// 用JQuery来实现, $ = jQuery
$('#b')
  .css('background','green');

// 用JQuery来实现CSS的选择器功能
$('div')
  .css('color','gray');

$('#a')
  .css('background','red');

$('#a p')
  .css('border','2px solid black');

$('.b').css('background','pink');
