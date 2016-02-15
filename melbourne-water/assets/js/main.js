$(document).ready(function(){
    $(this).scrollTop(0);

    // jQuery to open the links in their specific tabs.
    $(function () {
        $(".mdl-layout__tab-panel").hide().first().show();
        $(".mdl-layout__tab-bar a:first").addClass("is-active");

        $(".mdl-layout__tab-bar a").click( function (e) {
            e.preventDefault();
            $(this).closest('.mdl-layout__tab-bar > a').addClass("is-active").siblings().removeClass("is-active");
            $($(this).attr('href')).show().siblings('.mdl-layout__tab-panel').hide();
            $("body, html").animate({ scrollTop: $(this) });
        });

        var hash = $.trim( window.location.hash );
        if (hash) $('.mdl-layout__tab-bar a[href$="'+hash+'"]').trigger('click');
      
    });


});
