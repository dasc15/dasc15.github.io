$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



// Load the map only after map div us shown on the user view
/*$(document).ready(function() {
    $.getScript('js/map_script.js',function(){
        $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBwvZxMf7IaNFJTSf5kMnybx_Hr1iq-KR4&callback=initMap');
    });
});*/

var scrollEventHandler = function() {
    if(isScrolledIntoView(document.getElementById('locals'))) {
        $.getScript('js/map_script.js',function(){
            $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBwvZxMf7IaNFJTSf5kMnybx_Hr1iq-KR4&callback=initMap');
        });
        unbindScrollEventHandler();
    }
}

function unbindScrollEventHandler() {
    $(document).unbind('scroll', scrollEventHandler);
}

$(document).scroll(scrollEventHandler);

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}