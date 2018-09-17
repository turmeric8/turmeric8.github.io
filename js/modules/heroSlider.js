class HeroSlider {
    constructor() {
        this._$slider = $(".hero__bg--slider");
        this._$slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            appendDots: $(".hero__slider-controls"),
            customPaging: () => {
                return "";
            },
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true
        });
    }
}