// changed button contents

$('body').on('click', '.more-button', function() {
    if ($(this).html() == 'More') {
        console.log('working')
        $(this).html('Close')
    } else {
        $(this).html('More')
    }
    console.log('working')
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
    new Date(2020, 05, 08));

var rachelsReview = new review(
    'Rachel Barras',
    5,
    "Amanda has been cutting my hair for the last 10 years. She does such a great job I've never considered trying anyone else and before I found her I tried lots of salons. She is a brilliant colourist and will advise on what would suit your hair. I couldn't recommend her enough!",
    new Date(2020, 05, 08));

var krissysReview = new review(
    'Krissy Evans',
    5,
    "Absolutely amazing, wouldnt go anywhere else. Lovely and her skills are second to none. Always walk out feeling fab and have tons of compliments on my hair 👍👍👍👍❤❤❤ xxx",
    new Date(2020, 03, 15));

var jadesReview = new review(
    'Jade Walton',
    5,
    "Been today for the first time, Amanda was really friendly and done a great job with my hair. Would really recommend 👍🏽",
    new Date(2020, 02, 21));

var katiesReview = new review(
    'Katie Johnson',
    5,
    "Really pleased with my cut today. Lovely friendly salon and great prices. I’ll be back x",
    new Date(2020, 02, 14));

var kerrysReview = new review(
    'Kerry White ',
    5,
    "Amanda is fab at what she does. So friendly and chatty making your appointment enjoyable. Im always over the moon with the finished results. 100% recommend. Wouldnt let anyone else do my hair. x",
    new Date(2020, 01, 25));

// Add the reviewer to the list of reviewers

var allReviews = [michellesReview, rachelsReview, krissysReview, jadesReview, katiesReview, kerrysReview]


// style the reviews

function stylingReview(reviewer) {

    var rating = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'

    var styledReview = `
    <div class="col-12 col-md-6 col-lg-4 px-3 py-1 px-md-5 mt-3">
        <hr class="d-block d-md-none mt-0">
        <h5>${reviewer.name}</h5>
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        <p class="mt-2 mb-0 text-truncated more2-text">${reviewer.comment}</p>
        <div class="row m-0 p-0 mt-3">
            <div class="col-6 p-0">
                <p class="m-0 text-small text-secondary">Date: ${reviewer.date}</p>
            </div>
            <div class="col-6 p-0 d-flex justify-content-end">
                <p class="m-0 text-small  more-button text-theme-colour" id="more2">More</p>
            </div>
        </div>
    </div>
    `
    return styledReview
}

// append the reviews on to the home page

for (let i = 0; i < 3; i++) {

    function compare(a, b) {
        return b.date - a.date
    }

    var sortReviews = allReviews.sort(compare)

    for (let j = 0; j < sortReviews.length; j++) {
        var reviewComment = sortReviews[i].comment
        if (reviewComment.length > 100) {
            truncatedComment = reviewComment.substring(0, 99) + "...";
            sortReviews[i].comment = truncatedComment
        } else {
            continue
        }
    }

    $('#reviews-container').append(stylingReview(sortReviews[i]))
}

// filter reviwes

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
        $('#reviews-container').append(stylingReview(sortReviews[i]))
    }

});