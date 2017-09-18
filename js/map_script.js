function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(41.20, -8.31),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Markers
    new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(41.2067462, -8.3316263),
        title: 'Clínica Ana Silva'
    });
}