// Hide Header on on scroll down
var didScroll;
var didClick;
var lastScrollTop = 0;
var delta = 30;
var navbarHeight = $('.ht-menubar').outerHeight();
console.log("H: "+ navbarHeight);
$(window).scroll(function(event){
    didScroll = true;
});

$("#papa a").click(function(event){
	if ($( "#papa a").length )
	{
		didClick = true;
		console.log("UN CLICK" + event.target);
	}
    else{console.log("VIDE")};
});


setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
	else if(didClick){
		//hasScrolled();
		didClick = false;
	}
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    console.log("H: "+ (lastScrollTop - st) +", DELTA: " + delta);
	console.log("NAV H: "+ navbarHeight);
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
		$('.section-entete > carrousel').hide();
        $('.section-entete').removeClass('ht-entete-down').addClass('ht-entete-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            //$('.section-entete').show();
			$('.section-entete').removeClass('ht-entete-up').addClass('ht-entete-down');
        }
    }
    
    lastScrollTop = st;
}