// removing loading window
window.addEventListener("load", function() {
    $('.loading-container').remove()
});

// show back to the top arrow
window.addEventListener('scroll', function() {
    if (window.scrollY < 500) {
        $('.back-to-top').addClass('d-none')
    } else {
        $('.back-to-top').removeClass('d-none')
    }
});