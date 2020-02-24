// Получилось не совсем так, как на примере, но я старался

jQuery(document).ready(function($){
	var	halfWindowH = $(window).height()*0.5,
		halfWindowW = $(window).width()*0.5,
		maxRotationY = 15,
		maxRotationX = 30,
		aspectRatio;
	
	$('.parallax').each(function(){
		$(this).on('mousemove', function(event){
			var wrapperOffsetTop = $(this).offset().top;
			if( $('html').hasClass('preserve-3d') ) {
				window.requestAnimationFrame(function(){
					moveBackground(event, wrapperOffsetTop);
				});
			}
		});
	});

	function initBackground() {
		var wrapperHeight = Math.ceil(halfWindowW*2/aspectRatio), 
			proportions = ( maxRotationY > maxRotationX ) ? 1.1/(Math.sin(Math.PI / 2 - maxRotationY*Math.PI/180)) : 1.1/(Math.sin(Math.PI / 2 - maxRotationX*Math.PI/180)),
			newImageWidth = Math.ceil(halfWindowW*2*proportions),
			newImageHeight = Math.ceil(newImageWidth/aspectRatio),
			newLeft = halfWindowW - newImageWidth/2,
			newTop = (wrapperHeight - newImageHeight)/2;

		$('.parallax').css({
			'height' : wrapperHeight,
        });	
        
		$('.mouse-parallax').addClass('is-absolute').css({
			'left' : newLeft,
			'top' : newTop,
			'width' : newImageWidth,
		});
	}

	function moveBackground(event, topOffset) {
		var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
			yPosition = event.pageY - topOffset,
			rotateX = ((yPosition-halfWindowH)/halfWindowH)*maxRotationX;

		if( rotateY > maxRotationY) rotateY = maxRotationY;
		if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
		if( rotateX > maxRotationX) rotateX = maxRotationX;
		if( rotateX < -maxRotationX ) rotateX = -maxRotationX;

		$('.mouse-parallax').css({
			'-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		});
	}
});

(function getPerspective(){
	var element = document.createElement('p'),
		html = document.getElementsByTagName('html')[0],
		body = document.getElementsByTagName('body')[0],
		propertys = {
		  'webkitTransformStyle':'-webkit-transform-style',
		  'MozTransformStyle':'-moz-transform-style',
		  'msTransformStyle':'-ms-transform-style',
		  'transformStyle':'transform-style'
		};
  
	  body.insertBefore(element, null);
  
	  for (var i in propertys) {
		  if (element.style[i] !== undefined) {
			  element.style[i] = "preserve-3d";
		  }
	  }
  
	  var st = window.getComputedStyle(element, null),
		  transform = st.getPropertyValue("-webkit-transform-style") ||
					  st.getPropertyValue("-moz-transform-style") ||
					  st.getPropertyValue("-ms-transform-style") ||
					  st.getPropertyValue("transform-style");
  
	  if(transform!=='preserve-3d'){
		html.className += ' no-preserve-3d';
	  } else {
		  html.className += ' preserve-3d';
	  }
	  document.body.removeChild(element);
  
  })();