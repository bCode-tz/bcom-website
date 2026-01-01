// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}));

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Ensure images inside portfolio items are visible
            const images = entry.target.querySelectorAll('img');
            images.forEach(img => {
                img.style.opacity = '1';
                img.style.display = 'block';
            });
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .audience-card, .portfolio-item, .stat, .contact-item');
    
    if (animateElements.length > 0 && observer) {
        animateElements.forEach(el => {
            if (el) {
                // Check if element is already in viewport
                const rect = el.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (!isInViewport) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                } else {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
                
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                // Ensure images are always visible
                const images = el.querySelectorAll('img');
                images.forEach(img => {
                    img.style.opacity = '1';
                    img.style.display = 'block';
                });
                
                observer.observe(el);
            }
        });
    }
});

// Floating cards animation enhancement
const floatingCards = document.querySelectorAll('.floating-card');
if (floatingCards.length > 0) {
    floatingCards.forEach((card, index) => {
        if (card) {
            card.style.animationDelay = `${index * 0.5}s`;
        }
    });
}

// Add hover effects to service cards
const serviceCards = document.querySelectorAll('.service-card');
if (serviceCards.length > 0) {
    serviceCards.forEach(card => {
        if (card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        }
    });
}

// Add hover effects to audience cards (only on non-touch devices)
const audienceCards = document.querySelectorAll('.audience-card');
if (audienceCards.length > 0 && window.matchMedia('(hover: hover)').matches) {
    audienceCards.forEach(card => {
        if (card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
            });
        }
    });
}

// Portfolio items hover effect (only on non-touch devices)
const portfolioItems = document.querySelectorAll('.portfolio-item');
if (portfolioItems.length > 0 && window.matchMedia('(hover: hover)').matches) {
    portfolioItems.forEach(item => {
        if (item) {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
}

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing effect
        // typeWriter(heroTitle, originalText, 80);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('.section-header, .about-text, .about-image');
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
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

// Case Study Slider Functionality
function initCaseStudySliders() {
    const caseSliders = document.querySelectorAll('.case-image.slider-container');
    
    caseSliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const dots = slider.querySelectorAll('.dot');
        let currentSlide = 0;
        
        function showSlide(index) {
            // Hide all images
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show current image
            if (images[index]) {
                images[index].classList.add('active');
            }
            if (dots[index]) {
                dots[index].classList.add('active');
            }
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % images.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + images.length) % images.length;
            showSlide(currentSlide);
        }
        
        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Auto-play slider (optional)
        setInterval(nextSlide, 6000); // Change slide every 6 seconds
    });
}

// Initialize FAQ when page loads
document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initCaseStudySliders();
    initChatWidget();
    initNewsletter();
    initBackToTop();
    loadServices();
    loadCertifications();
    loadPricingPlans();
    loadPortfolio();
    loadBlogPosts();
    loadResources();
});

// ============================================
// CERTIFICATIONS (DEFAULT + ADMIN-ADDED)
// ============================================

function loadCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid) return;

    // Admin can add extra certifications in the future.
    // The default certifications in index.html must always remain unchanged.
    const customCerts = JSON.parse(localStorage.getItem('customCertifications')) || [];
    if (!Array.isArray(customCerts) || customCerts.length === 0) return;

    // Remove previously appended custom certs (if any) to avoid duplicates
    grid.querySelectorAll('[data-custom-cert="true"]').forEach(el => el.remove());

    customCerts.forEach(cert => {
        if (!cert || !cert.title || !cert.description) return;
        const item = document.createElement('div');
        item.className = 'cert-item';
        item.setAttribute('data-custom-cert', 'true');

        const iconClass = cert.icon || 'fas fa-certificate';
        item.innerHTML = `
            <div class="cert-icon">
                <i class="${iconClass}"></i>
            </div>
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
        `;
        grid.appendChild(item);
    });

    // Re-observe for animations (if present)
    if (typeof enhancedObserver !== 'undefined') {
        grid.querySelectorAll('.cert-item[data-custom-cert="true"]').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            enhancedObserver.observe(el);
        });
    }
}

// ============================================
// PRICING (ADMIN EDITABLE: STARTER + PROFESSIONAL)
// ============================================

