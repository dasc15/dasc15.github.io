function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(41.1372641, -8.3882892),
        zoom: 11
    ,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Markers
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
    
    
}