


/* Flexslider */
$(window).load(function(){
  try {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
  } catch(e) {
	  return;
  }
});

/* Widowtamer */
wt.fix({
	elements: 'p',
	chars: 12,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'blockquote',
	chars: 2,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'h1',
	chars: 6,
	method: 'nbsp',
	event: 'resize'
});


