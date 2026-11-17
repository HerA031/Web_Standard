
const swiper = new Swiper('.hero-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
const body = document.querySelector('body')
const topBtn = document.querySelector('.fixedTop')
const mNavBtn = document.querySelector('.mob-nav-btn')
const navBtns = document.querySelectorAll('nav ul li a')


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        body.classList.add('scroll')

    } else {

        body.classList.remove('scroll')
    }
})

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

mNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('m-nav-open')
})