$("#box").twentytwenty({
    before_label: 'ДО',
    after_label: 'ПОСЛЕ', 
});

$(document).ready(function () {
    $("#aniimated-thumbnials").lightGallery({
        controls: true,
        keyPress: true,
        thumbnail: true
    });
});