// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -34.606137, lng: -58.436054};///-34.606137, -58.436054
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }