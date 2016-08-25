var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineStart = '<div class="online-entry"></div>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a class="education-link" href="#">%data%</a>';

var googleMap = '<div id="map"></div>';

var map;

function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    function locationFinder() {

        var locations = [];

        locations.push(bio.contacts.location);

        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    function createMapMarker(placeData) {

        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        bounds.extend(new google.maps.LatLng(lat, lon));

        map.fitBounds(bounds);

        map.setCenter(bounds.getCenter());
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    function pinPoster(locations) {

        var service = new google.maps.places.PlacesService(map);

        locations.forEach(function(place) {

            var request = {
                query: place
            };

            service.textSearch(request, callback);
        });
    }

    window.mapBounds = new google.maps.LatLngBounds();

    locations = locationFinder();

    pinPoster(locations);

}

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
    map.fitBounds(mapBounds);
});
