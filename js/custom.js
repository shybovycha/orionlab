function setup_map() {
    var map = L.map('contact-map').setView([50.489511, 30.472686], 18);

    L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);

    L.marker([50.489511, 30.472686]).addTo(map).bindPopup($('#contact-map-marker-popup-html').html()).openPopup();
}

$(document).ready(function() {
    setup_map();
});