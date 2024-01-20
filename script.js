var swiper = new Swiper(".card_slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});
