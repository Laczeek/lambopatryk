const navButton = document.querySelector('.nav__btn');
const nav = document.querySelector('.nav__links-box');
const navLinks = document.querySelectorAll('.nav__links-box-item');
const footerYear = document.querySelector('.footer-current')
const allSections = document.querySelectorAll('.section')
const navBtnBars = document.querySelector('.nav__btn-lines')

const handleNav = () => {
    nav.classList.toggle('nav__links-box--active')
    
    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav__links-box--active')
        })
    })
    handleNavLinksAnimation()
}

const handleNavLinksAnimation = () => {
    let delayTime = 0
    navLinks.forEach(item => {
        item.classList.toggle('nav__links-box-item--animation')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
}

const handleCurrentYear = () => {
    const year = new Date().getFullYear()
    footerYear.innerText = year
}

const handleObserver = () => {
     const currentSection = window.scrollY;
     allSections.forEach(section => {
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color') 
        }
        else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
     })
}

navButton.addEventListener('click', handleNav);
window.addEventListener('scroll',handleObserver)
handleCurrentYear()