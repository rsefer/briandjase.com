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

// mapboxgl.accessToken = 'pk.eyJ1Ijoic2VmZXJkZXNpZ24iLCJhIjoiY2pocDZ4ZHlxNDVocDM2bTc5OW05Z3h4YSJ9.Ofd0_UrlAyYYU9kRJVWdRQ';
//
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/seferdesign/cjhp7c6fx3uxu2st8p1o7opmv',
//   zoom: 13,
//   maxZoom: 14,
//   center: [-87.661437, 41.887771],
//   attributionControl: false,
//   interactive: false
// });