function loadPricingPlans() {
    const data = JSON.parse(localStorage.getItem('pricingPlans')) || null;
    if (!data) return;

    const applyPlan = (key) => {
        const plan = data[key];
        if (!plan) return;

        const currencyEl = document.getElementById(`${key}Currency`);
        const amountEl = document.getElementById(`${key}Amount`);
        const periodEl = document.getElementById(`${key}Period`);
        const featuresEl = document.getElementById(`${key}Features`);

        if (currencyEl && typeof plan.currency === 'string') currencyEl.textContent = plan.currency;
        if (amountEl && (typeof plan.amount === 'string' || typeof plan.amount === 'number')) {
            amountEl.textContent = String(plan.amount);
        }
        if (periodEl && typeof plan.period === 'string') periodEl.textContent = plan.period;

        if (featuresEl && Array.isArray(plan.features)) {
            featuresEl.innerHTML = '';
            plan.features.forEach((f) => {
                const feature = String(f || '').trim();
                if (!feature) return;
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
                featuresEl.appendChild(li);
            });
        }
    };

    // Only these two are admin-editable
    applyPlan('starter');
    applyPlan('professional');
}

// Live Chat Widget
function initChatWidget() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    
    // Fixed bot reply (the only response)
    const fixedReply =
        "Hello! Welcome to bCom, your trusted Cybersecurity, Networking & AI-Solutions. We will reach you soon!\n\nContact us via Email: bcom.africa@gmail.com\nMobile: +255 750 818040";
    
    function addMessage(text, isBot = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isBot ? 'bot' : 'user'}`;
        // Format message with line breaks
        const formattedText = text.replace(/\n/g, '<br>');
        messageDiv.innerHTML = `<p>${formattedText}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });
    
    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, false);
            chatInput.value = '';
            
            // Always respond with the fixed reply (and nothing else)
            setTimeout(() => {
                addMessage(fixedReply, true);
            }, 600);
        }
    }
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Newsletter Subscription
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-subscription-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                const submitBtn = this.querySelector('.newsletter-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                // Simulate subscription
                setTimeout(() => {
                    alert('Thank you for subscribing! You\'ll receive our latest updates and insights.');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }
}

// Portfolio Filtering (if needed in future)
function initPortfolioFilter() {
    // This can be expanded later for portfolio filtering
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click functionality for portfolio items
            console.log('Portfolio item clicked');
        });
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
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

// Enhanced scroll animations
const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Observe new sections
document.addEventListener('DOMContentLoaded', () => {
    const newSections = document.querySelectorAll('.pricing-card, .blog-card, .resource-card, .job-card, .client-logo');
    newSections.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        enhancedObserver.observe(el);
    });
});

// ============================================
// LOAD SERVICES FROM ADMIN DASHBOARD
// ============================================

