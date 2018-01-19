$('.grandpa')
  .find('.child') //从上往下找
    .css('border', '2px solid #999')

$('#child1')
  .parent() //找child1的父元素 ，从下往上找
    .css('border', '2px solid #666')

$('#child1')
  .parents('.grandpa') //找child1的根元素 ，从下往上找
    .css('border', '2px solid #333')

$('.child')
  .filter('.not-boy') //区分child的同级元素
    .css('background', 'red')
