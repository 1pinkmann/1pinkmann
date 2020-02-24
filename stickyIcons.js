$(window).scroll(function() {
    if (parseInt($(".cards-block").offset().top) < $(window).scrollTop()) {
      var tops = parseInt($(window).scrollTop() - $(".cards-block").offset().top);
      if (tops < $(".cards-block").height() - $(".icons-block__icon").height()) {
        $(".icons-block__icon").css("top", tops);
      }
    }
  });