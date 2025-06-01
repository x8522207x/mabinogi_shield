$(document).ready(() => {
    let isShowGoTop = false;
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 100 && isShowGoTop) {
            $('.btn_go_top').fadeIn();
        } else {
            $('.btn_go_top').fadeOut();
        }
    });

    $('.btn_go_top').on('click', (event) => {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });


    $('.btn_toggle').on('click', (event) => {
        event.preventDefault();
        $('.side_nav').toggleClass('hide');
    });

    $(".btn_pop .btn_span").on("click", (event) => {
        event.preventDefault();
        $('.pop_dimmed, .pop_mov').css('display', 'block');
        $('html, body').css('overflow', 'hidden');
        $('.pop_mov').append(
            `<iframe
                src="https://www.youtube.com/embed/-MCyST4yM7g?enablejsapi=1&amp;autoplay=1&amp;mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen=""
                data-gtm-yt-inspected-6="true"
                id="446369414"
                data-gtm-yt-inspected-20="true"
                data-gtm-yt-inspected-11184324_280="true"
                data-gtm-yt-inspected-286="true"
            ></iframe>`);
    });
    $('.btn_pop .btn_span').trigger('click');

    $('.pop_mov .pop_close').on('click', () => {
        $('.pop_dimmed, .pop_mov').css('display', 'none');
        $('html, body').css('overflow', 'visible');
        $('.pop_mov')[0].children[1].remove();
    });

    $('.cont_01 .cbox .cbox_btn.right').on('mouseenter', () => {
        $('.cont.cont_01 .intro .right').addClass('on');
    });

    $('.cont_01 .cbox .cbox_btn.right ').on('mouseleave', () => {
        $('.cont.cont_01 .intro .right').removeClass('on');
    });

    $('.cont_01 .cbox .cbox_btn.right').on('click', () => {
        isShowGoTop = true;
        $('.cont.cont_01').addClass('back');
        $('.tab.tab2').css('display', 'block');
        $('.nav').css('display', 'block');
        $('.nav ul li').addClass('on');
        $('.wrap').css('height', '9661px');
        window.scrollTo({
            top: 0,
        });
    });

    $('.btn_go_main').on('click', () => {
        isShowGoTop = false;
        $('.cont.cont_01').removeClass('back');
        $('.tab.tab2').css('display', 'none');
        $('.nav').css('display', 'none');
        $('.nav ul li').removeClass('on');
        $('.wrap').css('height', 'unset');
    });

    $('.cont.cont_08 .btn_char .char').on('click', (e) => {
        const target = $(e.currentTarget).closest(".btn_char");
        target.addClass('animate');
        target.addClass('on');
        target.animate({
            top: 346,
            marginLeft: -160
        }, 500, "easeInOutCubic", () => {
            const e = target.find(".vbox .bgm")[0];
            e.volume = .6;
            e.play();
            target.find(".bgm_info").addClass("on");
            target.animate({
                marginLeft: -592
            }, 800, "easeInOutCubic");
            target.find(".bg").animate({
                width: 1079
            }, 800, "easeInOutCubic");
        });
    });

    $('.cont.cont_08 .btn_char .bg .btn_close').on('click', (e) => {
        const t = $(e.currentTarget).closest(".btn_char");
        t.removeClass('animate').removeClass('on');
        t.find(".bgm_info").removeClass("on");
        t.find(".bg").animate({
            width: 0
        }, 700, "easeInOutCubic");
        t.animate({
            marginLeft: -160
        }, 700, "easeInOutCubic", () => {
            const e = t.find(".vbox .bgm")[0];
            e.pause();
            e.currentTime = 0;
            t.animate({
                marginLeft: -431
            }, 500, "easeInOutCubic");
            setTimeout(() => {
                t.removeClass("on").attr("style", "");
                t.removeClass("animate");
            }, 500);
        });
    });

    $('.btn_go_pop').on('click', function (event) {
        event.preventDefault();
        $('.pop_wrap').css('display', 'block');
        $('.pop').css('display', 'none');
        const index = $(this).index('.btn_go_pop');
        $('.pop').eq(index).css('display', 'block');
    });

    $('.pop .pop_close').on('click', () => {
        $('.pop_wrap').css('display', 'none');
        $('.pop').css('display', 'none');
    });

    if ($(window).width() > 768) {
    } else {

    }
});

const openVideo = (video) => {
    $('.plate_modal').toggleClass('-active');
    $('.modal').css('opacity', '1').css('visibility', 'inherit');
    $('.modal.type--youtube').toggleClass('hide');
    $('.modal_box_veil').toggleClass('-hide');
    $('.modal_source').append(
        `<iframe width="auto" height="auto" class="modal_youtube youtube--2"
        src="https://www.youtube.com/embed/${video}?si=1_stAmmA1RL7LFrt"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>`);
};
