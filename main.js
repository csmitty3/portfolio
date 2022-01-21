let side = document.getElementById('sidebar');
let open = document.getElementById('open');
let close = document.getElementById('close');
let home = document.getElementById('home');
let about = document.getElementById('about');
let contact = document.getElementById('contact');
let portfolio = document.getElementById('portfolio');

let clickCount = 0;

let homeText = document.getElementById('home_text');
let aboutText = document.getElementById('about_text');
let contactText = document.getElementById('contact_text');
let portfolioText = document.getElementById('portfolio_text');
let navText = [homeText, aboutText, contactText, portfolioText];

let divHome = document.getElementById('div_home');
let divAbout = document.getElementById('div_about');
let divContact = document.getElementById('div_contact');
let divPortfolio = document.getElementById('div_portfolio');
let navDivs = [divHome, divAbout, divContact, divPortfolio];
let noHomeText = [aboutText, contactText, portfolioText];
let noAboutText = [homeText, contactText, portfolioText];
let noContactText = [homeText, aboutText, portfolioText];
let noPortfolioText = [homeText, aboutText, contactText];

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
 
})

let openMenu = function() {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 1080) {
            clearInterval(timer);
        }
        draw(timePassed);
    }, 4);
    function draw(timePassed) {
        side.style.width = 50 + (timePassed / 4) + 'px';
    }
    open.style.left = "25px";
    close.style.left = "25px";
    open.style.visibility = 'hidden';
    close.style.visibility = 'visible';
    navText.forEach(element => {
        fadeIn(element);
    })
}

let closeMenu = function() {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 1080) {
            clearInterval(timer);
        }
        draw(timePassed);
    }, 4);
    function draw(timePassed) {
        side.style.width = 320 - (timePassed / 4) + 'px';
    }
    open.style.left = "25px";
    close.style.left = "25px";
    open.style.visibility = 'visible';
    close.style.visibility = 'hidden';
    navText.forEach(element => {
            fadeOut(element);
    })
}
let openClose = function () {
    if (clickCount === 0 || clickCount % 2 === 0) {
        openMenu();
    }
    else {
        closeMenu();
    }
    clickCount++;
}

open.addEventListener('click', openClose);
close.addEventListener('click', openClose);

let highlightHome = function () {
    divHome.style.backgroundColor = '#EDF5E1';
    home.style.transform = 'scale(1.5)';
    noHomeText.forEach(element => {
        element.style.opacity = '0.3';
    })
}
let unHighlightHome = function () {
    divHome.style.backgroundColor = '#8EE4AF';
    home.style.transform = 'scale(1)';
    noHomeText.forEach(element => {
        element.style.opacity = '1.0';
    })
}
divHome.addEventListener('mouseover', highlightHome);
divHome.addEventListener('mouseleave', unHighlightHome);

let highlightAbout = function () {
    divAbout.style.backgroundColor = '#EDF5E1';
    about.style.transform = 'scale(1.5)';
    noAboutText.forEach(element => {
        element.style.opacity = '0.3';
    })
}
let unHighlightAbout = function () {
    divAbout.style.backgroundColor = '#8EE4AF';
    about.style.transform = 'scale(1)';
    noAboutText.forEach(element => {
        element.style.opacity = '1.0';
    })
}
divAbout.addEventListener('mouseover', highlightAbout);
divAbout.addEventListener('mouseleave', unHighlightAbout);

let highlightContact = function () {
    divContact.style.backgroundColor = '#EDF5E1';
    contact.style.transform = 'scale(1.5)';
    noContactText.forEach(element => {
        element.style.opacity = '0.3';
    })
}
let unHighlightContact = function () {
    divContact.style.backgroundColor = '#8EE4AF';
    contact.style.transform = 'scale(1)';
    noContactText.forEach(element => {
        element.style.opacity = '1.0';
    })
}
divContact.addEventListener('mouseover', highlightContact);
divContact.addEventListener('mouseleave', unHighlightContact);

let highlightPortfolio = function () {
    divPortfolio.style.backgroundColor = '#EDF5E1';
    portfolio.style.transform = 'scale(1.5)';
    noPortfolioText.forEach(element => {
        element.style.opacity = '0.3';
    })
}
let unHighlightPortfolio = function () {
    divPortfolio.style.backgroundColor = '#8EE4AF';
    portfolio.style.transform = 'scale(1)';
    noPortfolioText.forEach(element => {
        element.style.opacity = '1.0';
    })
}
divPortfolio.addEventListener('mouseover', highlightPortfolio);
divPortfolio.addEventListener('mouseleave', unHighlightPortfolio);

let fadeIn = function (element) {
    let start2 = Date.now();
    let timer2 = setInterval(function() {
        let timePassed2 = Date.now() - start2;
        if (timePassed2 >= 1080) {
            clearInterval(timer2);
        }
        draw(timePassed2);
    }, 4);
    function draw(timePassed2) {
        element.style.opacity = (timePassed2 / 1080);
    }
}
let fadeOut = function (element) {
    let start3 = Date.now();
    let timer3 = setInterval(function() {
        let timePassed3 = Date.now() - start3;
        if (timePassed3 >= 1080) {
            clearInterval(timer3);
        }
        draw(timePassed3);
    }, 4);
    function draw(timePassed3) {
        element.style.opacity = (1 - (timePassed3 / 1080));
    }
}
let growClose = function () {
    close.style.transform = 'scale(1.5)';
}
let shrinkClose = function () {
    close.style.transform = 'scale(1)';
}
let growOpen = function () {
    open.style.transform = 'scale(1.5)';
}
let shrinkOpen = function () {
    open.style.transform = 'scale(1)';
}
close.addEventListener('mouseover', growClose);
close.addEventListener('mouseleave', shrinkClose);
open.addEventListener('mouseover', growOpen);
open.addEventListener('mouseleave', shrinkOpen);