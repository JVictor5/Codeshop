$(function(){

    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow:1,
        arrow:false,
        autoplay:true,
        autoplaySpeed:2000,
        responsive:
        [

            {
                breakpoint: 768,
                settings:{
                    centerMode: true,
                    arrows: false,
                    autoplay:true,
                    autoplaySpeed:2000,
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 580,
                settings:{
                    centerMode: true,
                    arrows:false,
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 380,
                settings:{
                    centerMode:true,
                    arrows:false,
                    slidesToShow: 1
                }
            }

        ]
    });
});