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
    emailjs.sendForm('service_nrmn0lq', 'template_kn9dci6', '#contactForm', 'LAUwd0vWdorzQS6-V' )
        .then(() => {
            // show sent message
            contactMessage.textContent = 'Pesan Terkirim✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 2500)

            contactForm.reset()
        },() => {
            // show error message
            contactMessage.textContent = 'Pesan gagal terkirim (ada kesalahan) ❌'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 2500)

            contactForm.reset()
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
// const scrollUp = () => {
//     const scrollUp = document.getElementsById('scroll-up')

//     this.scrollY >= 350 ? scrollUp.classList.add('showScroll')
//                     : scrollUp.classList.remove('showScroll')
// }

// window.addEventListener('scroll', scrollUp)
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navMenu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true  //animation repeat
})

sr.reveal(`.homeData, .homeSosial, .contactContainer`)
sr.reveal(`.homeImg, .footerContainer`, {origin: 'bottom'})

sr.reveal(`.aboutData, .skillsData`, {origin: 'left'})
sr.reveal(`.aboutImg, .skillsContent`, {origin: 'right'})

sr.reveal(`.servisCard, .projectCard`, {interval: 100})