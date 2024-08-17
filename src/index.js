import './style.css'
import headShot from './images/BuccoHeadshot.jpg'

//window on load => paint Home page, home page tab = focussed,
//                  add event listeners to tabs,

//on tab click => unpaint #content, paint content related to tab

function paintHome() {
    const mainContent = document.querySelector('#content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    
    const headshotImage = document.createElement('img');
    headshotImage.classList.add('headshot');
    headshotImage.src = headShot;
    headshotImage.alt = 'Headshot of the head chef';

    const homeSpan = document.createElement('span');
    homeSpan.textContent = `Welcome to Nuovo Vesuvio (formerly Vesuvio), your go-to spot for
          authentic Italian cuisine in North Jersey. Led by Head Chef Artie
          Bucco, we have been serving classic Italian dishes with a modern twist
          since 1999. Whether it's homemade pasta, fresh seafood, or a juicy
          steak, Nuovo Vesuvio offers a true taste of Italy in a cozy, welcoming
          setting. Buon appetito!`

    contentContainer.appendChild(headshotImage);
    contentContainer.appendChild(homeSpan);
    
    mainContent.appendChild(contentContainer);
}

window.onload = paintHome()