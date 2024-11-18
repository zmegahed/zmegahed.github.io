//typewriter
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = 1000;
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
});

function TxtType(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period;
    this.txt = '';
    this.isFinished = false;
    this.startTime = null;
    this.typingSpeed = 100;
    this.tick();
}

TxtType.prototype.tick = function(timestamp) {
    if (this.isFinished) return;

    if (!this.startTime) this.startTime = timestamp;
    const elapsed = timestamp - this.startTime;

    const i = this.loopNum;
    const fullTxt = this.toRotate[i];

   
    if (elapsed > this.typingSpeed) {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
        this.startTime = timestamp; 
    }

    
    if (this.txt === fullTxt) {
        setTimeout(() => {
            this.loopNum++;
            if (this.loopNum >= this.toRotate.length) {
                this.isFinished = true;
            } else {
                this.txt = ''; 
            }
        }, this.period); 
    }

    if (!this.isFinished) {
        requestAnimationFrame((t) => this.tick(t));
    }
};



//animations

document.addEventListener('DOMContentLoaded', function() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}

    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.about-heading, .about-text, .carousel-container, .fade-in-element');
        
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
}

    handleScrollAnimations();

    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('resize', handleScrollAnimations);

    const carouselContent = document.querySelector('.carousel-content');
    if (carouselContent) {
        carouselContent.addEventListener('animationend', () => {
            carouselContent.style.animation = 'none';
            setTimeout(() => {
                carouselContent.style.animation = 'scroll 20s linear infinite';
            }, 10);
        });
    }
});
  
// career border active

function showContent(companyId, clickedButton) {
    const navLinks = document.querySelectorAll('.company-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    clickedButton.classList.add('active');
    
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    const selectedContent = document.getElementById(companyId);
    selectedContent.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const firstButton = document.querySelector('.company-nav .nav-link');
    const firstContent = document.getElementById('carefirst');
    
    if(firstButton && firstContent) {
        firstButton.classList.add('active');
        firstContent.classList.add('active');
    }
});

document.addEventListener("scroll", () => {
    const mainNavLinks = document.querySelectorAll(".navbar .nav-link");
    const sections = document.querySelectorAll("section");

    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (window.pageYOffset >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    mainNavLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href")?.includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// font change

document.addEventListener('DOMContentLoaded', function() {
    const fonts = [
        'Abril Fatface',
        'Playfair Display',
        'Roboto Slab',
        'Space Mono',
        'Ubuntu'
    ];
    
    // Preload fonts
    fonts.forEach(font => {
        const dummy = document.createElement('span');
        dummy.style.fontFamily = font;
        dummy.style.opacity = '0';
        dummy.textContent = 'preload';
        document.body.appendChild(dummy);
        setTimeout(() => document.body.removeChild(dummy), 100);
    });
});