function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    // Default services are hard-coded in the HTML and must always remain.
    // Admin dashboard can only add EXTRA services (stored separately).
    const defaultServices = [
        {
            id: 'default-1',
            title: 'Affordable Internet Solutions',
            description: 'Cost-effective internet connectivity solutions for communities and businesses.',
            icon: 'fas fa-wifi'
        },
        {
            id: 'default-2',
            title: 'Cybersecurity Solutions',
            description: 'Advanced AI-driven security measures to protect your digital assets and infrastructure.',
            icon: 'fas fa-shield'
        },
        {
            id: 'default-3',
            title: 'Networking Infrastructure',
            description: 'Comprehensive network design, implementation, and management solutions for secure connectivity.',
            icon: 'fas fa-network-wired'
        },
        {
            id: 'default-4',
            title: 'Website Development',
            description: 'Custom website design and development solutions tailored to your business needs.',
            icon: 'fas fa-globe'
        },
        {
            id: 'default-5',
            title: 'Mobile Applications',
            description: 'Native and cross-platform mobile app development for iOS and Android devices.',
            icon: 'fas fa-mobile-alt'
        },
        {
            id: 'default-6',
            title: 'Business Intelligence Modeling',
            description: 'AI-powered analytics and intelligence solutions for data-driven decision making.',
            icon: 'fas fa-chart-column'
        }
    ];

    // Get admin-added services from localStorage (extra services only)
    const customServices = JSON.parse(localStorage.getItem('customServices')) || [];

    // If no custom services, keep the default HTML structure (fast path)
    if (customServices.length === 0) return;

    // Clear existing content
    servicesGrid.innerHTML = '';

    const allServices = [...defaultServices, ...customServices];

    // Create service cards from default + custom data
    allServices.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        // Check if service has an image
        const hasImage = service.imageUrl || service.image;
        const imageSrc = service.imageUrl || service.image || '';
        const iconClass = service.icon || 'fas fa-cog';
        
        card.innerHTML = `
            ${hasImage ? `
            <div class="service-image">
                <img src="${imageSrc}" alt="${service.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'service-icon\\'><i class=\\'${iconClass}\\'></i></div>';">
            </div>
            ` : `
            <div class="service-icon">
                <i class="${iconClass}"></i>
            </div>
            `}
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        servicesGrid.appendChild(card);
    });

    // Re-observe new elements for animations
    const newServiceCards = servicesGrid.querySelectorAll('.service-card');
    newServiceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        enhancedObserver.observe(card);
    });
}

// ============================================
// LOAD PORTFOLIO FROM ADMIN DASHBOARD
// ============================================

function loadPortfolio() {
    // Portfolio ("Success Stories") is default-only and must not be changed by admin dashboard.
    // Keep the HTML content as-is.
    return;
}

// ============================================
// LOAD BLOG POSTS FROM ADMIN DASHBOARD
// ============================================

function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    // Get blog posts from localStorage (saved by admin dashboard)
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // If admin has not configured blog posts yet, keep the default HTML cards
    if (!Array.isArray(posts) || posts.length === 0) return;

    // Clear existing content to rebuild from admin data
    blogGrid.innerHTML = '';

    // Sort by date (newest first) and show at most 6 cards
    const sortedPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);

    sortedPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card';
        
        const imageSrc = (post.imageUrl && !post.imageUrl.startsWith('blob:'))
            ? post.imageUrl
            : ((post.image && !post.image.startsWith('blob:')) ? post.image : 'default-blog.jpg');
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        article.innerHTML = `
            <div class="blog-image">
                <img src="${imageSrc}" alt="${post.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="blog-placeholder" style="display: none;">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <span class="blog-category">${post.category}</span>
            </div>
            <div class="blog-content">
                <span class="blog-date">${formattedDate}</span>
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <a href="${post.link || '#'}" class="blog-link" ${post.link && post.link !== '#' ? 'target="_blank"' : ''}>Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        blogGrid.appendChild(article);

        // If image is stored in IndexedDB, load it and replace the src
        if (post.imageKey) {
            const img = article.querySelector('.blog-image img');
            (async () => {
                try {
                    const rec = await idbGetBlogImage(post.imageKey);
                    if (rec?.blob && img) {
                        img.src = URL.createObjectURL(rec.blob);
                        img.style.display = 'block';
                        const placeholder = img.nextElementSibling;
                        if (placeholder) placeholder.style.display = 'none';
                    }
                } catch (e) {
                    // ignore
                }
            })();
        }
    });

    // Re-observe new elements for animations
    const newBlogCards = blogGrid.querySelectorAll('.blog-card');
    newBlogCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        if (typeof enhancedObserver !== 'undefined') {
            enhancedObserver.observe(card);
        }
    });
}

// ============================================
// DOWNLOAD HELPER FUNCTION
// ============================================

