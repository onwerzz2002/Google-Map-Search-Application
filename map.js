
$(function() {
    
    var gc = new google.maps.Geocoder();
    var mymap = new google.maps.Map($('#mymap').get(0), {
              zoom: 12,
              center: new google.maps.LatLng(37.7749295,-122.41941550000001), // san francisco by default
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              draggable: true
    });



//click event
    $('#query').click(function() {
    
        var addr = $('#addr').val();
        if (addr == '') {
            alert("Place cannot be empty!");
            return;
        }
        
        var type = $('#selection1 option:selected').val();
        if (type == '') {
            alert("Place type cannot be empty!");
            return;
        }
        
        var range = $('#selection2 option:selected').val();
        if (range == '') {
            alert("Search range cannot be empty!");
            return;
        }
     
        gc.geocode({'address': addr}, function(result, status) {
        
            if (status == google.maps.GeocoderStatus.OK) {
                var latlng = result[0].geometry.location;                        
            
            mymap.setCenter(result[0].geometry.location);             
            initMap(latlng.lat(), latlng.lng(), type, range);           // to show the list of locations
            }
        });
    });

});
//end of click()


      // to show the list of locations
      var map;
      var infowindow;
      var allMarkers = [];
      function initMap(lat, lng, type, range) {
        var pyrmont = {lat: lat, lng: lng};
        allMarkers = [];
        
        map = new google.maps.Map(document.getElementById('mymap'), {
          center: pyrmont,
          zoom: 13
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: range,
          type: [type]
        }, callback);
      }

      function callback(results, status) {
        $("#result1").empty();       
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i],i);
          }
        }
      }
      
      
        var icon1 = {
                    url: "MarkerPictures/red-circle.png", // url
                    scaledSize: new google.maps.Size(40, 40), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
        };
        
        var icon2 = {
                    url: "MarkerPictures/blu-circle.png", // url
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
        };

      function createMarker(place,id) {
        var placeLoc = place.geometry.location;                           
        
        var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            id: id,
            icon: icon1
            
        });
        allMarkers.push(marker);       
 
        google.maps.event.addListener(marker, 'mouseover', function() {
            marker.setIcon(icon2);         
          
          infowindow.setContent('<span id="marker">' + place.name + '</span>');
          infowindow.open(map, this);              
          
        });
        
        google.maps.event.addListener(marker, 'mouseout', function() {
            marker.setIcon(icon1);
            infowindow.close();
        });
        
        
            $("#result1").append('<div class="data" id='+id+' onmouseover="hover('+id+')" onmouseout="out('+id+')">'+place.name+'</div>');
               
        }



//color of arrow on the map changes when mouse over the corresponding store information on the left
function hover(id) {
    for ( var i = 0; i< allMarkers.length; i++) {      
        if (id === allMarkers[i].id) {
           // alert(id);
           allMarkers[i].setIcon(icon2);
           break;
        }
   }
}

//color of arrow on the map changes back when mouse moves out the corresponding store information on the left
function out(id) {  
    for ( var i = 0; i< allMarkers.length; i++) {
        if (id === allMarkers[i].id) {
           allMarkers[i].setIcon(icon1);
           break;
        }
   }
}

