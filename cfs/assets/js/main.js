$(document).ready(function(){
    $(this).scrollTop(1);
  // Make the tab bar stick to the top of the page when it hits it.

  $(function(){
          var stickyHeader = $('.mdl-layout__tab-bar').offset().top;
            
          $(window).scroll(function(){
                  if( $(window).scrollTop() > stickyHeader ) {
                          $('.mdl-layout__tab-bar').css({position: 'fixed', top: '0px'});
                          $('.mdl-grid').css('margin-top', '2em');
                  } else {
                          $('.mdl-layout__tab-bar').css({position: 'static', top: '0px'});
                          $('.mdl-grid').css('margin-top', '0');
                  }
          });
  });

  // jQuery to open the links in their specific tabs.
  $(function () {
      $(".mdl-tabs__panel").hide().first().show();
      $(".mdl-layout__tab-bar li:first").addClass("is-active");

      $(".mdl-layout__tab-bar a").click( function (e) {
          e.preventDefault();
          $(this).scrollTop(0);
          $(this).closest('.mdl-tabs__tab').addClass("is-active").siblings().removeClass("is-active");
          $($(this).attr('href')).show().siblings('.mdl-tabs__panel').hide();
          $("body, html").animate({ scrollTop: $(this) });
      });

      var hash = $.trim( window.location.hash );
      if (hash) $('.mdl-layout__tab-bar a[href$="'+hash+'"]').trigger('click');
    
  });
});
