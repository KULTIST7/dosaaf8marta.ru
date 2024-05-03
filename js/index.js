$(document).ready(() => {
    let mainSwiper = new Swiper('.slider', {
        loop: true,
        speed: 750,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    let servicesSwiper = new Swiper('.services-swiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1000: {
                slidesPerView: 3
            }
        }
    });

    Fancybox.bind("[data-fancybox]");

    $('.header__drop-down').slideUp(0);

    $('.header__burger-btn').on('click', () => {
        $('.burger').addClass('burger-open');
        $('body').addClass('body-noscroll');
    });

    $('.burger__close-btn').on('click', () => {
        $('.burger').removeClass('burger-open');
        $('body').removeClass('body-noscroll');
    });

    $('.header__menu').on('mouseover', () => {
        if ($(window).width() >= '1000') {
            $('.header__content').css('border-radius', '20px 20px 0 0');
            $('.header__drop-down').slideDown(300);
        }
    });

    $('.header').on('mouseleave', () => {
        if ($(window).width() >= '1000') {
            $('.header__drop-down').slideUp(300);
            setTimeout(() => $('.header__content').css('border-radius', '20px'), 300);
        }
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({scrollTop:0}, 500, 'swing');
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
            $('.up').addClass('up-invisible');
        }
    });
});