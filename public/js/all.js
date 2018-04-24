//modal form js
$(document).ready(function() {
    window.setTimeout( function(){
        $('#modal_form').css('display', 'flex');
        $('#overlay').css('display', 'block');
        console.log('popup');
    }, 5000);

    $('#modal_close, #overlay').click( function(){
        $('#modal_form').css('display', 'none');
        $('#overlay').css('display', 'none');
    });
});

//menu change color js depends on section
var top1 = $('#header-section').offset().top;
var top2 = $('#about-section').offset().top;
var top3 = $('#forpublishers-section').offset().top;
var top4 = $('#foradvertisers-section').offset().top;
var top5 = $('#contacts-section').offset().top;

$(document).on( 'scroll' ,function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= top1 && scrollPos < top2) {
        $('#about-menu-text').css('color', '#333333');
        $('#forpublishers-menu-text').css('color', '#333333');
        $('#foradvertisers-menu-text').css('color', '#333333');
    } else if (scrollPos >= top2 && scrollPos < top3) {
        $('#about-menu-text').css('color', '#fff');
        $('#forpublishers-menu-text').css('color', '#333333');
    } else if (scrollPos >= top3 && scrollPos < top4) {
        $('#forpublishers-menu-text').css('color', '#cc0000');
        $('#about-menu-text').css('color', '#333333');
        $('#foradvertisers-menu-text').css('color', '#333333');
    }
    else if (scrollPos >= top4 && scrollPos < top5) {
        $('#foradvertisers-menu-text').css('color', '#fff');
        $('#about-menu-text').css('color', '#333333');
        $('#forpublishers-menu-text').css('color', '#333333');
    }
    else if (scrollPos >= top5) {
        $('#contacts-menu-text').css('color', '#cc0000');
    }
});

// animation change color of background text depends on choosen textblock

$(document).ready(function() {

    $('.forpublishers-row-one__text').hover(function(){
        $('.background-text').css('color', 'yellow');
    })

    $('.forpublishers-row-one__text').mouseout(function(){
        $('.background-text').css('color', 'rgba(51, 51, 51, 0.05)');
    })

    $('.forpublishers-row-three__text').hover(function(){
        $('.background-text').css('color', 'green');
    })

    $('.forpublishers-row-three__text').mouseout(function(){
        $('.background-text').css('color', 'rgba(51, 51, 51, 0.05)');
    })

});



