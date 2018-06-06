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
