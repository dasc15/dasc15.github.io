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

// Load the map after page load
$(document).ready(function() {
    $(document.getElementById("map")).lazyLoadGoogleMaps(
        {
            key: "AIzaSyBwvZxMf7IaNFJTSf5kMnybx_Hr1iq-KR4",
            libraries: false,
            signed_in: false,
            callback: function( container, map )
            {
                var center = new google.maps.LatLng(41.1511507, -8.3561173);

                map.setOptions({ zoom: 11, center: center });
                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(41.2067462, -8.3316263),
                    title: 'Clínica Ana Silva'
                });

                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(41.0874828, -8.24865),
                    title: 'Ginásio Memorial Center Gym'
                });

                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(41.2421408, -8.1872177),
                    title: 'Ginásio ActivUp'
                });

                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(41.0515574, -8.3486782),
                    title: 'Laboratório Menezes Nogueira - Rio Mau'
                });

                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(41.182991, -8.5601058),
                    title: 'Laboratório Menezes Nogueira - Rio Tinto'
                });

                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(41.0400076, -8.2725503),
                    title: 'Laboratório Menezes Nogueira - Castelo de Paiva'
                });

                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(41.1742296, -8.3303798),
                    title: 'Ginásio Irivo Club'
                })
            }
        }
    );
});



