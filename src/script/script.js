window.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const selectHeader = document.querySelector('.select__header');
    const selectBody = document.querySelector('.select__body');
    const selectItem = document.querySelectorAll('.select__item');
    const selectSpan = document.querySelector('.select__title');
    const selectImg = document.querySelector('.select__header img')

    selectHeader.addEventListener('click', () => {
        selectBody.classList.toggle('select__body--active');

        if (selectBody.classList.contains('select__body--active')) {
            selectImg.style.transform = 'rotate(180deg)';
            selectBody.style.maxHeight = null;
        } else {
            selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
            selectImg.style.transform = 'rotate(0deg)';
        }
    });

    selectItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            selectSpan.textContent = item.textContent;
            selectBody.classList.remove('select__body--active');
            selectImg.style.transform = 'rotate(0deg)';
            selectBody.style.maxHeight = null;
        });
    });

    const headerMobile = document.querySelector('.header__mobile'),
        burger = document.querySelector('.header__burger'),
        cross = document.querySelector('.header__cross'),
        body = document.querySelector('body');

    burger.addEventListener('click', () => {
        headerMobile.classList.toggle('active');
        burger.style.display = 'none';
        cross.style.display = 'block';
        body.classList.add('noscroll');
    });

    cross.addEventListener('click', () => {
        headerMobile.classList.toggle('active');
        burger.style.display = 'block';
        cross.style.display = 'none';
        body.classList.remove('noscroll');
    });

    const modal = document.querySelector('.modal'),
        modalButtons = document.querySelectorAll('.button__modal');

    modalButtons.forEach((modalbut) => {
        modalbut.addEventListener('click', () => {
            modal.classList.add('active');

            if (!body.classList.contains('noscroll')) {
                body.classList.add('noscroll');
            };
        });
    });

    modal.addEventListener('click', (e) => {
        const isModal = e.target.closest('.modal__inner');

        if (!isModal) {
            modal.classList.remove('active');

            if (!headerMobile.classList.contains('active')) {
                body.classList.remove('noscroll');
            };
        };
    });

    const swiper = new Swiper('.slider', {
        loop: true,

        pagination: {
            el: '.slider__pagination',
        },

        navigation: {
            nextEl: '.slider__arrow--right',
            prevEl: '.slider__arrow--left',
        }
    });
});

// const form = document.querySelector('.form__elements');

// var telSelector = document.getElementById('phone');
// var imask = new InputMask('+7 (999) 999-99-99');
// imask.mask(telSelector);

// const validation = new JustValidate('.form__elements');

// validation
//     .addField('#name', [{
//         rule: 'minLength',
//         value: 2,
//         errorMessage: 'Количество символов меньше 2!'
//     },
//     {
//         rule: 'maxLength',
//         value: 30,
//         errorMessage: 'Количество символов больше 30!'
//     },
//     {
//         rule: 'required',
//         value: true,
//         errorMessage: 'Введите имя!'
//     }
//     ])
//     .addField('#phone', [{
//         rule: 'required',
//         value: true,
//         errorMessage: 'Введите номер телефона!'
//     },
//     {
//         rule: 'functon',
//         validator: function () {
//             const phone = telSelector.inputmask.unmaskedvalue();
//             return phone.length === 10;
//         },
//         errorMessage: 'Введите корректный номер телефона!'
//     }
//     ]).onSuccess((e) => {
//         if (document.querySelector('#form__check').checked) {
//             const sendForm = (data) => {
//                 return fetch('mail.php', {
//                     method: 'POST',
//                     body: JSON.stringify(data),
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8'
//                     }
//                 }).then(res => res.json())
//             };

//             const dataform = new FormData(form),
//                 user = {};

//             dataform.forEach((val, key) => {
//                 user[key] = val;
//             });

//             sendForm(user).then(data => {
//                 console.log('Отправлено');
//             });

//             e.target.reset();
//         }

//     });

phoneA = document.querySelector('.footer-contacts__number');
footerMail = document.querySelector('.footer-contacts__mail');

$(document).ready(function () {
    if ($(window).width() <= 768) {
        $(phoneA).text("+7 (812) 600-31-24");
        $(footerMail).text("zakaz@kreslasamurai.ru");
    } else {
        $(phoneA).text("+7 495 221-06-75");
        $(footerMail).text("zakaz@kresla-samurai.ru");

        $('.percs__item').click(function (e) {
            $('.percs__item').removeClass('percs__item--active');

            let target = $(e.target.closest('.percs__item'));
            if (target) {
                $(this).addClass('percs__item--active');
            }
        });
    };

    $('.facts__item').click(function (e) {

        $('.facts__item').removeClass('facts__item--active');
        $('.facts__answer').removeClass('facts__answer--active');
        $('.facts__plus').css('display', 'inline');
        $('.facts__minus').css('display', 'none');
        $('.facts__open').css('background-color', '#37A5FF');

        let target = $(e.target.closest('.facts__item'));
        if (target) {
            $(this).addClass('facts__item--active');
            $(this).find('.facts__answer').addClass('facts__answer--active');
            $(this).find('.facts__plus').css('display', 'none');
            $(this).find('.facts__minus').css('display', 'inline');
            $(this).find('.facts__open').css('background-color', '#0074D4');
        };
    });
});

$(window).resize(function () {
    if ($(window).width() <= 768) {
        $(phoneA).text("+7 (812) 600-31-24");
        $(footerMail).text("zakaz@kreslasamurai.ru");
    } else {
        $(phoneA).text("+7 495 221-06-75");
        $(footerMail).text("zakaz@kresla-samurai.ru");

        $('.percs__item').click(function (e) {
            $('.percs__item').removeClass('percs__item--active');

            let target = $(e.target.closest('.percs__item'));
            if (target) {
                $(this).addClass('percs__item--active');
            }
        });
    }
});