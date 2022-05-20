import '../scss/main.scss';
import 'slick-slider';
import 'jquery-nice-select';
import 'magnific-popup';
import noUiSlider from 'noUiSlider';

$('.popup-youtube').magnificPopup({
    type: 'iframe',
});

$('.image-popup').magnificPopup({
    type: 'image',
});

$('.select-init').niceSelect();

$('.home-slider__slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
});

$('.products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 1500,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

$('.shop-mob__button_filters').click(function () {
    $('body').addClass('open-filters');
});

$('.filters-mob_close').click(function () {
    $('body').removeClass('open-filters');
});

$('.filters__view_mob').click(function () {
    $('body').removeClass('open-filters');
});

$(document).ready(function () {
    $('.card-slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 1500,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.card-slider__lg',
    });
    $('.card-slider__lg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 1500,
        asNavFor: '.card-slider__nav',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    dots: true,
                },
            },
        ],
    });
    $('.about-first__timeline').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: true,
        speed: 0,
        arrows: false,
        variableWidth: true,
        asNavFor: '.about-first__slider',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
    $('.about-first__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1500,
        fade: true,
        arrows: true,
        asNavFor: '.about-first__timeline',
    });
    $('.gallery__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $('.projects__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('.products__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [10000, 40500],
        connect: true,
        step: 500,
        range: {
            min: 10000,
            max: 150000,
        },
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        const arr = [null, null];
        arr[i] = value;

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}

$('.filters__item-title_header').click(function () {
    $(this).toggleClass('filters__item-title_header--open');
});

$('.centers__footer-btn').click(function () {
    $('body').toggleClass('open-thanks');
});

$('.tv__content-btn').click(function () {
    $('body').toggleClass('open-feedback');
});

$('.modal-backdrop').click(function () {
    $('body').removeClass('open-thanks');
    $('body').removeClass('open-add');
    $('body').removeClass('open-feedback');
});

$('.card-order__add').click(function () {
    $('body').toggleClass('open-add');
});

const cardMini = document.querySelector('.card-mini');
function windowScroll() {
    cardMini.classList.toggle('card-mini_scrolled', cardMini.scrollTop > 550 || document.documentElement.scrollTop > 550);
}
if (cardMini) {
    window.onscroll = function () {
        windowScroll();
    };
}

$('.mob-header__burger').click(function () {
    $('body').toggleClass('open-nav');
});

$('.mob-menu__open').click(function () {
    $(this).parent('.mob-menu__item').toggleClass('mob-menu__item_active');
});

$('.footer-nav__title').click(function () {
    $(this).toggleClass('footer-nav__title_open');
});