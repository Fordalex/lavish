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

// curent time
var now = new moment();
console.log(now.format("HH:mm:ss"));

$('#current-time').append(now.format("HH:mm:ss"))
$('#current-date').append(moment().format('dddd'))