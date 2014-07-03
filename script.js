/**
 * @author Rishi Iyengar
 */


function loadMap(){
	
	var mapOptions = {
		center: new google.maps.LatLng(-73.283011,40.801983),
		zoom:8
	};
	
	var map = new google.maps.Map(document.getElementById("mapDiv"),
            mapOptions);
	
}


google.maps.event.addDomListener(window, 'load', loadMap);