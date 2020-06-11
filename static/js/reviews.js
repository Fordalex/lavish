// changed button contents

$('body').on('click', '.more-button', function() {
    if ($(this).html() == 'More') {
        $(this).html('Close')
    } else {
        $(this).html('More')
    }
    var target = '.'.concat(this.id)
    $(target).toggleClass('d-none')
})

// opp object

function review(name, rating, comment, date, more) {
    this.name = name
    this.rating = rating
    this.comment = comment
    this.date = date
    this.more = more
}

// Create the review and their review

var michellesReview = new review(
    'Michelle Wrigley',
    5,
    "Amazing lady, would highly recommend her. Great customer service, fantastic skills and value for money. I wouldn't go anywhere else 😍😊 xx",
    new Date('2020-06-08'));

var rachelsReview = new review(
    'Rachel Barras',
    5,
    "Amanda has been cutting my hair for the last 10 years. She does such a great job I've never considered trying anyone else and before I found her I tried lots of salons. She is a brilliant colourist and will advise on what would suit your hair. I couldn't recommend her enough!",
    new Date('2020-06-08'));

var krissysReview = new review(
    'Krissy Evans',
    5,
    "Absolutely amazing, wouldnt go anywhere else. Lovely and her skills are second to none. Always walk out feeling fab and have tons of compliments on my hair 👍👍👍👍❤❤❤ xxx",
    new Date('2020-04-15'));

var jadesReview = new review(
    'Jade Walton',
    5,
    "Been today for the first time, Amanda was really friendly and done a great job with my hair. Would really recommend 👍🏽",
    new Date('2020-03-21'));

var katiesReview = new review(
    'Katie Johnson',
    5,
    "Really pleased with my cut today. Lovely friendly salon and great prices. I’ll be back x",
    new Date('2020-03-12'));

var kerrysReview = new review(
    'Kerry White ',
    5,
    "Amanda is fab at what she does. So friendly and chatty making your appointment enjoyable. Im always over the moon with the finished results. 100% recommend. Wouldnt let anyone else do my hair. x",
    new Date('2020-02-25'));

var dawnsReview = new review(
    'Dawn Marie Williamson',
    5,
    "1st time I went and Amanda was amazing. Great cut great colour.",
    new Date('2020-04-05'));

var daniellesReview = new review(
    'Danielle Measures',
    5,
    "very welcoming and relaxing great atmosphere laughing and chatting",
    new Date('2020-03-12'));

var natailesReview = new review(
    'Natalie Hirst',
    5,
    "Amanda is the only hairdresser that listens to my needs. Am a 6 monther meaning I always leave 6 months between appointments and she never makes me feel uncomfortable like most! best hairdresser in Yorkshire",
    new Date('2020-02-25'));

// Add the reviewer to the list of reviewers

var allReviews = [michellesReview, rachelsReview, krissysReview, jadesReview, katiesReview, kerrysReview, dawnsReview, daniellesReview, natailesReview]


// style the reviews

function stylingReview(reviewer, id) {

    // rating count
    var rating = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'

    // format the date
    var reviewDate = reviewer.date.toString()
    var day = reviewDate.slice(8, 10)
    var month = reviewDate.slice(4, 7)
    var year = reviewDate.slice(11, 15)
    var formatedDate = day.concat(' ', month, ' ', year)

    // trucate comment
    if (reviewer.comment.length > 100) {
        var truncatedComment = reviewer.comment.substring(0, 99) + "...";
        var fullComment = reviewer.comment
        var moreButton = `<p class="m-0 text-theme-colour more-button" id="reviews-comment-${id}">More</p>`
    } else {
        var truncatedComment = reviewer.comment
        var moreButton = ''
    }

    var styledReview = `
    <div class="col-12 col-md-6 col-lg-4 px-3 py-1 px-md-5 mt-3">
        <hr class="d-block d-md-none mt-0">
        <h5>${reviewer.name}</h5>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        <p class="mt-2 mb-0 reviews-comment-${id}">${truncatedComment}</p>
        <p class="mt-2 mb-0 reviews-comment-${id} d-none">${fullComment}</p>
        <div class="row m-0 p-0 mt-3">
            <div class="col-6 p-0">
                <p class="m-0 text-small text-secondary"><b>Date:</b> ${formatedDate}</p>
            </div>
            <div class="col-6 p-0 d-flex justify-content-end">
                ${moreButton}
            </div>
        </div>
    </div>
    `
    return styledReview
}


// append the sorted reviews on to the home page

function compare(a, b) {
    return b.date - a.date
}

var sortReviews = allReviews.sort(compare)

for (let i = 0; i < 3; i++) {
    // add the horizontal lines for the 
    if (i % 3 == 0) {
        $('#reviews-container').append(`<div class="col-12 m-0 p-0 d-none d-lg-block"><hr></div>`)
    }
    if (i % 2 == 0) {
        $('#reviews-container').append(`<div class="col-12 m-0 p-0 d-none d-md-block d-lg-none"><hr></div>`)
    }
    $('#reviews-container').append(stylingReview(sortReviews[i], i))
}

// filter reviews

$('#filter-date').on('click', function() {

    $('#reviews-container').html("")

    // get search date option, newest or oldest
    if ($('#sort-date-review').val() == 'Newest First') {
        function compare(a, b) {
            return b.date - a.date
        }
    } else {
        function compare(a, b) {
            return a.date - b.date
        }
    }

    var sortReviews = allReviews.sort(compare)

    // append the amount of reviews chosen by the user
    var view = $('#show-amount-review').val()

    for (let i = 0; i < view; i++) {
        // add the horizontal lines for the 
        if (i % 3 == 0) {
            $('#reviews-container').append(`<div class="col-12 m-0 p-0 d-none d-lg-block"><hr></div>`)
        }
        if (i % 2 == 0) {
            $('#reviews-container').append(`<div class="col-12 m-0 p-0 d-none d-md-block d-lg-none"><hr></div>`)
        }
        $('#reviews-container').append(stylingReview(sortReviews[i], i))
    }

});