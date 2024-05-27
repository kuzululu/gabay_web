$(document).ready(function(){
	 $(".regular").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      // for responsive
        responsive:[{
            breakpoint: 1024,
            settings:{
                slidesToShow: 3,
                infinite: true
            }
        },{
            breakpoint: 600,
            settings:{
                slidesToShow: 2,
                dots: true
            }
        },{
            breakpoint: 300,
            settings: "unslick"
        }]
      });
});