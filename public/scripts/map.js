
  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: { lat: 43.642304, lng: -79.401923 },
      mapTypeId: 'hybrid',
      styles: [

        {
          featureType: "poi",
          stylers: [
            { visibility: "off" }]
        },

        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        },
        {
          featureType: 'transit',
          stylers: [{ color: '#2f3948' }, { visibility: 'off' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }
      ]
    });

    addMarker({
      coords: { lat: 43.644708, lng: -79.402360 },
      iconImage: {
        url: '/database_photos/users/lighthouse.png', // url
        scaledSize: new google.maps.Size(150, 150), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      },
      content: '<h4><a class="blue" href="https://lighthouselabs.ca"> Lighthouse Labs </a></h4>'
    }); // Lighthouse
    addMarker({
      coords: { lat: 43.644643, lng: -79.398838 },
      iconImage: {
        url: '/database_photos/users/002-meat.png', // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      },
      content: '<h4><a class="blue" href="http://localhost:8080/restaurants/1">Porchetta & Co. <img src="/database_photos/restaurants/Porchetta/Porchetta_slide_3.jpg" width="200"></a><h4>'
    }); // Porchetta
    addMarker({
      coords: { lat: 43.644405, lng: -79.399598 },
      iconImage: {
        url: '/database_photos/users/044-burger.png', // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      },
      content: '<h4 ><a class="blue" href="http://localhost:8080/restaurants/2">Big Smoke Burger</h4> <img src="/database_photos/restaurants/big_burger/BURGER_slide_3.jpg" width="200"> </a>'
    }); // Big Smoke Burger
    addMarker({
      coords: { lat: 43.644165, lng: -79.400946 },
      iconImage: {
        url: '/database_photos/users/004-pizza.png', // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      },
      content: '<h4><a class="blue" href="http://localhost:8080/restaurants/4">Pizzaiolo <img src="/database_photos/restaurants/Pizzaiolo/Pizzaiolo_slide_2.jpg" width="200"></a></h4>'
    }); // Pizzaiolo
    addMarker({
      coords: { lat: 43.643764, lng: -79.402986 },
      iconImage: {
        url: '/database_photos/users/045-noodles.png', // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      },
      content: '<h4><a class="blue" href="http://localhost:8080/restaurants/3">Coco Rice Thai Cuisine <img src="/database_photos/restaurants/coco_rice/coco_rice_slide_2.jpg" width="200"></a></h4>'
    }); // Coco Rice Thai Cuisine

    function addMarker(props) {
      const marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: props.iconImage
      });
      if (props.iconImage) {
        marker.setIcon(props.iconImage);
      }

      const infoWindow = new google.maps.InfoWindow({
        content: props.content
      })
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
          setTimeout(function(){infoWindow.close();}, '2000');
        });
      };

    };

