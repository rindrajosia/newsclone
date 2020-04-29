( function( $ ) {
    $( document ).ready( function() {
        $( window ).scroll( function() {
	    var menu = document.getElementById("menuscroll");
            if ( $( this ).scrollTop() > 200 ) {
		menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        } );
    } );
} )( jQuery );


