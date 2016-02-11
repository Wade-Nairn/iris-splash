// jQuery to open the links in their specific tabs.

$(function () {
    $(".mdl-tabs__panel").hide().first().show();
    $(".mdl-layout__tab-bar li:first").addClass("is-active");

    $(".mdl-layout__tab-bar a").on('click', function (e) {
        e.preventDefault();
        $(this).closest('.mdl-tabs__tab').addClass("is-active").siblings().removeClass("is-active");
        $($(this).attr('href')).show().siblings('.mdl-tabs__panel').hide(); 
    });

    var hash = $.trim( window.location.hash );
    if (hash) $('.mdl-layout__tab-bar a[href$="'+hash+'"]').trigger('click');
});



// Make the tab bar stick to the top of the page when it hits it.
// $(window).scroll(function(){
//   	var sticky = $('.mdl-layout__tab-bar'),
//         scroll = $(window).scrollTop();

//   	if (scroll >= 185) {
//   		sticky.addClass('fixed');
//   	}else{
//   		sticky.removeClass('fixed');
//   	} 
// });
