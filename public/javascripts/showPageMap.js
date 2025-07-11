mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/light-v10', // style URL
	center: campground.geometry.coordinates, // starting position [lng, lat]
    config: {
            basemap: {
                theme: 'monochrome',
                lightPreset: 'light'
            }
        },
	zoom:  10, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

var marker1 = new mapboxgl.Marker()
        .setLngLat(campground.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset: 25})
            .setHTML(
                `<h3> ${campground.title}<\h3> `
            )
        )
        .addTo(map);