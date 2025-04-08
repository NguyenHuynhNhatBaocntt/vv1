var swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    loop: true, // Enables infinite loop
    autoplay: {
        delay: 3000, // Time between slides (in milliseconds)
        disableOnInteraction: false, // Autoplay continues after interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});