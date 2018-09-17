class Services {
    constructor() {
        this._$category = $(".services__item-category");
        this._$category.click(this.changeSlide);

        this._$slider = $(".services__item-slider");
        this._$slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            autoplay: false,
            swipe: false
        });
    }

    changeSlide = e => {
        const _$this = $(e.currentTarget);
        _$this.addClass("services__item-category--active").siblings().removeClass("services__item-category--active");
        const index = _$this.index();
        _$this.parents(".services__item").children(".services__item-slider").slick("slickGoTo", index);
    }
}