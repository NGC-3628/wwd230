function showDescription(imageNumber) {
    var captions = document.querySelectorAll('.caption');
    for (var i = 0; i < captions.length; i++) {
        captions[i].style.display = 'none';
    }
    var selectedCaption = document.querySelector('.discovery-pic:nth-child(' + imageNumber + ') .caption');
    selectedCaption.style.display = 'block';
}
