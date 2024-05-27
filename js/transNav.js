$(document).ready(function(){
	$(window).scroll(function(){
		let scroll = $(window).scrollTop();
		// DOM = document object model
		// BOM = Browser objet model

		if (scroll > 50) {
			$('#navbar').css('background','rgba(254, 191, 16, 1)');
			$('#navbar a').css('color','white');
			$('#navbar a').css('text-shadow', 'rgb(6, 22, 28) 2px 0px 0px, rgb(6, 22, 28) 1.75517px 0.958851px 0px, rgb(6, 22, 28) 1.0806px 1.68294px 0px, rgb(6, 22, 28) 0.141474px 1.99499px 0px, rgb(6, 22, 28) -0.832294px 1.81859px 0px, rgb(6, 22, 28) -1.60229px 1.19694px 0px, rgb(6, 22, 28) -1.97998px 0.28224px 0px, rgb(6, 22, 28) -1.87291px -0.701566px 0px, rgb(6, 22, 28) -1.30729px -1.5136px 0px, rgb(6, 22, 28) -0.421592px -1.95506px 0px, rgb(6, 22, 28) 0.567324px -1.91785px 0px, rgb(6, 22, 28) 1.41734px -1.41108px 0px, rgb(6, 22, 28) 1.92034px -0.558831px 0px');
			
			$('#navbar').css('transition', 'background 1s ease-in');
			$('#navbar a').css('transition','color 1s ease-in');
			$('#navbar a').css('transition', 'text-shadow 1s ease-in');
		}else{
			$('#navbar').css('background','transparent');
			$('#navbar a').css('color','rgba(16, 64, 254, 1)');
			$('#navbar a').css('text-shadow','rgb(219, 237, 245) 2px 0px 0px, rgb(219, 237, 245) 1.75517px 0.958851px 0px, rgb(219, 237, 245) 1.0806px 1.68294px 0px, rgb(219, 237, 245) 0.141474px 1.99499px 0px, rgb(219, 237, 245) -0.832294px 1.81859px 0px, rgb(219, 237, 245) -1.60229px 1.19694px 0px, rgb(219, 237, 245) -1.97998px 0.28224px 0px, rgb(219, 237, 245) -1.87291px -0.701566px 0px, rgb(219, 237, 245) -1.30729px -1.5136px 0px, rgb(219, 237, 245) -0.421592px -1.95506px 0px, rgb(219, 237, 245) 0.567324px -1.91785px 0px, rgb(219, 237, 245) 1.41734px -1.41108px 0px, rgb(219, 237, 245) 1.92034px -0.558831px 0px');

			$('#navbar a').css('transition','text-shadow 1s ease-in');
			$('#navbar a').css('transition', 'color 1s ease-in');
		}

		if (scroll > 10) {
			$('#navMobile').css('background','rgba(254, 191, 16, 1)');
			$('#navMobile').css('transition', 'background 1s ease-in');
		}else{
			$('#navMobile').css('background','transparent');
		}
	});
});