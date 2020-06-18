$('body').prepend(
  '<div id="fullbg_base"><div id="fullbg_stretch">' +
  '<img src="./assets/img/top_bg.jpg">' +
  '</div></div>'
);

$(function(){
  $.ajaxSetup({cache:false});

  $(window).load(function(){
    let stretchImg = $('#fullbg_stretch').children('img');

    $('#fullbg_base').css({top:'0',left:'0',position:'absolute',zIndex:'-1'});
    $('#fullbg_stretch').css({top:'0',left:'0',position:'fixed',zIndex:'-1',overflow:'hidden'});
    let selfWH = stretchImg.width() / stretchImg.height();

    function bgAdjust(){
      let bgWidth = $(window).width();
      let bgHeight = bgWidth / selfWH;

      if(bgHeight < $(window).height()){
        bgHeight = $(window).height();
        bgWidth = bgHeight * selfWH;
      }
      $('#fullbg_stretch').css({width:bgWidth,height:bgHeight});
      $(stretchImg).css({width:bgWidth,height:bgHeight});
    }
    bgAdjust();

    $(window).bind('load resize',function(){bgAdjust()});

    let contentsHeight = $('#contents').height();
    $('#contents').prepend('<div id="overlaybg"></div>');
    $('#overlaybg').css({height:(contentsHeight),opacity:'0.3'});
  });
});