function downloadFile(fileData, fileName, fileType) {
    try {
        // Convert data URL to blob if needed
        let blob;
        if (fileData.startsWith('data:')) {
            const byteString = atob(fileData.split(',')[1]);
            const mimeString = fileData.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            blob = new Blob([ab], { type: mimeString });
        } else {
            // If it's already a URL, fetch and convert
            fetch(fileData)
                .then(response => response.blob())
                .then(blobData => {
                    const url = window.URL.createObjectURL(blobData);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                })
                .catch(err => {
                    console.error('Download error:', err);
                    // Fallback: open in new tab
                    window.open(fileData, '_blank');
                });
            return;
        }
        
        // Create download link for blob
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Download error:', error);
        // Fallback: try direct download
        const link = document.createElement('a');
        link.href = fileData;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// IndexedDB storage for large resource files
const RESOURCE_DB_NAME = 'bcom-admin-files';
const RESOURCE_DB_VERSION = 1;
const RESOURCE_STORE = 'resources';
const BLOG_IMAGE_STORE = 'blogImages';

function openResourceDb() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(RESOURCE_DB_NAME, RESOURCE_DB_VERSION);
        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(RESOURCE_STORE)) {
                db.createObjectStore(RESOURCE_STORE, { keyPath: 'key' });
            }
            if (!db.objectStoreNames.contains(BLOG_IMAGE_STORE)) {
                db.createObjectStore(BLOG_IMAGE_STORE, { keyPath: 'key' });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function idbGetResourceFile(key) {
    const db = await openResourceDb();
    return await new Promise((resolve, reject) => {
        const tx = db.transaction(RESOURCE_STORE, 'readonly');
        const req = tx.objectStore(RESOURCE_STORE).get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
    });
}

async function idbGetBlogImage(key) {
    const db = await openResourceDb();
    return await new Promise((resolve, reject) => {
        const tx = db.transaction(BLOG_IMAGE_STORE, 'readonly');
        const req = tx.objectStore(BLOG_IMAGE_STORE).get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
    });
}

// ============================================
// LOAD RESOURCES FROM ADMIN DASHBOARD
// ============================================

function loadResources() {
    const resourcesGrid = document.getElementById('resourcesGrid');
    if (!resourcesGrid) return;

    // Get resources from localStorage (saved by admin dashboard)
    const resources = JSON.parse(localStorage.getItem('resources')) || [];
    
    // If no resources from admin, keep default HTML structure
    if (resources.length === 0) {
        return;
    }

    // Clear existing content
    resourcesGrid.innerHTML = '';

    // Create resource cards from admin data
    resources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        
        // Determine icon based on type
        let iconClass = resource.icon || 'fas fa-file';
        if (!resource.icon) {
            switch(resource.type) {
                case 'pdf':
                    iconClass = 'fas fa-file-pdf';
                    break;
                case 'video':
                    iconClass = 'fas fa-video';
                    break;
                case 'tool':
                    iconClass = 'fas fa-tools';
                    break;
                case 'guide':
                    iconClass = 'fas fa-book';
                    break;
                default:
                    iconClass = 'fas fa-file';
            }
        }

        // Determine link text and icon
        let linkText = resource.linkText || 'Download';
        let linkIcon = 'fas fa-download';
        if (resource.type === 'video') {
            linkIcon = 'fas fa-play';
            linkText = linkText === 'Download' ? 'Watch Now' : linkText;
        } else if (resource.type === 'tool') {
            linkIcon = 'fas fa-external-link-alt';
            linkText = linkText === 'Download' ? 'Launch Tool' : linkText;
        }
        
        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.className = 'resource-download';
        downloadLink.innerHTML = `<i class="${linkIcon}"></i> ${linkText}`;
        
        // Handle downloadable files (PDFs, documents, etc.)
        if (resource.fileData) {
            // File was uploaded - make it downloadable
            const fileName = resource.fileName || `${resource.title}.${resource.type === 'pdf' ? 'pdf' : resource.fileType?.split('/')[1] || 'file'}`;
            downloadLink.href = '#';
            downloadLink.addEventListener('click', function(e) {
                e.preventDefault();
                downloadFile(resource.fileData, fileName, resource.fileType);
            });
            downloadLink.style.cursor = 'pointer';
            downloadLink.title = `Download ${fileName}`;
        } else if (resource.fileKey) {
            // File stored in IndexedDB (for large uploads)
            const fileName = resource.fileName || `${resource.title}.${resource.type === 'pdf' ? 'pdf' : 'file'}`;
            downloadLink.href = '#';
            downloadLink.addEventListener('click', async function(e) {
                e.preventDefault();
                try {
                    const record = await idbGetResourceFile(resource.fileKey);
                    if (!record || !record.blob) {
                        alert('File not found. Please re-upload it from the admin dashboard.');
                        return;
                    }
                    const url = window.URL.createObjectURL(record.blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                } catch (err) {
                    console.error('IndexedDB download error:', err);
                    alert('Download failed. Please try again.');
                }
            });
            downloadLink.style.cursor = 'pointer';
            downloadLink.title = `Download ${fileName}`;
        } else if (resource.url && resource.url !== '#') {
            // External URL or object URL
            if (resource.url.startsWith('blob:') || resource.url.startsWith('data:')) {
                // Object URL or data URL - make downloadable
                const fileName = resource.fileName || `${resource.title}.${resource.type === 'pdf' ? 'pdf' : 'file'}`;
                downloadLink.href = '#';
                downloadLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    downloadFile(resource.url, fileName, resource.fileType);
                });
                downloadLink.style.cursor = 'pointer';
            } else if (resource.type === 'pdf' || resource.fileName) {
                // PDF or file URL - try to download
                downloadLink.href = resource.url;
                downloadLink.download = resource.fileName || `${resource.title}.pdf`;
                downloadLink.setAttribute('download', resource.fileName || `${resource.title}.pdf`);
                if (resource.type === 'tool') {
                    downloadLink.target = '_blank';
                }
            } else {
                // Regular URL
                downloadLink.href = resource.url;
                if (resource.type === 'tool' || resource.type === 'video') {
                    downloadLink.target = '_blank';
                }
            }
        } else {
            // No file or URL
            downloadLink.href = '#';
            downloadLink.style.opacity = '0.5';
            downloadLink.style.cursor = 'not-allowed';
            downloadLink.title = 'No file available';
            downloadLink.addEventListener('click', function(e) {
                e.preventDefault();
            });
        }
        
        card.innerHTML = `
            <div class="resource-icon">
                <i class="${iconClass}"></i>
            </div>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
        `;
        
        // Append the download link
        card.appendChild(downloadLink);
        resourcesGrid.appendChild(card);
    });

    // Re-observe new elements for animations
    const newResourceCards = resourcesGrid.querySelectorAll('.resource-card');
    newResourceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        enhancedObserver.observe(card);
    });
}

