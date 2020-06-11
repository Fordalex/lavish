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
    "08/06/2020");

var rachelsReview = new review(
    'Rachel Barras',
    5,
    "Amanda has been cutting my hair for the last 10 years. She does such a great job I've never considered trying anyone else and before I found her I tried lots of salons. She is a brilliant colourist and will advise on what would suit your hair. I couldn't recommend her enough!",
    "08/06/2020");

var krissysReview = new review(
    'Krissy Evans',
    5,
    "Absolutely amazing, wouldnt go anywhere else. Lovely and her skills are second to none. Always walk out feeling fab and have tons of compliments on my hair 👍👍👍👍❤❤❤ xxx",
    "15/04/2020");

// Add the reviewer to the list of reviewers

var allReviews = [michellesReview, rachelsReview, krissysReview]

// style the reviews

function stylingReview(reviewer) {

    var rating = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'

    var styledReview = `
    <div class="col-12 col-md-6 col-lg-4 px-3 py-1 px-md-5">
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

for (let i = 0; i < allReviews.length; i++) {
    $('#reviews-container').append(stylingReview(allReviews[i]))
}