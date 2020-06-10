var loopLength = $('.text-truncated').length

for (let i = 0; i < loopLength; i++) {
    var element = $('.text-truncated')[i]
    var string = $('.text-truncated')[i].textContent
    if (string.length > 100) {
        string = string.substring(0, 99) + "...";
        console.log(element.innerHTML = string)
    }
}

$('.more-button').on('click', function() {
    if ($(this).html() == 'More') {

        $(this).html('Close')
    } else {

        $(this).html('More')
    }

})

$('#more1').on('click', function() {
    $('.more1-text').html("Amazing lady, would highly recommend her. Great customer service, fantastic skills and value for money. I wouldn't go anywhere else 😍😊 xx")

})

$('#more2').on('click', function() {
    $('.more2-text').html("Amanda has been cutting my hair for the last 10 years. She does such a great job I've never considered trying anyone else and before I found her I tried lots of salons. She is a brilliant colourist and will advise on what would suit your hair. I couldn't recommend her enough!")
})

$('#more3').on('click', function() {
    $('.more3-text').html("Absolutely amazing, wouldnt go anywhere else. Lovely and her skills are second to none. Always walk out feeling fab and have tons of compliments on my hair 👍👍👍👍❤❤❤ xxx")
})

$('#more4').on('click', function() {
    $('.more4-text').html("Been today for the first time, Amanda was really friendly and done a great job with my hair. Would really recommend 👍🏽")
})