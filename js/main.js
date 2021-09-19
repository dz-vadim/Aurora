(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
        if (window.screen.width < 768) {
            if (window.pageYOffset > 50) {
                $('.header__search_second').removeClass('.open_flex');
                $('.cross_icon_black').hide();
                $('.search_icon').hide();
                $('.search_icon_black').show();
            } else {
                $('.search_icon_black').hide();
                $('.search_icon').show();
            }
        }
        else {
            $('.search_icon').hide();
            $('.search_icon_black').hide();
        }

    };
}());

$('#menu-toggle').click(function () {
    $(this).toggleClass('open');
    $('.header__nav').toggleClass('open');
    $('.arrow_right_h').toggleClass('open');
    const header = document.querySelector('.header');
    header.classList.add('header_active');
    if (window.screen.width < 768) {
        $('.search_icon').hide();
        $('.search_icon_black').show();
    }
    else {
        $('.search_icon').hide();
        $('.search_icon_black').hide();
    }
})


$(function () {
    $('.arrow_right').on('click', function () {
        $(this).hide();
        $(this).next().next('.footer__list').show();
        $(this).next('.arrow_down').show();
    });
});

$(function () {
    $('.arrow_down').on('click', function () {
        $(this).hide();
        $(this).next('.footer__list').hide();
        $(this).prev('.arrow_right').show();
    });
});

$(function () {
    $('.search_icon').on('click', function () {
        $(this).hide();
        $('.cross_icon_black').show();
        const header = document.querySelector('.header');
        header.classList.add('header_active');
        $('.header__search_second').addClass('open_flex');
    });
});

$(function () {
    $('.cross_icon_black').on('click', function () {
        $(this).hide();
        $('.header__search_second').removeClass('open_flex');
        
        const header = document.querySelector('.header');
        if (window.pageYOffset < 50) {
            header.classList.remove('header_active');
            $('.search_icon').show();
        }
        else {
            $('.search_icon_black').show();
        }
    });
});

$(function () {
    $('.search_icon_black').on('click', function () {
        $(this).hide();
        $('.cross_icon_black').show();
        $('.header__search_second').addClass('open_flex');
    });
});


