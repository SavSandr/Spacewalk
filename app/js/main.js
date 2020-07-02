$(function () {
    
    $('.item__arrow').on('click', function () {
        $(this).next().slideToggle();
    });

    $('.slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right.png" alt=""></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    new WOW().init();

});