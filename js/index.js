const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.src = siteContent.nav['img-src'];

// Nav
let nav = document.querySelector('nav');
let navItems = document.querySelectorAll('nav a');
navItems[0].innerText = siteContent.nav['nav-item-1'];
navItems[1].innerText = siteContent.nav['nav-item-2'];
navItems[2].innerText = siteContent.nav['nav-item-3'];
navItems[3].innerText = siteContent.nav['nav-item-4'];
navItems[4].innerText = siteContent.nav['nav-item-5'];
navItems[5].innerText = siteContent.nav['nav-item-6'];

// cta
let ctaText = document.querySelector('.cta h1');
ctaText.innerText = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta button');
ctaButton.innerText = 'Dark Mode';

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// main content
let topContentH4 = document.querySelectorAll('.top-content h4');
topContentH4[0].innerText = siteContent['main-content']['features-h4'];
topContentH4[1].innerText = siteContent['main-content']['about-h4'];

let topContentP = document.querySelectorAll('.top-content p');
topContentP[0].innerText = siteContent['main-content']['features-content'];
topContentP[1].innerText = siteContent['main-content']['about-content'];

let bottomContentH4 = document.querySelectorAll('.bottom-content h4');
bottomContentH4[0].innerText = siteContent['main-content']['services-h4'];
bottomContentH4[1].innerText = siteContent['main-content']['product-h4'];
bottomContentH4[2].innerText = siteContent['main-content']['vision-h4'];

let bottomContentP = document.querySelectorAll('.bottom-content p');
bottomContentP[0].innerText = siteContent['main-content']['services-content'];
bottomContentP[1].innerText = siteContent['main-content']['product-content'];
bottomContentP[2].innerText = siteContent['main-content']['vision-content'];

// contact
let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent.contact['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerText = siteContent.contact.address;
contactP[1].innerText = siteContent.contact.phone;
contactP[2].innerText = siteContent.contact.email;

let footerP = document.querySelector('footer p');
footerP.innerText = siteContent.footer.copyright;

// Utilize .appendChild() and .prepend() to add two new items to the navigation system.
let prependedItem = document.createElement('a');
prependedItem.href = '#';
prependedItem.innerText = 'Prepend';
nav.prepend(prependedItem);

let appendedItem = document.createElement('a');
appendedItem.href = '#';
appendedItem.innerText = 'Append';
nav.appendChild(appendedItem);

// Change the color of the navigation text to be green.
navItems = document.querySelectorAll('nav a');
navItems.forEach(item => (item.style.color = 'green'));

let body = document.querySelector('body');
body.style.transition = 'all 0.3s ease';

// Dark / Light Mode Toggle
ctaButton.addEventListener('click', function() {
  body.classList.toggle('darkmode');
  let paragraphs = document.querySelectorAll('p');
  let h4s = document.querySelectorAll('h4');
  let mainContent = document.querySelector('.main-content');

  if (body.classList.contains('darkmode')) {
    ctaButton.innerText = 'Light Mode';
    body.style.background = '#313537';
    h4s.forEach(h4 => (h4.style.color = 'white'));
    paragraphs.forEach(p => (p.style.color = 'white'));
    navItems.forEach(a => (a.style.color = 'white'));
    ctaText.style.color = 'white';
    logo.style.filter = 'invert(100%)';
    ctaImg.style.filter = 'invert(100%)';
    middleImg.style.filter = 'invert(100%)';
    // logo.src = 'img/logo--inverted.png';
    // ctaImg.src = 'img/header-img--inverted.png';
    // middleImg.src = 'img/mid-page-accent--inverted.png';
    mainContent.style.borderTop = '2px solid white';
    mainContent.style.borderBottom = '2px solid white';
  } else {
    ctaButton.innerText = 'Dark Mode';
    body.style.background = '#fff';
    h4s.forEach(h4 => (h4.style.color = '#000'));
    paragraphs.forEach(p => (p.style.color = '#000'));
    navItems.forEach(a => (a.style.color = 'green'));
    ctaText.style.color = 'black';
    // logo.src = siteContent.nav['img-src'];
    // ctaImg.src = siteContent.cta['img-src'];
    // middleImg.src = siteContent['main-content']['middle-img-src'];
    logo.style.filter = 'invert(0)';
    ctaImg.style.filter = 'invert(0)';
    middleImg.style.filter = 'invert(0)';
    mainContent.style.borderTop = '2px solid black';
    mainContent.style.borderBottom = '2px solid black';
  }
});