// Listen for storage changes to update content when admin makes changes
window.addEventListener('storage', (e) => {
    if (e.key === 'customServices') {
        loadServices();
    }
    if (e.key === 'blogPosts') {
        loadBlogPosts();
    }
    if (e.key === 'customCertifications') {
        loadCertifications();
    }
    if (e.key === 'pricingPlans') {
        loadPricingPlans();
    }
    if (e.key === 'resources') {
        loadResources();
    }
});

// Listen for custom events for immediate updates (same browser/tab)
window.addEventListener('servicesUpdated', () => {
    loadServices();
});

window.addEventListener('certificationsUpdated', () => {
    loadCertifications();
});

window.addEventListener('pricingUpdated', () => {
    loadPricingPlans();
});

// Real-time blog update listener - immediate response
window.addEventListener('blogUpdated', (e) => {
    console.log('Blog updated event received - refreshing immediately');
    loadBlogPosts();
});

window.addEventListener('resourcesUpdated', () => {
    loadResources();
});

// Real-time storage event listener for cross-tab updates
window.addEventListener('storage', (e) => {
    if (e.key === 'blogPosts') {
        console.log('Blog posts storage event detected - updating immediately');
        loadBlogPosts();
    }
    if (e.key === 'customServices') {
        loadServices();
    }
    if (e.key === 'customCertifications') {
        loadCertifications();
    }
    if (e.key === 'pricingPlans') {
        loadPricingPlans();
    }
    if (e.key === 'resources') {
        loadResources();
    }
    if (e.key === 'blogPostsUpdated') {
        // Trigger immediate refresh when update flag is set
        loadBlogPosts();
    }
});

// Also check for updates periodically (in case admin is on same browser)
// Reduced interval for faster real-time updates
setInterval(() => {
    const currentServices = JSON.stringify(JSON.parse(localStorage.getItem('customServices')) || []);
    const currentBlogPosts = JSON.stringify(JSON.parse(localStorage.getItem('blogPosts')) || []);
    const currentResources = JSON.stringify(JSON.parse(localStorage.getItem('resources')) || []);
    const currentCerts = JSON.stringify(JSON.parse(localStorage.getItem('customCertifications')) || []);
    const currentPricing = JSON.stringify(JSON.parse(localStorage.getItem('pricingPlans')) || {});
    const blogPostsUpdated = localStorage.getItem('blogPostsUpdated');
    
    if (window.lastServices !== currentServices) {
        window.lastServices = currentServices;
        loadServices();
    }

    if (window.lastCertifications !== currentCerts) {
        window.lastCertifications = currentCerts;
        loadCertifications();
    }

    if (window.lastPricing !== currentPricing) {
        window.lastPricing = currentPricing;
        loadPricingPlans();
    }
    
    // Check for blog posts updates with higher priority
    if (window.lastBlogPosts !== currentBlogPosts || window.lastBlogPostsUpdated !== blogPostsUpdated) {
        window.lastBlogPosts = currentBlogPosts;
        window.lastBlogPostsUpdated = blogPostsUpdated;
        console.log('Blog posts changed - updating immediately');
        loadBlogPosts();
    }
    
    if (window.lastResources !== currentResources) {
        window.lastResources = currentResources;
        loadResources();
    }
}, 200); // Check every 200ms for faster real-time response

