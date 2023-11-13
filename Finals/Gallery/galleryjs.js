$(document).ready(function() {
    var $lightbox = $("<div class='lightbox'></div>").hide();
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");

    $lightbox
        .append($img)
        .append($caption)
        .appendTo('body');

    $('.lightbox-gallery img').on('click', function(e) {
        e.preventDefault();

        var src = $(this).data("image-hd");
        var cap = $(this).attr("alt");

        // Hide the lightbox immediately to avoid showing the previous image
        $lightbox.hide();

        // Set up a load event for the image
        $img.on('load', function() {
            // Once the image is loaded, update the attributes and fade in the lightbox
            $img.off('load'); // Remove the load event listener to avoid potential issues
            $img.attr('src', src);
            $caption.text(cap);
            $lightbox.fadeIn('fast');
        });

        // Trigger the load event by setting the image source
        $img.attr('src', src);
    });

    $lightbox.click(function() {
        $lightbox.fadeOut('fast');
    });
});

window.addEventListener('load', function() {
    // This code will run when the page and all resources have finished loading.
    document.querySelector('.loading-screen').style.display = 'none';
});
