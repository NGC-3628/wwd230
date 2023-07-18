window.addEventListener('DOMContentLoaded', function() {
    var lazyLoadImages = document.querySelectorAll('.lazy');

    var lazyLoad = function() {
      for (var i = 0; i < lazyLoadImages.length; i++) {
        if (lazyLoadImages[i].getAttribute('data-src')) {
          lazyLoadImages[i].setAttribute('src', lazyLoadImages[i].getAttribute('data-src'));
          lazyLoadImages[i].removeAttribute('data-src');
        }
      }
    };

    var lazyLoadThrottleTimeout;
    if (lazyLoadImages.length > 0) {
      window.addEventListener('scroll', function() {
        if (lazyLoadThrottleTimeout) {
          clearTimeout(lazyLoadThrottleTimeout);
        }

        lazyLoadThrottleTimeout = setTimeout(function() {
          lazyLoad();
        }, 200);
      });
    }

    lazyLoad();
  });