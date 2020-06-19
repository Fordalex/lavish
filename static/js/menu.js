var menuButton = true;


$('.toggle-menu').on('click', function() {
    if (menuButton) {
        menuButton = false
        var tl = gsap.timeline();
        if ($(this).hasClass('closed')) {
            gsap.to(".page-alpha", 0.01, { zIndex: 4 })
            gsap.to(".menu-lists-container", 0.8, { 'transform': 'translateX(-50vw)', ease: 'power3' })
            gsap.to(".back-to-top", 0.8, { 'transform': 'translateX(50vw)', ease: 'power3' })
            gsap.to(".page-container", 0.8, { 'x': '-50vw', ease: 'power3' })
            gsap.to(".fixed-top-menu", 0.8, { 'transform': 'translateX(-50vw)', ease: 'power3' })
            gsap.from(".menu-mobile-items li", 0.5, { stagger: 0.15, 'transform': 'translateX(50vw)' })
            gsap.to(".page-alpha", 0.8, { opacity: 0.9, 'transform': 'translateX(-50vw)', ease: 'power3' })
            tl.to('.rectangle', 0.4, { stagger: 0.1, 'transform': 'scaleX(0)', ease: 'power1' }, '-=0.28')
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
            tl.to(".page-alpha", 0.01, { zIndex: -1 })
            gsap.to(".page-alpha", 0.2, { opacity: 0, 'transform': 'translateX(0vw)' })
            gsap.to(".menu-lists-container", 0.2, { 'transform': 'translateX(0vw)' })
            gsap.to(".back-to-top", 0.8, { 'transform': 'translateX(0vw)', ease: 'power3' })
            gsap.to(".page-container", 0.2, { 'x': '0' })
            gsap.to(".fixed-top-menu", 0.2, { 'transform': 'translateX(0vw)' })
            gsap.from(".menu-mobile-items li", 0.2, { stagger: 0.08, 'transform': 'translateX(0vw)' })
        }
        $(".menu-button-container").toggleClass('closed')
        setTimeout(function() {
            menuButton = true
        }, 1500)
    }
})