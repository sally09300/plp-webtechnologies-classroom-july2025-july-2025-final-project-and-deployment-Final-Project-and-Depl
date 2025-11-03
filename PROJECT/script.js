// js/script.js

// Enhanced JavaScript with more interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initLoadingScreen();
    initMobileNavigation();
    initStickyNavigation();
    initActiveNavigation();
    initBackToTop();
    initStatsCounter();
    initServiceModals();
    initTestimonialsCarousel();
    initPortfolioInteractions();
    initFAQAccordion();
    initThemeToggle();
    initScrollAnimations();
    initFormValidation();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);
}

// Mobile Navigation Toggle (enhanced)
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Sticky Navigation on Scroll
function initStickyNavigation() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Active Navigation Link
function initActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animated Stats Counter
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function startCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Service Detail Modals
function initServiceModals() {
    const serviceButtons = document.querySelectorAll('.btn-service-detail');
    const serviceModal = document.getElementById('service-modal');
    const serviceContent = document.getElementById('service-detail-content');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Service data
    const services = {
        'web-design': {
            title: 'Web Design',
            description: 'We create visually stunning, user-centered designs that engage your audience and reflect your brand identity.',
            features: [
                { icon: 'fas fa-palette', title: 'UI/UX Design', description: 'Intuitive interfaces with exceptional user experience' },
                { icon: 'fas fa-mobile-alt', title: 'Responsive Design', description: 'Perfect on all devices from desktop to mobile' },
                { icon: 'fas fa-brush', title: 'Brand Integration', description: 'Seamless incorporation of your brand identity' },
                { icon: 'fas fa-rocket', title: 'Fast Loading', description: 'Optimized designs for maximum performance' }
            ],
            price: 'Starting at $2,500'
        },
        'web-development': {
            title: 'Web Development',
            description: 'Our development team builds robust, scalable websites using the latest technologies and best practices.',
            features: [
                { icon: 'fas fa-code', title: 'Frontend Development', description: 'Modern frameworks and clean, semantic code' },
                { icon: 'fas fa-server', title: 'Backend Development', description: 'Secure and scalable server-side solutions' },
                { icon: 'fas fa-cogs', title: 'CMS Integration', description: 'Easy-to-use content management systems' },
                { icon: 'fas fa-tachometer-alt', title: 'Performance', description: 'Optimized for speed and efficiency' }
            ],
            price: 'Starting at $3,500'
        },
        'ecommerce': {
            title: 'E-Commerce Solutions',
            description: 'We build online stores designed to maximize conversions and sales with seamless shopping experiences.',
            features: [
                { icon: 'fas fa-shopping-cart', title: 'Online Store', description: 'Full-featured e-commerce platform' },
                { icon: 'fas fa-credit-card', title: 'Payment Integration', description: 'Secure payment gateway connections' },
                { icon: 'fas fa-boxes', title: 'Inventory Management', description: 'Complete product and stock control' },
                { icon: 'fas fa-chart-line', title: 'Analytics', description: 'Sales tracking and performance insights' }
            ],
            price: 'Starting at $5,000'
        }
    };
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const service = button.getAttribute('data-service');
            const serviceData = services[service];
            
            if (serviceData) {
                serviceContent.innerHTML = `
                    <div class="service-detail-modal">
                        <h2>${serviceData.title}</h2>
                        <p>${serviceData.description}</p>
                        <div class="service-features">
                            ${serviceData.features.map(feature => `
                                <div class="service-feature">
                                    <i class="${feature.icon}"></i>
                                    <h4>${feature.title}</h4>
                                    <p>${feature.description}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="service-price">
                            <h3>${serviceData.price}</h3>
                            <a href="contact.html" class="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                `;
                
                serviceModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });
    
    // Close modal functionality
    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            serviceModal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Testimonials Carousel
function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('.testimonial');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextTestimonial() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= testimonials.length) nextIndex = 0;
        showTestimonial(nextIndex);
    }
    
    function prevTestimonial() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = testimonials.length - 1;
        showTestimonial(prevIndex);
    }
    
    // Auto-rotate testimonials
    let carouselInterval = setInterval(nextTestimonial, 5000);
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        clearInterval(carouselInterval);
        nextTestimonial();
        carouselInterval = setInterval(nextTestimonial, 5000);
    });
    
    prevBtn.addEventListener('click', () => {
        clearInterval(carouselInterval);
        prevTestimonial();
        carouselInterval = setInterval(nextTestimonial, 5000);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(carouselInterval);
            showTestimonial(index);
            carouselInterval = setInterval(nextTestimonial, 5000);
        });
    });
    
    // Pause carousel on hover
    const carousel = document.querySelector('.testimonials-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextTestimonial, 5000);
    });
}

// Portfolio Interactions
function initPortfolioInteractions() {
    const portfolioZoomButtons = document.querySelectorAll('.portfolio-zoom');
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelectorAll('.close-modal');
    
    portfolioZoomButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const portfolioItem = button.closest('.portfolio-item');
            const imageSrc = portfolioItem.querySelector('img').src;
            const imageAlt = portfolioItem.querySelector('img').alt;
            
            modalImage.src = imageSrc;
            modalImage.alt = imageAlt;
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal functionality
    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            imageModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .team-member, .value-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll', 'animated');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
}

// Form Validation (enhanced)
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const errorElement = document.getElementById('form-error');
            
            let errors = [];
            
            if (name.trim() === '') {
                errors.push('Name is required');
                highlightField('name', true);
            } else {
                highlightField('name', false);
            }
            
            if (email.trim() === '') {
                errors.push('Email is required');
                highlightField('email', true);
            } else if (!isValidEmail(email)) {
                errors.push('Email is not valid');
                highlightField('email', true);
            } else {
                highlightField('email', false);
            }
            
            if (message.trim() === '') {
                errors.push('Message is required');
                highlightField('message', true);
            } else {
                highlightField('message', false);
            }
            
            if (errors.length > 0) {
                errorElement.innerHTML = errors.join('<br>');
                errorElement.style.display = 'block';
                
                // Scroll to error message
                errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                errorElement.style.display = 'none';
                
                // Show success message
                showFormSuccess();
                contactForm.reset();
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.type === 'email' && value !== '') {
        if (!isValidEmail(value)) {
            highlightField(field.id, true);
            return false;
        }
    }
    
    if (field.required && value === '') {
        highlightField(field.id, true);
        return false;
    }
    
    highlightField(field.id, false);
    return true;
}

function highlightField(fieldId, hasError) {
    const field = document.getElementById(fieldId);
    
    if (hasError) {
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showFormSuccess() {
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
            <button class="btn btn-primary" id="close-success">OK</button>
        </div>
    `;
    
    // Add styles for success message
    const successStyles = `
        <style>
            .form-success {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            .success-content {
                background: var(--white);
                padding: 2rem;
                border-radius: 10px;
                text-align: center;
                max-width: 400px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            }
            .success-content i {
                font-size: 4rem;
                color: #4CAF50;
                margin-bottom: 1rem;
            }
            .success-content h3 {
                color: var(--text-dark);
                margin-bottom: 1rem;
            }
            .success-content p {
                color: var(--text-light);
                margin-bottom: 1.5rem;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', successStyles);
    document.body.appendChild(successMessage);
    
    // Close success message
    document.getElementById('close-success').addEventListener('click', () => {
        document.body.removeChild(successMessage);
    });
}