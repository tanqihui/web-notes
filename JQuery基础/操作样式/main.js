// var a = $('.a')
//   // .css({
//   //   // color: 'red',
//   //   // backgroundColor: 'black', //驼峰命名法
//   //   // 'margin-bottom': '2px', //写作字符串
//   //   // border: '8px solid gray'
//   // })
//   // .addClass('black')
//   // .removeClass('b');
//
// // console.log(a.hasClass('black'));
// // console.log(a.hasClass('b'));
//
// a.hide();
// a.show();
// // // a.fadeOut(2000); //淡出动画
// // a.fadeIn(1000); //淡入动画
// a.slideUp(1000); //上滑消失
// a.slideDown(1000);

var board = $('#board'); //广告牌演示

function toggle() {
  if(board.hasClass('active')) {
    board.removeClass('active');
  }else {
    board.addClass('active');
  }
}

setInterval(toggle,200);
