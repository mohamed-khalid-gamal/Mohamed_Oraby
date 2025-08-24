// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const bodyEl = document.body;

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Lock/unlock background scroll when mobile menu opens/closes
        bodyEl.classList.toggle('no-scroll', navMenu.classList.contains('active'));
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger && hamburger.classList.remove('active');
        navMenu && navMenu.classList.remove('active');
        // Ensure scroll is re-enabled
        bodyEl.classList.remove('no-scroll');
    });
});

// Ensure scroll lock resets when resizing to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger && hamburger.classList.remove('active');
        navMenu && navMenu.classList.remove('active');
        bodyEl.classList.remove('no-scroll');
    }
});

// Smooth Scrolling for Navigation Links
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

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
function updateNavbarOnScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', updateNavbarOnScroll);
updateNavbarOnScroll();

// Scroll Progress Bar
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);

    const progressBarFill = progressBar.querySelector('.scroll-progress-bar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBarFill.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-animate class to elements that should animate
    const animateElements = document.querySelectorAll('.section-title, .section-subtitle, .timeline-item, .project-card, .skill-category, .education-card, .about-text, .contact-info, .contact-form');
    
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 200);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => skillObserver.observe(bar));
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            showNotification('Message sent successfully!', 'success');
            
            // Reset form
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            padding: 16px;
            border-radius: 8px;
            color: white;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        }
        
        .notification-success {
            background: var(--success-500);
        }
        
        .notification-error {
            background: var(--error-500);
        }
        
        .notification-info {
            background: var(--primary-500);
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .notification.show {
            transform: translateX(0);
        }
    `;
    
    if (!document.querySelector('.notification-styles')) {
        style.className = 'notification-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing Animation Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax Effect for Hero Section
// Note: querySelector cannot target pseudo-elements, so this no-op is removed for correctness
// If a parallax effect is needed, attach it to a real element.

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Lazy Loading for Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Mouse Trail Effect (Optional)
let mouseTrail = [];
const maxTrailLength = 5;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        mouseTrail.push({ x: e.clientX, y: e.clientY });
        
        if (mouseTrail.length > maxTrailLength) {
            mouseTrail.shift();
        }
        
        updateMouseTrail();
    }
});

function updateMouseTrail() {
    const existingTrails = document.querySelectorAll('.mouse-trail');
    existingTrails.forEach(trail => trail.remove());
    
    mouseTrail.forEach((point, index) => {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.cssText = `
            position: fixed;
            top: ${point.y}px;
            left: ${point.x}px;
            width: ${8 - index}px;
            height: ${8 - index}px;
            background: var(--primary-400);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${(maxTrailLength - index) / maxTrailLength};
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease-out;
        `;
        document.body.appendChild(trail);
        
        // Remove trail after animation
        setTimeout(() => trail.remove(), 300);
    });
}

// Enhanced Form Validation
function setupFormValidation() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldError(e);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
        return false;
    }
    
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorDiv = field.parentNode.querySelector('.field-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        field.parentNode.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    
    // Add error styles
    if (!document.querySelector('.field-error-styles')) {
        const style = document.createElement('style');
        style.className = 'field-error-styles';
        style.textContent = `
            .form-group input.error,
            .form-group textarea.error {
                border-color: var(--error-500);
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
            }
            
            .field-error {
                color: var(--error-500);
                font-size: 0.875rem;
                margin-top: 4px;
                animation: fadeInUp 0.3s ease-out;
            }
        `;
        document.head.appendChild(style);
    }
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Initialize form validation
setupFormValidation();

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
    updateNavbarOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animations to hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroSocial = document.querySelector('.hero-social');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroTitle) heroTitle.classList.add('animate-fade-in-up', 'stagger-1');
    if (heroSubtitle) heroSubtitle.classList.add('animate-fade-in-up', 'stagger-2');
    if (heroDescription) heroDescription.classList.add('animate-fade-in-up', 'stagger-3');
    if (heroButtons) heroButtons.classList.add('animate-fade-in-up', 'stagger-4');
    if (heroSocial) heroSocial.classList.add('animate-fade-in-up', 'stagger-5');
    if (heroImage) heroImage.classList.add('animate-scale-in', 'stagger-3');
});

// Dark Mode Toggle (Optional - can be activated later)
function setupDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = `
        <svg class="sun-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 4c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zM12 24c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zM5.6 6.6c-.3 0-.5-.1-.7-.3L3.5 4.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L6.3 4.9c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3zM19.8 20.8c-.3 0-.5-.1-.7-.3L17.7 19.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3zM3 13H1c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM23 13h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM4.2 20.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L4.9 17.7c.4-.4 1-.4 1.4 0s.4 1 0 1.4L4.9 20.5c-.2.2-.4.3-.7.3zM18.4 6.6c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L19.1 3.5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L19.1 6.3c-.2.2-.4.3-.7.3z"/>
        </svg>
        <svg class="moon-icon" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
            <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.1-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-2.2 1.3-4.2 3.2-5.2.5-.3.7-.9.7-1.3z"/>
        </svg>
    `;
    // Styles are intentionally not injected to keep UI minimal for now
}

// Preloader (Optional)
function setupPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    
    const preloaderStyles = document.createElement('style');
    preloaderStyles.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent; /* respect dark theme */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease-out;
        }
        
        .preloader-content {
            text-align: center;
        }
        
        .preloader-content p {
            margin-top: 20px;
            color: var(--neutral-300);
            font-weight: var(--font-weight-medium);
        }
        
        body.loaded .preloader {
            opacity: 0;
            pointer-events: none;
        }
    `;
    
    document.head.appendChild(preloaderStyles);
    document.body.appendChild(preloader);
    
    // Remove preloader when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
            setTimeout(() => preloader.remove(), 500);
        }, 500);
    });
}

// Initialize preloader
setupPreloader();

// Add scroll-based animations for better performance
function initializeScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', debounce(handleScrollAnimation, 10));
    
    // Initial check
    handleScrollAnimation();
}

// Initialize scroll animations
initializeScrollAnimations();

// Console welcome message
console.log(`\n%c👋 Welcome to Mohamed Oraby's Portfolio!\n%cThanks for checking out the code.`, 
'color: #06b6d4; font-size: 16px; font-weight: bold;',
'color: #94a3b8; font-size: 14px;'
);