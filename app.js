const navSlide = () => {
    const nav = document.querySelector('.nav-link')
    const burger = document.querySelector('.burger')
    const body = document.querySelector('body')
    const navLinks = document.querySelectorAll('.nav-link li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        body.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navFade .5s ease-in forwards ${index * 0.2}s`
            }
        })
    })
}

navSlide()