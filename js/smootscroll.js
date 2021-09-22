const linkHead = document.querySelectorAll('.menu-list__link')
const mianScroll = document.querySelector('.main__scroll')
const newArray = [...linkHead, mianScroll]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const ID = event.target.getAttribute('href').substr(1)

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})