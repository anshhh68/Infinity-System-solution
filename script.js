/**
 * Infinity System Solutions
 * Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavbar();
    initParticles();
    initScrollAnimations();
    initFormHandler();
    initSmoothScroll();
    initCounterAnimation();
});

/**
 * Navbar Scroll Effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
        });
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Floating Particles Background
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random properties
    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 20 + 10;
    const animationDelay = Math.random() * 10;
    const opacity = Math.random() * 0.5 + 0.1;

    // Randomly choose color
    const colors = ['#00f0ff', '#bf00ff', '#ff00aa', '#00ffea'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        left: ${left}%;
        top: 100%;
        border-radius: 50%;
        opacity: ${opacity};
        box-shadow: 0 0 ${size * 2}px ${color};
        animation: floatUp ${animationDuration}s linear ${animationDelay}s infinite;
        pointer-events: none;
    `;

    container.appendChild(particle);
}

// Add particle animation to stylesheet dynamically
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyles);

/**
 * Scroll Animations with Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.service-card, .advantage-card, .contact-item, .section-header'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Add staggered delay for grid items
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animationStyles);
}

/**
 * Counter Animation for Stats
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.getAttribute('data-count');
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const isPercentage = element.textContent.includes('%');
    const is24Hour = target === '24';
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * parseInt(target));

        if (is24Hour) {
            element.textContent = '24/7';
        } else if (isPercentage) {
            element.textContent = `${current}%`;
        } else {
            element.textContent = `${current}+`;
        }

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

/**
 * Form Handler with Validation
 */
function initFormHandler() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const originalText = btnText.textContent;

        // Validate form
        if (!validateForm(form)) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }

        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim() || 'Not provided';
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();

        // Service name mapping
        const serviceNames = {
            'cctv': 'CCTV Solutions',
            'hardware': 'Hardware Sales',
            'repair': 'Repair & Maintenance',
            'other': 'Other Services'
        };

        // Format WhatsApp message
        const whatsappMessage = `🔔 *New Inquiry from Website*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🛠️ *Service Needed:* ${serviceNames[service] || service}

💬 *Message:*
${message}

---
_Sent from Infinity System Solutions Website_`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/917405787727?text=${encodedMessage}`;

        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Redirecting to WhatsApp...';
        submitBtn.classList.add('loading');

        // Short delay then open WhatsApp
        setTimeout(() => {
            window.open(whatsappURL, '_blank');

            // Success state
            btnText.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';

            showNotification('Redirecting to WhatsApp! Nikhil Paswan will respond shortly.', 'success');

            // Reset form after delay
            setTimeout(() => {
                form.reset();
                btnText.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }, 3000);
        }, 1000);
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateField(input);
            }
        });
    });
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    // Check if empty
    if (field.required && !value) {
        isValid = false;
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }

    // Phone validation (optional, basic check)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-+()]{10,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
        }
    }

    // Update field styling
    if (!isValid) {
        field.classList.add('invalid');
        field.style.borderColor = '#ff4444';
    } else {
        field.classList.remove('invalid');
        field.style.borderColor = '';
    }

    return isValid;
}

function simulateSubmission() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
        <span class="notification-message">${message}</span>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 24px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00ff88, #00cc66)' : 'linear-gradient(135deg, #ff4444, #cc0000)'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        font-family: 'Rajdhani', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.5s ease forwards;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease forwards';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Typing Effect for Hero (Optional Enhancement)
 */
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;

    const text = heroSubtitle.innerHTML;
    heroSubtitle.innerHTML = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, 20);
        }
    }

    // Start after hero animation completes
    setTimeout(typeWriter, 1500);
}

/**
 * Card Hover Parallax Effect
 */
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.service-card, .advantage-card');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        } else {
            card.style.transform = '';
        }
    });
});

/**
 * Cursor Glow Effect (Optional)
 */
function initCursorGlow() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// Initialize cursor glow
initCursorGlow();

/**
 * Service Card Click Handler
 */
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.service-card');
        const service = card.dataset.service;

        // Scroll to contact form
        const contactSection = document.getElementById('contact');
        const serviceSelect = document.getElementById('service');

        if (contactSection && serviceSelect) {
            window.scrollTo({
                top: contactSection.offsetTop - 80,
                behavior: 'smooth'
            });

            // Pre-select the service
            setTimeout(() => {
                serviceSelect.value = service;
                serviceSelect.focus();
            }, 800);
        }
    });
});

/**
 * CTA Button Handler
 */
document.querySelectorAll('.cta-btn, .nav-cta').forEach(btn => {
    btn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

console.log('🚀 Infinity System Solutions - Website Initialized');
