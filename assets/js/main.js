/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('navMenu'),
      navToggle = document.getElementById('navToggle'),
      navClose = document.getElementById('navClose')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.navLink')

const linkAction = () =>{
    const navMenu = document.getElementById('navMenu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contactForm'),
      contactMessage = document.getElementById('contactMessage')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID -#form - publicKey
    emailjs.sendForm('service_hj8n2w9', 'template_kn9dci6', '#contactForm', 'LAUwd0vWdorzQS6-V' )
        .then(() => {
            contactMessage.textContent = 'Pesan Terkirim✅'
        },() => {
            contactMessage.textContent = 'Pesan gagal terkirim (ada kesalahan) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/