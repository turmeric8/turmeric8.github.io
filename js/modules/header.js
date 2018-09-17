class Header {
    constructor() {
        this._$btn = $(".header__btn");
        this._$header = $(".header")
        this._$nav = $(".nav");

        this._$header.scrollToFixed();
        this._$btn.click(this.toggleNav);
    }

    toggleNav = () => {
        this._$header.toggleClass("header--active");
        this._$nav.stop().slideToggle("fast");
    }
}