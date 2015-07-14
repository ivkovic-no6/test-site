function initialize() {
	var myCenter = new google.maps.LatLng(44.796455, 20.436418);
	var mapProp = {
		center:myCenter,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),mapProp);

	var marker = new google.maps.Marker({
		position:myCenter,
	});

	google.maps.event.addListenerOnce(map, 'idle', function() {
		google.maps.event.trigger(map, 'resize');
		map.setCenter(myCenter);
	});

	marker.setMap(map);

	google.maps.event.addDomListener(window, 'load', initialize);
}
