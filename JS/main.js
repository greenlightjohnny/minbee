
//Fade out landing page on scroll//
const opacityAnchor = document.querySelector('.opacityAnchor').offsetTop;
function fadeOnScroll() {
    if(window.pageYOffset >= 0 & window.innerWidth > 599) { 
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('.fading');
        beeBackground.style.background = "linear-gradient(rgba(12, 12, 12, " + (opacity / 2) + "), rgba(12, 12, 12, " + (opacity) + "))";
    } else if(window.pageYOffset >= 0 & window.innerWidth <= 599) {
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('.fading');
        beeBackground.style.background = "linear-gradient(rgba(12, 12, 12, " + (opacity / 2) + "), rgba(12, 12, 12, " + (opacity) + "))";
    }
}  

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('resize', fadeOnScroll);

 



/////// menu open close //////////

let menu = document.querySelector(".menuIcon");
let menuList = document.querySelector("nav ul");
const menuT = document.querySelector(".ham");
const menuItems = document.querySelectorAll('nav li a');
const mainMav = document.querySelector('nav');




function menuToggle() {
    menuList.classList.toggle('showMenu');
    
    mainMav.classList.toggle('backgroundOpacity');
    
    menu.classList.toggle('open');
    

}
menu.addEventListener('click', menuToggle)
menuItems.forEach(i => i.addEventListener('click', menuToggle));

///////// Box shadow menu sticky Nav ////////

const navAnch = document.querySelector('.navAnch');
const navBar = document.querySelector('nav');
const navAa = document.querySelectorAll('nav ul li a');

function addShadow() {
    const navOffset = navAnch.offsetTop;
    const logo = document.querySelector('.logo');
    
    if(window.pageYOffset >= navOffset) {
        navBar.classList.add('addShadow');
        logo.classList.add('shrink');
        navAa.forEach(i => i.classList.add('fadeNav'));
    } else {
      navBar.classList.remove('addShadow');
      logo.classList.remove('shrink');
      navAa.forEach(i => i.classList.remove('fadenav'));
    }
}

window.addEventListener('scroll', addShadow);


////////// LAZY LOAD FROM https://codepen.io/imagekit_io/pen/RBXVrW //////////
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
  //////////Slide in text////////
  const slideItems = document.querySelectorAll('.slideRight')
  const hex = document.querySelectorAll('.hex');
  let slideLeft = document.querySelectorAll('.slideLeft');
 let swingRight = document.querySelectorAll('.swingRight');
 const slideUp = document.querySelectorAll('.slideUp')



  function slideIn() {
    
    slideItems.forEach(i => {

      if (i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop < window.scrollY + window.innerHeight) {
          i.classList.remove('hidden');
          i.classList.add('fade-in-element');

      } else {
          i.classList.add('hidden');
          i.classList.remove('fade-in-element');
      }


  })
//////////////////HEX///////////
  hex.forEach(i => {

    if (i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop < window.scrollY + window.innerHeight) {
        i.classList.remove('hidden');
        i.classList.add('fade-in-element2');

    } else {
        i.classList.add('hidden');
        i.classList.remove('fade-in-element2');
    }


})

///////LEFT/////////////
slideLeft.forEach(i => {
  if (i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop < window.scrollY + window.innerHeight) {
      i.classList.add('fromLeft')
  } else {
      i.classList.remove('fromLeft')
  }
})

///////RIGHT/////////////
swingRight.forEach(i => {
  if (i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop < window.scrollY + window.innerHeight) {
      i.classList.add('fromRights')
  } else {
      i.classList.remove('fromRights')
  }
})


////////SLIDEUP/////////////
slideUp.forEach(i => {
  if (i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop < window.scrollY + window.innerHeight) {
      i.classList.add('inView')
  } else {
      i.classList.remove('inView');
  }
})

 
  }


  document.addEventListener("scroll", slideIn);
