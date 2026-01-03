// ====================================
// Smooth Scroll & Navigation
// ====================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

// Smooth scroll to section
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Update active nav link on scroll
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ====================================
// Sticky Navigation
// ====================================

const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ====================================
// Mobile Menu Toggle
// ====================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ====================================
// Typing Animation
// ====================================

const typingText = document.getElementById('typingText');
const texts = [
    'Full Stack Developer',
    'Frontend Specialist',
    'Backend Engineer',
    'Problem Solver',
    'Tech Enthusiast'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500; // Pause before typing next text
    }
    
    setTimeout(typeText, typingDelay);
}

// Start typing animation
setTimeout(typeText, 1000);

// ====================================
// Scroll Animations (Fade In)
// ====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ====================================
// Animated Skill Bars
// ====================================

const skillProgressBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const progress = progressBar.getAttribute('data-progress');
            
            // Set CSS variable and add animate class
            progressBar.style.setProperty('--progress', progress + '%');
            setTimeout(() => {
                progressBar.style.width = progress + '%';
            }, 100);
            
            // Stop observing once animated
            skillObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

skillProgressBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ====================================
// Project Filtering
// ====================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Trigger reflow for animation
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ====================================
// Back to Top Button
// ====================================

const backToTopButton = document.getElementById('backToTop');

function toggleBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================
// Contact Form Validation & Submission
// ====================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    let isValid = true;
    
    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    
    // Validate name
    if (name.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        isValid = false;
    }
    
    // Validate email
    if (!validateEmail(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate subject
    if (subject.value.trim().length < 3) {
        subjectError.textContent = 'Subject must be at least 3 characters long';
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        isValid = false;
    }
    
    return isValid;
}

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state (in real implementation, you would send data to server)
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate sending (replace with actual API call)
    setTimeout(() => {
        // Show success message
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
        
        // In a real implementation, you would:
        // 1. Send data to your backend API
        // 2. Handle success/error responses
        // 3. Show appropriate messages
        
        console.log('Form Data:', formData);
    }, 2000);
});

// Real-time validation on input
document.getElementById('email').addEventListener('blur', function() {
    const emailError = document.getElementById('emailError');
    if (this.value && !validateEmail(this.value)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
});

// ====================================
// Scroll Event Listener
// ====================================

let scrollTimeout;
window.addEventListener('scroll', () => {
    // Clear timeout to debounce
    clearTimeout(scrollTimeout);
    
    scrollTimeout = setTimeout(() => {
        handleNavbarScroll();
        updateActiveNavLink();
        toggleBackToTopButton();
    }, 10);
});

// ====================================
// Page Load Animations
// ====================================

window.addEventListener('load', () => {
    // Add loaded class to body for any additional animations
    document.body.classList.add('loaded');
    
    // Initialize scroll-based functions
    handleNavbarScroll();
    updateActiveNavLink();
    toggleBackToTopButton();
});

// ====================================
// Parallax Effect on Hero Section (Optional)
// ====================================

const heroSection = document.querySelector('.hero');
let parallaxTicking = false;

function updateParallax() {
    const scrolled = window.scrollY;
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    parallaxTicking = false;
}

window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
});

// ====================================
// Add smooth transitions to project cards
// ====================================

projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// ====================================
// Keyboard Navigation Accessibility
// ====================================

// Allow keyboard navigation for interactive elements
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ====================================
// Interactive Button Ripple Effect
// ====================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ====================================
// Console Welcome Message
// ====================================

console.log('%c Welcome to My Portfolio! ', 'background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Built with ❤️ using HTML, CSS & JavaScript', 'color: #6366f1; font-size: 14px;');

// ====================================
// Performance Optimization
// ====================================

// Lazy load images when implemented
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute (for future use)
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ====================================
// Add active state management for timeline items
// ====================================

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});
