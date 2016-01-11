window.$ = window.jQuery = require( 'jquery' );
var bootstrap = require( 'bootstrap' ),
  $ = window.jQuery;

$( 'a[href^="' + location.pathname.split( "/" )[1] + '"]' ).each(function() {
  var $this = $(this);

  if($this.parent().is('li')) {
    $this.parent().addClass('active');
  }
  else {
    $this.addClass('active');
  }
});