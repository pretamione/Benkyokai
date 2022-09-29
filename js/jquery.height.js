  $(window).on('load resize', function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    var h = window.innerHeight ? window.innerHeight : $(window).height();
    var header = $('header').outerHeight(true);
    var footer = $('footer').outerHeight(true);
    
 //600より大きい時はheaderとfooterの高さ+40を引いた値を#contentsの高さにする
 
    if (w > 600) {
      $("#contents").css('min-height', h - header - footer - 40 + 'px');
    } else {
      $("#contents").css('min-height','inherit');
    }
  });
