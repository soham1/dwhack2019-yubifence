function materializeInit() {
    $('.sidenav').sidenav();
}

function loginForm() {
    var loginForm = $('.loginForm');
    loginForm.submit(function(event) {
        console.log('INSIDE LOGIN FORM');
        $.ajax({
            type: loginForm.attr('method'),
            url: loginForm.attr('action'),
            data: loginForm.serialize(),
            success: function(data) {
                console.log('LOGIN AJAX OK', data);
            }
        });
        event.preventDefault();
    });
}

function jointRegisterForm() {
    var jointRegisterForm = $('.jointRegisterForm');
    jointRegisterForm.submit(function(event) {
        console.log('INSIDE LOGIN FORM');
        $.ajax({
            type: jointRegisterForm.attr('method'),
            url: jointRegisterForm.attr('action'),
            data: jointRegisterForm.serialize(),
            success: function(data) {
                console.log('REGISTER AJAX OK', data);
            }
        });
        event.preventDefault();
    });
}

function tomtomInit() {
    $("#address1").blur(function() {
        findGeometry(map1, "address1", "buffer1");
    });

    $("#address2").blur(function() {
        findGeometry(map2, "address2", "buffer2");
    });

    var geofencingApiURL = 'https://api.tomtom.com/geofencing/1/';

    var turfOptions = {
        steps: 60,
        units: "meters"
    };

    var geoJsonOptions = {
        style: {
            color: "#2FAAFF",
            opacity: 0.8
        }
    };

    var map1 = tomtom.L.map("map1", {
        key: apiKey
    });

    map1.locate({ setView: true, maxZoom: 13 });

    var map2 = tomtom.L.map("map2", {
        key: apiKey
    });

    map2.locate({ setView: true, maxZoom: 13 });

    function findGeometry(map, addressId, bufferId) {
        var query = document.getElementById(addressId).value;
        fuzzySearch(query)
            .then(getAdditionalData)
            .then((additionalDataResponse) => {
                processAdditionalDataResponse(additionalDataResponse, map, addressId, bufferId)
            });
    }

    function fuzzySearch(query) {
        return tomtom
            .fuzzySearch()
            .query(query)
            .go()
            .then(function(result) {
                return result;
            });
    }

    function getAdditionalData(fuzzySearchResults) {
        console.log('FUZZY RESULTS', fuzzySearchResults[0]);
        var geometryId = fuzzySearchResults[0].dataSources.geometry.id;
        return tomtom
            .additionalData({
                geometries: [geometryId],
                geometriesZoom: 12
            })
            .go()
            .then(function(additionalData) {
                additionalData.position = fuzzySearchResults[0].position;
                return additionalData;
            });
    }

    function processAdditionalDataResponse(additionalDataResponse, map, addressId, bufferId) {
        console.log("MAP ADDRESS", map, addressId);
        console.log("ADDITIONAL DATA", additionalDataResponse);
        if (
            additionalDataResponse.additionalData &&
            additionalDataResponse.additionalData.length
        ) {
            console.log('INSIDE IF');
            
            displayPolygonOnTheMap(additionalDataResponse.additionalData[0], map, addressId, bufferId, additionalDataResponse.position);
        }
    }

    function displayPolygonOnTheMap(additionalDataResult, map, addressId, bufferId, position) {
        console.log('POSITION REAL', position);
        var geometry = additionalDataResult.geometryData.features[0].geometry;
        var buffer = parseInt(document.getElementById(bufferId).value);
        console.log('BUFFER', buffer);
        if (buffer != 0) {
            geometry = turf.buffer(geometry, buffer, turfOptions).geometry;
        }
        var geoJson = tomtom.L.geoJson(geometry, geoJsonOptions).addTo(map);
        console.log('GEOMETTRY', geometry);
        map.setView([position.lat, position.lon], 10);
    }

}

$(function() {
    materializeInit();
    loginForm();
    jointRegisterForm();
    tomtomInit();

});
