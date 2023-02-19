const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')


}

navLink.forEach(n => n.addEventListener('click',linkAction))

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop){
            document.querySelector(',nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector(',nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll',scrollActive)

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

function scrollTop(){
    const header = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollTop)

const mixer = mixitup('.portfolio__container',{
    selectors:{
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});


