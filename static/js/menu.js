$('.menu-button-container').on('click', function() {
    var tl = gsap.timeline();
    if ($(this).hasClass('closed')) {
        gsap.to('.alpha-circle', 0.8, { r: 1200 })
        gsap.to('.alpha-over', 1, { zIndex: 20, opacity: 0.75, })
        gsap.to(".menu-lists-container", 0.8, { 'transform': 'translateX(-50vw)', ease: 'power3' })
        gsap.to(".page-container", 0.8, { 'x': '-50vw', ease: 'power3' })
        gsap.to(".fixed-top-menu", 0.8, { 'transform': 'translateX(-50vw)', ease: 'power3' })
        gsap.from(".menu-mobile-items li", 0.5, { stagger: 0.15, 'transform': 'translateX(50vw)' })
        tl.to('.rectangle', 0.5, { stagger: 0.1, 'transform': 'scaleX(0)', ease: 'power1' }, '-=0.28')
        tl.to('.scissor-1', 0.6, { opacity: 1, ease: 'power1' }, '-=0.5')
        tl.to('.scissor-2', 0.6, { opacity: 1, ease: 'power1' }, '-=0.5')
        tl.to('.scissor-1', 1.5, { 'transform': 'rotateZ(0deg)', ease: 'elastic' }, '-=0.25')
        tl.to('.scissor-2', 1.5, { 'transform': 'rotateZ(0deg)', ease: 'elastic' }, '-=1.3')
    } else {
        tl.to('.scissor-2', 0.6, { 'transform': 'rotateZ(40deg)', ease: 'bounce' })
        tl.to('.scissor-1', 0.6, { 'transform': 'rotateZ(-40deg)', ease: 'bounce' }, '-=0.3')
        tl.to('.scissor-2', 0.6, { opacity: 0, ease: 'power1' }, '-=0.5')
        tl.to('.scissor-1', 0.6, { opacity: 0, ease: 'power1' }, '-=0.5')
        tl.to('.rectangle', 0.5, { stagger: 0.1, 'transform': 'scaleX(1)' }, '-=0.5')
        gsap.to('.alpha-circle', 0.8, { r: 10 })
        gsap.to('.alpha-over', 1, { zIndex: 4, opacity: 0, })
        gsap.to(".menu-lists-container", 0.5, { 'transform': 'translateX(0vw)' })
        gsap.to(".page-container", 0.5, { 'x': '0' })
        gsap.to(".fixed-top-menu", 0.5, { 'transform': 'translateX(0vw)' })
        gsap.from(".menu-mobile-items li", 0.5, { stagger: 0.08, 'transform': 'translateX(0vw)' })





    }

    $(this).toggleClass('closed')


})