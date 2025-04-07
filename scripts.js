// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('nav').classList.remove('active');
    });
});

// Sermon Text Toggle
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const sermonId = this.getAttribute('data-sermon');
        const sermonText = document.getElementById(`sermon-text-${sermonId}`);
        
        if (sermonText.style.display === 'block') {
            sermonText.style.display = 'none';
            this.textContent = 'Read Sermon Text';
        } else {
            sermonText.style.display = 'block';
            this.textContent = 'Hide Sermon Text';
        }
    });
});

// Simple Form Submission
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});