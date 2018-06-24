[].forEach.call(document.querySelectorAll('nav a'), function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    var targetSection = el.getAttribute('href').substring(1);
    document.querySelector('[data-section="' + targetSection + '"]').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

[].forEach.call(document.querySelectorAll('.party-member'), function(el) {
  el.addEventListener('click', function(e) {
    var popup = document.getElementById('member-popup');
    if (popup) {
      popup.parentElement.removeChild(popup);
    }
    popup = document.createElement('div');
    document.body.classList.add('popup-active');
    popup.setAttribute('id', 'member-popup');
    popup.classList.add('member-popup');
    var popupImageSource = el.getElementsByClassName('cropped')[0].src;
    if (el.getElementsByClassName('full').length > 0) {
      popupImageSource = el.getElementsByClassName('full')[0].dataset.src;
    }
    popup.innerHTML = '<div class="popup-inner"><div class="popup-inner-wrap"><div id="popup-close" class="popup-close">&times;</div><div class="party-member-inner"><img src="' + popupImageSource + '"><div class="popup-content">' + el.getElementsByClassName('party-member-inner')[0].innerHTML + '</div></div></div></div>';
    document.getElementsByTagName('body')[0].appendChild(popup);
    document.getElementById('popup-close').addEventListener('click', function(e) {
      document.body.classList.remove('popup-active');
    });
    document.getElementById('member-popup').addEventListener('click', function(e) {
      document.body.classList.remove('popup-active');
    });
  });
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VmZXJkZXNpZ24iLCJhIjoiY2pocDZ4ZHlxNDVocDM2bTc5OW05Z3h4YSJ9.Ofd0_UrlAyYYU9kRJVWdRQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/seferdesign/cji37o1wx1d6g2rpr5p3c5xd9',
  zoom: 14,
  maxZoom: 15,
  center: [-87.651695, 41.885455],
  attributionControl: false,
  interactive: false
});

map.on('load', function() {

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-87.644256, 41.879455]
            },
            "properties": {
              "title": "Old St. Patrick's Church",
              "icon": "religious-christian"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-87.673508, 41.890045]
            },
            "properties": {
              "title": "Salvage One",
              "icon": "amusement-park"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-87.651998, 41.887582]
            },
            "properties": {
              "title": "Ace Hotel",
              "icon": "lodging"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-87.637300, 41.888758]
            },
            "properties": {
              "title": "Holiday Inn",
              "icon": "lodging"
            }
          }
        ]
      }
    },
    "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["PT Sans Regular", "Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }
  });

});
