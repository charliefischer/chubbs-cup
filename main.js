const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {

    console.log(event)
    
    event.preventDefault()
    
    const href = link.getAttribute('href')
    
    document.querySelector(href).scrollIntoView({
      
      behavior: 'smooth',
      
    })
  })
})



 var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-140px";
  }
  prevScrollpos = currentScrollPos;
}
  