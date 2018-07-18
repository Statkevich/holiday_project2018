$(function () {
    //========= this code to start slider================
    $('.info__slider .slider__list').slick({
        slidesToShow: 1,
        dots: false,
        infinite: true,
        speed: 600,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipeToSlide: true
    });
    // ========= this code for customer button =====================
    $('.info__slider .slider__btn--l').on('click',function(e){
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('.info__slider .slider__btn--r').on('click',function(e){
        e.preventDefault();
        $('.slick-next').trigger('click');
    });
    //========= this code to start slider================
    $('.demands__slider__list').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        speed: 600,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipeToSlide: true
    });
    // ========= this code for customer button =====================
    $('.demands__text .slider__btn--l').on('click',function(e){
        e.preventDefault();
        $('.demands__text .slick-prev').trigger('click');
    });
    $('.demands__text .slider__btn--r').on('click',function(e){
        e.preventDefault();
        $('.demands__text .slick-next').trigger('click');
    });

});
