const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your server
    // For this example, we'll just log it to the console
    console.log('Form submitted!');
    console.log('Name:', this.name.value);
    console.log('Email:', this.email.value);
    console.log('Subject:', this.subject.value);
    console.log('Message:', this.message.value);
    // Clear the form
    this.reset();
    alert('Thank you for your message. We will get back to you soon!');
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const closeMenu = document.getElementById('close-menu');

    mobileMenu.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Show More functionality
    const showMoreBtn = document.querySelector('.show-more-btn');
    const hiddenServices = document.querySelectorAll('.service-item.hidden');

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function(event) {
            // Remove the default behavior of preventing navigation
            // event.preventDefault();
            // The link will now naturally navigate to services.html
        });
    }
});

// Add this CSS for the fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
