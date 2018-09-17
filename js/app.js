//@prepros-prepend "./modules/header.js";
//@prepros-prepend "./modules/scrollManager.js";
//@prepros-prepend "./modules/services.js";
//@prepros-prepend "./modules/heroSlider.js";

$(document).ready(function () {
    
    const header = new Header();
    const scrollManager = new ScrollManager();

    if ($(".services").length > 0) {
        const services = new Services();
    }

    if ($(".hero__bg--slider").length > 0) {
        const heroSlider = new HeroSlider();
    }
    
});