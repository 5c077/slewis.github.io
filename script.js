// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(26, 37, 47, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'var(--dark)';
        nav.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});
        // Focus fade effect for project cards
const projectsGrid = document.querySelector('.projects-grid');
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        setTimeout(() => {
            if (this.matches(':hover')) {
                projectCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.style.opacity = '0.6';
                    }
                });
            }
        }, 1500);
    });
    
    card.addEventListener('mouseleave', function() {
        projectCards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
});
        // Add this to your existing script section
document.getElementById('email-link').addEventListener('click', function(e) {
    e.preventDefault();
    const user = 'ScottLewisPhD';
    const d = 'decoy'
    const domain = 'gmail.com';
    window.location.href = 'mailto:' + user + '@' + domain;
});
document.getElementById('linkedin-link').addEventListener('click', function(e) {
    e.preventDefault();
    const d = 'decoy';
    const name = 'scott-lewis';
    const hash = '0ab669290' 
    window.open('https://www.linkedin.com/in/' + name + '-'+ hash + '/', '_blank');
});
document.getElementById('github-link').addEventListener('click', function(e) {
    e.preventDefault();
    const username = '5c077';
    window.open('https://github.com/' + username, '_blank');
});