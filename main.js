new Swiper('.card-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: true,
    spaceBetween: 16,
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        370: {
            slidesPerView: 1.4,
        },
        420: {
            slidesPerView: 1.6,
        },
        460: {
            slidesPerView: 1.8,
        },
        510: {
            slidesPerView: 2,
        },
        560: {
            slidesPerView: 2.2,
        },
       610: {
            slidesPerView: 2.4,
        },
        660: {
            slidesPerView: 2.6,
        },
        710: {
            slidesPerView: 2.8,
        },
        760: {
            slidesPerView: 3,
        },
    }
});