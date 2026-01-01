// ============================================
// Admin Dashboard JavaScript
// bCom Website Admin Panel
// ============================================

// ============================================
// DATA STORAGE & INITIALIZATION
// ============================================

// Sample Data (Replace with real API calls in production)
const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', joined: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', joined: '2024-03-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'active', joined: '2024-04-05' },
];

const samplePayments = [
    { id: 'TXN001', user: 'John Doe', amount: 100, service: 'Professional Plan', date: '2024-01-20', status: 'completed' },
    { id: 'TXN002', user: 'Jane Smith', amount: 60, service: 'Starter Plan', date: '2024-02-25', status: 'completed' },
    { id: 'TXN003', user: 'Bob Johnson', amount: 100, service: 'Professional Plan', date: '2024-03-15', status: 'pending' },
];

const sampleLogs = [
    { type: 'login', details: 'User login successful', time: '2024-01-20 10:30:00', severity: 'info' },
    { type: 'security', details: 'Failed login attempt detected', time: '2024-01-20 10:25:00', severity: 'warning' },
    { type: 'access', details: 'Admin dashboard accessed', time: '2024-01-20 10:20:00', severity: 'info' },
];

const sampleActivity = [
    { action: 'New user registered', user: 'Alice Brown', time: '2 minutes ago' },
    { action: 'Payment received', user: 'John Doe', time: '15 minutes ago' },
    { action: 'Service updated', user: 'System', time: '1 hour ago' },
];

// Blog Posts Data (stored in localStorage)
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [
    {
        id: 1,
        title: 'Top 5 Cybersecurity Threats in 2026',
        description: 'Discover the most critical cybersecurity threats facing East African businesses and how to protect against them.',
        category: 'Cybersecurity',
        date: '2026-01-15',
        image: 'cybersecurity-threats.jpg',
        imageUrl: '',
        content: '',
        link: '#'
    },
    {
        id: 2,
        title: 'Building Resilient Network Infrastructure',
        description: 'Learn how modern network architecture can improve your business continuity and performance.',
        category: 'Networking',
        date: '2026-01-10',
        image: 'Network-and-Infrastructure.jpg',
        imageUrl: '',
        content: '',
        link: '#'
    },
    {
        id: 3,
        title: 'AI-Powered Security: The Future is Here',
        description: 'Explore how artificial intelligence is revolutionizing cybersecurity and threat detection.',
        category: 'AI Solutions',
        date: '2026-01-05',
        image: 'ai-solutions.jpg',
        imageUrl: '',
        content: '',
        link: '#'
    }
];

// Default services (built-in) - must never be edited/deleted from admin.
const DEFAULT_SERVICES = [
    {
        id: 'default-1',
        title: 'Affordable Internet Solutions',
        description: 'Cost-effective internet connectivity solutions for communities and businesses.',
        category: 'internet',
        icon: 'fas fa-wifi',
        image: '',
        imageUrl: ''
    },
    {
        id: 'default-2',
        title: 'Cybersecurity Solutions',
        description: 'Advanced AI-driven security measures to protect your digital assets and infrastructure.',
        category: 'cybersecurity',
        icon: 'fas fa-shield',
        image: 'cybersecurity services.jpg',
        imageUrl: 'cybersecurity services.jpg'
    },
    {
        id: 'default-3',
        title: 'Networking Infrastructure',
        description: 'Comprehensive network design, implementation, and management solutions for secure connectivity.',
        category: 'networking',
        icon: 'fas fa-network-wired',
        image: '',
        imageUrl: ''
    },
    {
        id: 'default-4',
        title: 'Website Development',
        description: 'Custom website design and development solutions tailored to your business needs.',
        category: 'development',
        icon: 'fas fa-globe',
        image: '',
        imageUrl: ''
    },
    {
        id: 'default-5',
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile app development for iOS and Android devices.',
        category: 'development',
        icon: 'fas fa-mobile-alt',
        image: '',
        imageUrl: ''
    },
    {
        id: 'default-6',
        title: 'Business Intelligence Modeling',
        description: 'AI-powered analytics and intelligence solutions for data-driven decision making.',
        category: 'ai',
        icon: 'fas fa-chart-column',
        image: '',
        imageUrl: ''
    }
];

// Admin-added services only (custom) - editable/deletable.
let services = JSON.parse(localStorage.getItem('customServices')) || [];

// Portfolio Data (stored in localStorage)
let portfolio = JSON.parse(localStorage.getItem('portfolio')) || [
    {
        id: 1,
        title: 'University Network Security',
        description: 'Comprehensive cybersecurity implementation for major East African university',
        tag: 'Cybersecurity',
        client: '',
        image: 'group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme.jpg',
        imageUrl: ''
    },
    {
        id: 2,
        title: 'Banking Infrastructure',
        description: 'Secure network infrastructure for regional banking system',
        tag: 'Networking',
        client: '',
        image: 'banking infrastructure.webp',
        imageUrl: ''
    },
    {
        id: 3,
        title: 'AI Security Integration',
        description: 'AI-driven security solutions for industrial manufacturing',
        tag: 'AI Solutions',
        client: '',
        image: 'ai-integration.jpg',
        imageUrl: ''
    }
];

// Resources Data (stored in localStorage)
let resources = JSON.parse(localStorage.getItem('resources')) || [
    {
        id: 1,
        title: 'Cybersecurity Checklist',
        description: 'Comprehensive checklist to assess your organization\'s security posture',
        type: 'pdf',
        icon: 'fas fa-file-pdf',
        url: '#',
        linkText: 'Download PDF',
        fileName: ''
    },
    {
        id: 2,
        title: 'Network Security Guide',
        description: 'Complete guide to implementing secure network infrastructure',
        type: 'guide',
        icon: 'fas fa-book',
        url: '#',
        linkText: 'Download PDF',
        fileName: ''
    },
    {
        id: 3,
        title: 'Security Training Videos',
        description: 'Educational videos on cybersecurity best practices',
        type: 'video',
        icon: 'fas fa-video',
        url: '#',
        linkText: 'Watch Now',
        fileName: ''
    },
    {
        id: 4,
        title: 'Security Assessment Tool',
        description: 'Free online tool to evaluate your security readiness',
        type: 'tool',
        icon: 'fas fa-tools',
        url: '#',
        linkText: 'Launch Tool',
        fileName: ''
    }
];

// IndexedDB storage for large resource files (avoids localStorage quota limits)
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

async function idbPutResourceFile(key, file) {
    const db = await openResourceDb();
    return await new Promise((resolve, reject) => {
        const tx = db.transaction(RESOURCE_STORE, 'readwrite');
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
        tx.objectStore(RESOURCE_STORE).put({
            key,
            blob: file,
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            savedAt: Date.now()
        });
    });
}

async function idbPutBlogImage(key, file) {
    const db = await openResourceDb();
    return await new Promise((resolve, reject) => {
        const tx = db.transaction(BLOG_IMAGE_STORE, 'readwrite');
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
        tx.objectStore(BLOG_IMAGE_STORE).put({
            key,
            blob: file,
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            savedAt: Date.now()
        });
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
// CERTIFICATIONS (DEFAULT + ADMIN-ADDED)
// ============================================

const DEFAULT_CERTIFICATIONS = [
    {
        id: 'default-cert-1',
        title: 'ISO 27001 Certified',
        description: 'Information Security Management',
        icon: 'fas fa-shield-halved'
    },
    {
        id: 'default-cert-2',
        title: 'East Africa Cybersecurity Leader',
        description: '2026 Digital Excellence Award',
        icon: 'fas fa-award'
    },
    {
        id: 'default-cert-3',
        title: 'CISSP Certified Team',
        description: 'Certified Information Systems Security Professional',
        icon: 'fas fa-certificate'
    },
    {
        id: 'default-cert-4',
        title: 'CCNA Certified',
        description: 'Cisco Certified Network Associate',
        icon: 'fas fa-network-wired'
    }
];

let certifications = JSON.parse(localStorage.getItem('customCertifications')) || [];

// ============================================
// INITIALIZATION
// ============================================

// Initialize all admin dashboard features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // One-time migration:
    // - Previously we stored ALL services in localStorage key "services" (including defaults).
    // - Now defaults are immutable and hard-coded; localStorage stores ONLY custom additions in "customServices".
    try {
        const legacy = JSON.parse(localStorage.getItem('services')) || [];
        const hasMigrated = localStorage.getItem('customServicesMigrated') === 'true';
        if (!hasMigrated && Array.isArray(legacy) && legacy.length > 0) {
            const defaultTitles = new Set(DEFAULT_SERVICES.map(s => s.title));
            const migratedCustom = legacy.filter(s => s && !defaultTitles.has(s.title));
            localStorage.setItem('customServices', JSON.stringify(migratedCustom));
            localStorage.setItem('customServicesMigrated', 'true');
            services = migratedCustom;
        }
    } catch (e) {
        // ignore migration errors
    }

    // Ensure in-memory services is current
    services = JSON.parse(localStorage.getItem('customServices')) || [];

    // Force update main website
    window.dispatchEvent(new CustomEvent('servicesUpdated'));
    
    initLogin();
    initNavigation();
    initDashboard();
    setupLogoutHandler(); // Ensure logout handler is set up
    initUsers();
    initServices();
    initPayments();
    initPricing();
    initSecurity();
    initSearch();
    initMobileMenu();
    initPortfolio();
    initBlog();
    initResources();
    initCertifications();
});

// ============================================
// PRICING MANAGEMENT (STARTER + PROFESSIONAL)
// ============================================

function initPricing() {
    const saveBtn = document.getElementById('savePricingBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', savePricingPlans);
    }

    // Prefill from saved data if available
    const existing = JSON.parse(localStorage.getItem('pricingPlans')) || null;
    if (existing) {
        fillPricingForm(existing);
    }
}

function fillPricingForm(data) {
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el && typeof val === 'string') el.value = val;
        if (el && typeof val === 'number') el.value = String(val);
    };

    if (data.starter) {
        setVal('starterCurrencyInput', data.starter.currency);
        setVal('starterAmountInput', data.starter.amount);
        setVal('starterPeriodInput', data.starter.period);
        const featuresEl = document.getElementById('starterFeaturesInput');
        if (featuresEl && Array.isArray(data.starter.features)) {
            featuresEl.value = data.starter.features.join('\n');
        }
    }

    if (data.professional) {
        setVal('professionalCurrencyInput', data.professional.currency);
        setVal('professionalAmountInput', data.professional.amount);
        setVal('professionalPeriodInput', data.professional.period);
        const featuresEl = document.getElementById('professionalFeaturesInput');
        if (featuresEl && Array.isArray(data.professional.features)) {
            featuresEl.value = data.professional.features.join('\n');
        }
    }
}

function savePricingPlans() {
    const readLines = (id) => {
        const el = document.getElementById(id);
        const raw = (el?.value || '').split('\n').map(s => s.trim()).filter(Boolean);
        return raw;
    };

    const data = {
        starter: {
            currency: (document.getElementById('starterCurrencyInput')?.value || '$').trim() || '$',
            amount: (document.getElementById('starterAmountInput')?.value || '60').trim() || '60',
            period: (document.getElementById('starterPeriodInput')?.value || '/month').trim() || '/month',
            features: readLines('starterFeaturesInput')
        },
        professional: {
            currency: (document.getElementById('professionalCurrencyInput')?.value || '$').trim() || '$',
            amount: (document.getElementById('professionalAmountInput')?.value || '100').trim() || '100',
            period: (document.getElementById('professionalPeriodInput')?.value || '/month').trim() || '/month',
            features: readLines('professionalFeaturesInput')
        }
    };

    localStorage.setItem('pricingPlans', JSON.stringify(data));
    updateMainWebsitePricing();
    alert('Pricing plans saved successfully!');
}

function updateMainWebsitePricing() {
    try {
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'pricingPlans',
            newValue: localStorage.getItem('pricingPlans'),
            storageArea: localStorage
        }));
    } catch (e) {
        // ignore
    }
    window.dispatchEvent(new CustomEvent('pricingUpdated'));
}

// ============================================
// CERTIFICATIONS MANAGEMENT
// ============================================

function initCertifications() {
    populateCertificationsGrid();

    const addBtn = document.getElementById('addCertBtn');
    const closeBtn = document.getElementById('closeCertModal');
    const cancelBtn = document.getElementById('cancelCertBtn');
    const form = document.getElementById('certForm');
    const search = document.getElementById('certSearch');
    const modal = document.getElementById('certModal');

    if (addBtn) addBtn.addEventListener('click', () => openCertModal());
    if (closeBtn) closeBtn.addEventListener('click', closeCertModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeCertModal);
    if (form) form.addEventListener('submit', saveCertification);
    if (search) search.addEventListener('input', filterCertifications);
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeCertModal();
        });
    }
}

function openCertModal(certId = null) {
    const modal = document.getElementById('certModal');
    const form = document.getElementById('certForm');
    const titleEl = document.getElementById('certModalTitle');
    if (!modal || !form || !titleEl) return;

    form.reset();
    document.getElementById('certIcon').value = 'fas fa-certificate';

    if (certId) {
        if (String(certId).startsWith('default-cert-')) {
            alert('Default certifications are locked and cannot be edited.');
            return;
        }
        const cert = certifications.find(c => c.id === certId);
        if (cert) {
            titleEl.textContent = 'Edit Certification';
            document.getElementById('certId').value = cert.id;
            document.getElementById('certTitle').value = cert.title;
            document.getElementById('certDescription').value = cert.description;
            document.getElementById('certIcon').value = cert.icon || 'fas fa-certificate';
        }
    } else {
        titleEl.textContent = 'Add New Certification';
        document.getElementById('certId').value = '';
    }

    modal.classList.add('active');
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    const form = document.getElementById('certForm');
    if (modal) modal.classList.remove('active');
    if (form) form.reset();
}

function saveCertification(e) {
    e.preventDefault();

    const idEl = document.getElementById('certId');
    const titleEl = document.getElementById('certTitle');
    const descEl = document.getElementById('certDescription');
    const iconEl = document.getElementById('certIcon');

    if (!titleEl?.value.trim() || !descEl?.value.trim() || !iconEl?.value.trim()) {
        alert('Please fill in all required fields');
        return;
    }

    const id = idEl?.value ? idEl.value : `cert-${Date.now()}`;
    if (String(id).startsWith('default-cert-')) {
        alert('Default certifications cannot be modified.');
        return;
    }

    const data = {
        id,
        title: titleEl.value.trim(),
        description: descEl.value.trim(),
        icon: iconEl.value.trim()
    };

    const existingIndex = certifications.findIndex(c => c.id === id);
    if (existingIndex >= 0) {
        certifications[existingIndex] = { ...certifications[existingIndex], ...data };
    } else {
        certifications.unshift(data);
    }

    localStorage.setItem('customCertifications', JSON.stringify(certifications));
    populateCertificationsGrid();
    closeCertModal();
    updateMainWebsiteCertifications();
    alert('Certification saved successfully!');
}

function deleteCertification(id) {
    if (String(id).startsWith('default-cert-')) {
        alert('Default certifications cannot be deleted.');
        return;
    }
    const cert = certifications.find(c => c.id === id);
    if (cert && confirm(`Delete "${cert.title}"?`)) {
        certifications = certifications.filter(c => c.id !== id);
        localStorage.setItem('customCertifications', JSON.stringify(certifications));
        populateCertificationsGrid();
        updateMainWebsiteCertifications();
        alert('Certification deleted successfully!');
    }
}

function populateCertificationsGrid() {
    const grid = document.getElementById('certificationsAdminGrid');
    if (!grid) return;
    grid.innerHTML = '';

    // Defaults (locked)
    DEFAULT_CERTIFICATIONS.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon"><i class="${cert.icon}"></i></div>
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
            <div style="margin-top: 1rem; font-size: 0.85rem; color: #64748b;">
                <i class="fas fa-lock"></i> Default (locked)
            </div>
        `;
        grid.appendChild(card);
    });

    // Admin-added (editable)
    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon"><i class="${cert.icon || 'fas fa-certificate'}"></i></div>
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
            <div class="action-buttons" style="margin-top: 1rem;">
                <button class="btn-icon" onclick="openCertModal('${cert.id}')" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteCertification('${cert.id}')" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCertifications() {
    const search = document.getElementById('certSearch')?.value.toLowerCase() || '';
    const all = [...DEFAULT_CERTIFICATIONS, ...certifications];

    const filtered = all.filter(c =>
        c.title.toLowerCase().includes(search) || c.description.toLowerCase().includes(search)
    );

    const grid = document.getElementById('certificationsAdminGrid');
    if (!grid) return;
    grid.innerHTML = '';

    filtered.forEach(cert => {
        const isDefault = String(cert.id).startsWith('default-cert-');
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon"><i class="${cert.icon || 'fas fa-certificate'}"></i></div>
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
            ${
                isDefault
                    ? `<div style="margin-top: 1rem; font-size: 0.85rem; color: #64748b;"><i class="fas fa-lock"></i> Default (locked)</div>`
                    : `<div class="action-buttons" style="margin-top: 1rem;">
                        <button class="btn-icon" onclick="openCertModal('${cert.id}')" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon" onclick="deleteCertification('${cert.id}')" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`
            }
        `;
        grid.appendChild(card);
    });
}

function updateMainWebsiteCertifications() {
    try {
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'customCertifications',
            newValue: JSON.stringify(certifications),
            storageArea: localStorage
        }));
    } catch (e) {
        // ignore
    }
    window.dispatchEvent(new CustomEvent('certificationsUpdated'));
}

// ============================================
// LOGIN FUNCTIONALITY
// ============================================

function initLogin() {
    const loginForm = document.getElementById('loginForm');
    const loginModal = document.getElementById('loginModal');
    const adminApp = document.getElementById('adminApp');

    // Check if already logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    // Do not prefill credentials on login screen (admin must enter values)
    
    if (isLoggedIn) {
        loginModal.style.display = 'none';
        adminApp.style.display = 'flex';
        
        // Ensure dashboard is displayed and active
        const dashboardSection = document.getElementById('dashboard');
        const allSections = document.querySelectorAll('.admin-section');
        const navItems = document.querySelectorAll('.nav-item[data-section]');
        const pageTitle = document.getElementById('pageTitle');
        
        // Hide all sections
        allSections.forEach(section => section.classList.remove('active'));
        
        // Show dashboard
        if (dashboardSection) {
            dashboardSection.classList.add('active');
        }
        
        // Update navigation active state
        navItems.forEach(nav => nav.classList.remove('active'));
        const dashboardNav = document.querySelector('.nav-item[data-section="dashboard"]');
        if (dashboardNav) {
            dashboardNav.classList.add('active');
        }
        
        // Update page title
        if (pageTitle) {
            pageTitle.textContent = 'Dashboard';
        }
        
        // Initialize dashboard data
        initDashboard();
        
        return;
    }

    // Password toggle functionality
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');
    const errorMessage = document.getElementById('errorMessage');
    const loginButton = document.getElementById('loginButton');
    const btnText = loginButton?.querySelector('.btn-text');
    const btnLoader = loginButton?.querySelector('.btn-loader');

    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
        });
    }

    // Hide error message when user starts typing
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            if (loginError) {
                loginError.style.display = 'none';
            }
        });
    }

    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.addEventListener('input', function() {
            if (loginError) {
                loginError.style.display = 'none';
            }
        });
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = usernameInput?.value.trim();
            const password = passwordInput?.value.trim();

            // Hide previous errors
            if (loginError) {
                loginError.style.display = 'none';
            }

            // Show loading state
            if (loginButton) {
                loginButton.disabled = true;
                if (btnText) btnText.style.display = 'none';
                if (btnLoader) btnLoader.style.display = 'block';
            }

            // Simulate authentication delay for better UX
            setTimeout(() => {
                // Simple authentication (REPLACE WITH REAL AUTH IN PRODUCTION)
                if (username === 'bCom' && password === 'bcom@Africa') {
                    // Success - store login state
                    localStorage.setItem('adminLoggedIn', 'true');
                    localStorage.removeItem('adminRememberMe');

                    // Hide login modal with animation
                    if (loginModal) {
                        loginModal.style.opacity = '0';
                        loginModal.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            loginModal.style.display = 'none';
                            if (adminApp) {
                                adminApp.style.display = 'flex';
                            }
                        }, 300);
                    }
                    
                    // Ensure dashboard is displayed and active
                    const dashboardSection = document.getElementById('dashboard');
                    const allSections = document.querySelectorAll('.admin-section');
                    const navItems = document.querySelectorAll('.nav-item[data-section]');
                    const pageTitle = document.getElementById('pageTitle');
                    
                    // Hide all sections
                    allSections.forEach(section => section.classList.remove('active'));
                    
                    // Show dashboard
                    if (dashboardSection) {
                        dashboardSection.classList.add('active');
                    }
                    
                    // Update navigation active state
                    navItems.forEach(nav => nav.classList.remove('active'));
                    const dashboardNav = document.querySelector('.nav-item[data-section="dashboard"]');
                    if (dashboardNav) {
                        dashboardNav.classList.add('active');
                    }
                    
                    // Update page title
                    if (pageTitle) {
                        pageTitle.textContent = 'Dashboard';
                    }
                    
                    // Initialize dashboard data
                    initDashboard();
                } else {
                    // Show error message
                    if (loginError && errorMessage) {
                        errorMessage.textContent = 'Invalid credentials. Please check your username and password.';
                        loginError.style.display = 'flex';
                    }
                    
                    // Reset button state
                    if (loginButton) {
                        loginButton.disabled = false;
                        if (btnText) btnText.style.display = 'block';
                        if (btnLoader) btnLoader.style.display = 'none';
                    }

                    // Shake animation on error
                    if (loginForm) {
                        loginForm.classList.remove('shake');
                        setTimeout(() => {
                            loginForm.classList.add('shake');
                            setTimeout(() => {
                                loginForm.classList.remove('shake');
                            }, 500);
                        }, 10);
                    }

                    // Clear password field
                    if (passwordInput) {
                        passwordInput.value = '';
                        passwordInput.focus();
                    }
                }
            }, 800); // Simulate network delay
        });
    }

    // Handle logout - ensure it's accessible globally
    setupLogoutHandler();
}

// ============================================
// LOGOUT HANDLER
// ============================================

// Separate logout handler function for better reliability
function setupLogoutHandler() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        // Remove any existing listeners to prevent duplicates
        const newHandler = function(e) {
            handleLogout(e);
        };
        
        // Clone button to remove all existing listeners
        const parent = logoutBtn.parentNode;
        const newBtn = logoutBtn.cloneNode(true);
        parent.replaceChild(newBtn, logoutBtn);
        
        // Add fresh event listener
        newBtn.addEventListener('click', newHandler);
        
        console.log('Logout handler set up successfully');
    } else {
        console.warn('Logout button not found');
    }
}

// Centralized logout function
function handleLogout(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    if (confirm('Are you sure you want to logout?')) {
        performLogout();
    }
}

// Perform the actual logout
function performLogout() {
    // Clear all login data
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminRememberMe');
    
    // Get elements
    const adminApp = document.getElementById('adminApp');
    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    
    // Hide admin app with fade out
    if (adminApp) {
        adminApp.style.transition = 'opacity 0.3s ease';
        adminApp.style.opacity = '0';
    }
    
    // Show login modal with animation
    setTimeout(() => {
        if (adminApp) {
            adminApp.style.display = 'none';
        }
        
        if (loginModal) {
            loginModal.style.display = 'flex';
            loginModal.style.opacity = '0';
            loginModal.style.transform = 'scale(0.95)';
            
            // Reset form
            if (loginForm) {
                loginForm.reset();
            }
            
            // Clear any error messages
            const loginError = document.getElementById('loginError');
            if (loginError) {
                loginError.style.display = 'none';
            }
            
            // Reset button state
            const loginButton = document.getElementById('loginButton');
            if (loginButton) {
                loginButton.disabled = false;
                const btnText = loginButton.querySelector('.btn-text');
                const btnLoader = loginButton.querySelector('.btn-loader');
                if (btnText) btnText.style.display = 'block';
                if (btnLoader) btnLoader.style.display = 'none';
            }
            
            // Animate login modal in
            setTimeout(() => {
                if (loginModal) {
                    loginModal.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    loginModal.style.opacity = '1';
                    loginModal.style.transform = 'scale(1)';
                }
            }, 10);
            
            // Focus on username field
            const usernameInput = document.getElementById('username');
            if (usernameInput) {
                setTimeout(() => {
                    usernameInput.focus();
                }, 350);
            }
        } else {
            // Fallback: if loginModal not found, reload page
            console.warn('Login modal not found, reloading page...');
            setTimeout(() => {
                location.reload();
            }, 100);
        }
    }, 300);
    
    console.log('Logout performed successfully');
}

// ============================================
// NAVIGATION SYSTEM
// ============================================

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    const sections = document.querySelectorAll('.admin-section');
    const pageTitle = document.getElementById('pageTitle');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');

            // Update active navigation item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Show target section
            sections.forEach(section => section.classList.remove('active'));
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }

            // Update page title
            const spanElement = this.querySelector('span');
            if (spanElement && pageTitle) {
                pageTitle.textContent = spanElement.textContent;
            }

            // Close mobile menu
            const sidebar = document.querySelector('.admin-sidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        });
    });
}

// ============================================
// DASHBOARD
// ============================================

function initDashboard() {
    populateActivityFeed();
    updateDashboardStats();
}

function populateActivityFeed() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;

    activityList.innerHTML = '';

    sampleActivity.forEach(activity => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <div><strong>${activity.action}</strong></div>
            <div>${activity.user}</div>
            <div class="activity-time">${activity.time}</div>
        `;
        activityList.appendChild(item);
    });
}

function updateDashboardStats() {
    // Update user count
    const activeUsersEl = document.getElementById('activeUsers');
    if (activeUsersEl) {
        activeUsersEl.textContent = sampleUsers.filter(u => u.status === 'active').length;
    }

    // Update revenue (calculate from payments)
    const totalRevenueEl = document.getElementById('totalRevenue');
    if (totalRevenueEl) {
        const totalRevenue = samplePayments
            .filter(p => p.status === 'completed')
            .reduce((sum, p) => sum + p.amount, 0);
        totalRevenueEl.textContent = `$${totalRevenue.toLocaleString()}`;
    }

    // Update user activity
    const userActivityEl = document.getElementById('userActivity');
    if (userActivityEl) {
        userActivityEl.textContent = sampleActivity.length * 1000; // Simulated
    }
}

// ============================================
// USERS MANAGEMENT
// ============================================

function initUsers() {
    populateUsersTable();
    
    const userSearch = document.getElementById('userSearch');
    const userStatusFilter = document.getElementById('userStatusFilter');
    const userSort = document.getElementById('userSort');

    if (userSearch) {
        userSearch.addEventListener('input', filterUsers);
    }
    if (userStatusFilter) {
        userStatusFilter.addEventListener('change', filterUsers);
    }
    if (userSort) {
        userSort.addEventListener('change', filterUsers);
    }
}

function populateUsersTable() {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    sampleUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="status-badge ${user.status}">${user.status}</span></td>
            <td>${user.joined}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" onclick="editUser(${user.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon" onclick="deleteUser(${user.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterUsers() {
    const search = document.getElementById('userSearch')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('userStatusFilter')?.value || 'all';
    const sort = document.getElementById('userSort')?.value || 'newest';

    let filtered = sampleUsers.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(search) || 
                             user.email.toLowerCase().includes(search);
        const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    // Sort filtered results
    if (sort === 'newest') {
        filtered.sort((a, b) => new Date(b.joined) - new Date(a.joined));
    } else if (sort === 'oldest') {
        filtered.sort((a, b) => new Date(a.joined) - new Date(b.joined));
    } else if (sort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    filtered.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="status-badge ${user.status}">${user.status}</span></td>
            <td>${user.joined}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" onclick="editUser(${user.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon" onclick="deleteUser(${user.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editUser(id) {
    const user = sampleUsers.find(u => u.id === id);
    if (user) {
        alert(`Edit user: ${user.name}\n(Implement edit modal in production)`);
    }
}

function deleteUser(id) {
    const user = sampleUsers.find(u => u.id === id);
    if (user && confirm(`Are you sure you want to delete ${user.name}?`)) {
        const index = sampleUsers.findIndex(u => u.id === id);
        if (index > -1) {
            sampleUsers.splice(index, 1);
            populateUsersTable();
        }
    }
}

// ============================================
// PAYMENTS MANAGEMENT
// ============================================

function initPayments() {
    populatePaymentsTable();
    
    const paymentSearch = document.getElementById('paymentSearch');
    const paymentStatusFilter = document.getElementById('paymentStatusFilter');

    if (paymentSearch) {
        paymentSearch.addEventListener('input', filterPayments);
    }
    if (paymentStatusFilter) {
        paymentStatusFilter.addEventListener('change', filterPayments);
    }
}

function populatePaymentsTable() {
    const tbody = document.getElementById('paymentsTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    samplePayments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${payment.id}</td>
            <td>${payment.user}</td>
            <td>$${payment.amount}</td>
            <td>${payment.service}</td>
            <td>${payment.date}</td>
            <td><span class="status-badge ${payment.status}">${payment.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" onclick="viewPayment('${payment.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon" onclick="downloadPayment('${payment.id}')" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterPayments() {
    const search = document.getElementById('paymentSearch')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('paymentStatusFilter')?.value || 'all';

    const filtered = samplePayments.filter(payment => {
        const matchesSearch = payment.id.toLowerCase().includes(search) || 
                             payment.user.toLowerCase().includes(search);
        const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const tbody = document.getElementById('paymentsTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    filtered.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${payment.id}</td>
            <td>${payment.user}</td>
            <td>$${payment.amount}</td>
            <td>${payment.service}</td>
            <td>${payment.date}</td>
            <td><span class="status-badge ${payment.status}">${payment.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" onclick="viewPayment('${payment.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon" onclick="downloadPayment('${payment.id}')" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewPayment(id) {
    const payment = samplePayments.find(p => p.id === id);
    if (payment) {
        alert(`Payment Details:\nID: ${payment.id}\nUser: ${payment.user}\nAmount: $${payment.amount}\nService: ${payment.service}\nDate: ${payment.date}\nStatus: ${payment.status}`);
    }
}

function downloadPayment(id) {
    const payment = samplePayments.find(p => p.id === id);
    if (payment) {
        alert(`Downloading receipt for ${payment.id}...\n(Implement download functionality in production)`);
    }
}

// ============================================
// SECURITY & LOGS
// ============================================

function initSecurity() {
    populateLogs();
    
    const logSearch = document.getElementById('logSearch');
    const logTypeFilter = document.getElementById('logTypeFilter');
    const logSeverityFilter = document.getElementById('logSeverityFilter');

    if (logSearch) {
        logSearch.addEventListener('input', filterLogs);
    }
    if (logTypeFilter) {
        logTypeFilter.addEventListener('change', filterLogs);
    }
    if (logSeverityFilter) {
        logSeverityFilter.addEventListener('change', filterLogs);
    }
}

function populateLogs() {
    const logsList = document.getElementById('logsList');
    if (!logsList) return;

    logsList.innerHTML = '';

    sampleLogs.forEach(log => {
        const item = document.createElement('div');
        item.className = 'log-item';
        item.innerHTML = `
            <div class="log-info">
                <div class="log-type">${log.type.toUpperCase()}</div>
                <div class="log-details">${log.details}</div>
            </div>
            <div class="log-time">${log.time}</div>
        `;
        logsList.appendChild(item);
    });
}

function filterLogs() {
    const search = document.getElementById('logSearch')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('logTypeFilter')?.value || 'all';
    const severityFilter = document.getElementById('logSeverityFilter')?.value || 'all';

    const filtered = sampleLogs.filter(log => {
        const matchesSearch = log.details.toLowerCase().includes(search);
        const matchesType = typeFilter === 'all' || log.type === typeFilter;
        const matchesSeverity = severityFilter === 'all' || log.severity === severityFilter;
        return matchesSearch && matchesType && matchesSeverity;
    });

    const logsList = document.getElementById('logsList');
    if (!logsList) return;

    logsList.innerHTML = '';

    filtered.forEach(log => {
        const item = document.createElement('div');
        item.className = 'log-item';
        item.innerHTML = `
            <div class="log-info">
                <div class="log-type">${log.type.toUpperCase()}</div>
                <div class="log-details">${log.details}</div>
            </div>
            <div class="log-time">${log.time}</div>
        `;
        logsList.appendChild(item);
    });
}

// ============================================
// GLOBAL SEARCH
// ============================================

function initSearch() {
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            if (searchTerm.length > 2) {
                // Implement global search across all sections
                console.log('Global search:', searchTerm);
                // You can expand this to search across users, payments, logs, etc.
            }
        });
    }
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.admin-sidebar');

    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            
            // Prevent body scroll when sidebar is open
            if (sidebar.classList.contains('active')) {
                document.body.classList.add('sidebar-open');
            } else {
                document.body.classList.remove('sidebar-open');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && 
                !mobileMenuToggle.contains(e.target) && 
                sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
        
        // Close menu when clicking on nav items (mobile)
        const navItems = sidebar.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        sidebar.classList.remove('active');
                        document.body.classList.remove('sidebar-open');
                    }, 300);
                }
            });
        });
    }
}

// ============================================
// SERVICES MANAGEMENT
// ============================================

function initServices() {
    populateServicesGrid();
    
    const addServiceBtn = document.getElementById('addServiceBtn');
    const closeServiceModal = document.getElementById('closeServiceModal');
    const cancelServiceBtn = document.getElementById('cancelServiceBtn');
    const serviceForm = document.getElementById('serviceForm');
    const serviceSearch = document.getElementById('serviceSearch');
    const serviceCategoryFilter = document.getElementById('serviceCategoryFilter');
    const serviceImage = document.getElementById('serviceImage');
    const serviceModal = document.getElementById('serviceModal');

    if (addServiceBtn) {
        addServiceBtn.addEventListener('click', () => openServiceModal());
    }
    if (closeServiceModal) {
        closeServiceModal.addEventListener('click', closeServiceModal);
    }
    if (cancelServiceBtn) {
        cancelServiceBtn.addEventListener('click', closeServiceModal);
    }
    if (serviceForm) {
        serviceForm.addEventListener('submit', saveService);
    }
    if (serviceSearch) {
        serviceSearch.addEventListener('input', filterServices);
    }
    if (serviceCategoryFilter) {
        serviceCategoryFilter.addEventListener('change', filterServices);
    }
    if (serviceImage) {
        serviceImage.addEventListener('change', previewServiceImage);
    }
    if (serviceModal) {
        serviceModal.addEventListener('click', function(e) {
            if (e.target === this) closeServiceModal();
        });
    }
}

function openServiceModal(serviceId = null) {
    const modal = document.getElementById('serviceModal');
    const form = document.getElementById('serviceForm');
    const modalTitle = document.getElementById('serviceModalTitle');
    const serviceImagePreview = document.getElementById('serviceImagePreview');

    if (!modal || !form || !modalTitle) return;

    form.reset();
    if (serviceImagePreview) {
        serviceImagePreview.innerHTML = '';
    }
    
    if (serviceId) {
        // Default services are immutable (view-only)
        if (String(serviceId).startsWith('default-')) {
            alert('This is a default service and cannot be edited.');
            return;
        }

        const service = services.find(s => s.id === serviceId);
        if (service) {
            modalTitle.textContent = 'Edit Service';
            document.getElementById('serviceId').value = service.id;
            document.getElementById('serviceTitle').value = service.title;
            document.getElementById('serviceDescription').value = service.description;
            document.getElementById('serviceCategory').value = service.category;
            document.getElementById('serviceIcon').value = service.icon;
            document.getElementById('serviceImageUrl').value = service.imageUrl || '';
            
            if (service.imageUrl && serviceImagePreview) {
                serviceImagePreview.innerHTML = `<img src="${service.imageUrl}" alt="Preview" style="max-width: 200px; border-radius: 5px; margin-top: 0.5rem;">`;
            }
        }
    } else {
        modalTitle.textContent = 'Add New Service';
    }
    
    modal.classList.add('active');
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    const form = document.getElementById('serviceForm');
    const serviceImagePreview = document.getElementById('serviceImagePreview');

    if (modal) {
        modal.classList.remove('active');
    }
    if (form) {
        form.reset();
    }
    if (serviceImagePreview) {
        serviceImagePreview.innerHTML = '';
    }
}

function previewServiceImage(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('serviceImagePreview');
            if (preview) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; border-radius: 5px; margin-top: 0.5rem;">`;
            }
        };
        reader.readAsDataURL(file);
    }
}

function saveService(e) {
    e.preventDefault();
    
    const serviceId = document.getElementById('serviceId');
    const serviceTitle = document.getElementById('serviceTitle');
    const serviceDescription = document.getElementById('serviceDescription');
    const serviceCategory = document.getElementById('serviceCategory');
    const serviceIcon = document.getElementById('serviceIcon');
    const serviceImageUrl = document.getElementById('serviceImageUrl');
    const serviceImage = document.getElementById('serviceImage');

    if (!serviceTitle || !serviceTitle.value.trim() || 
        !serviceDescription || !serviceDescription.value.trim() || 
        !serviceCategory || !serviceCategory.value ||
        !serviceIcon || !serviceIcon.value.trim()) {
        alert('Please fill in all required fields');
        return;
    }

    const formData = {
        id: serviceId.value ? serviceId.value : Date.now().toString(),
        title: serviceTitle.value.trim(),
        description: serviceDescription.value.trim(),
        category: serviceCategory.value,
        icon: serviceIcon.value.trim(),
        imageUrl: '',
        image: ''
    };
    
    // Handle file upload
    if (serviceImage && serviceImage.files[0]) {
        const file = serviceImage.files[0];
        formData.fileName = file.name;
        const objectUrl = URL.createObjectURL(file);
        formData.imageUrl = objectUrl;
        formData.image = objectUrl;
        console.log('Service image uploaded:', file.name);
    } else if (serviceImageUrl && serviceImageUrl.value.trim()) {
        formData.imageUrl = serviceImageUrl.value.trim();
        formData.image = serviceImageUrl.value.trim();
    }
    
    // Never allow editing defaults
    if (String(formData.id).startsWith('default-')) {
        alert('Default services cannot be modified.');
        return;
    }

    const existingIndex = services.findIndex(s => s.id === formData.id);
    
    if (existingIndex >= 0) {
        services[existingIndex] = { ...services[existingIndex], ...formData };
    } else {
        services.unshift(formData);
    }
    
    localStorage.setItem('customServices', JSON.stringify(services));
    populateServicesGrid();
    closeServiceModal();
    updateMainWebsiteServices();
    
    const fileInfo = serviceImage && serviceImage.files[0] 
        ? `\nImage "${serviceImage.files[0].name}" uploaded successfully.` 
        : '';
    alert(`Service saved successfully!${fileInfo}`);
}

function populateServicesGrid() {
    const grid = document.getElementById('servicesAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    // Render default services first (locked)
    DEFAULT_SERVICES.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div style="margin-top: 1rem; font-size: 0.85rem; color: #64748b;">
                <i class="fas fa-lock"></i> Default (locked)
            </div>
        `;
        grid.appendChild(card);
    });

    // Then render admin-added services (editable)
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="action-buttons" style="margin-top: 1rem;">
                <button class="btn-icon" onclick="openServiceModal(${service.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteService(${service.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function deleteService(id) {
    if (String(id).startsWith('default-')) {
        alert('Default services cannot be deleted.');
        return;
    }
    const service = services.find(s => s.id === id);
    if (service && confirm(`Are you sure you want to delete "${service.title}"?`)) {
        services = services.filter(s => s.id !== id);
        localStorage.setItem('customServices', JSON.stringify(services));
        populateServicesGrid();
        updateMainWebsiteServices();
        alert('Service deleted successfully!');
    }
}

function filterServices() {
    const search = document.getElementById('serviceSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('serviceCategoryFilter')?.value || 'all';
    
    const all = [...DEFAULT_SERVICES, ...services];

    const filtered = all.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(search) ||
                             service.description.toLowerCase().includes(search);
        const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    const grid = document.getElementById('servicesAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    filtered.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        const isDefault = String(service.id).startsWith('default-');
        card.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            ${
                isDefault
                    ? `<div style="margin-top: 1rem; font-size: 0.85rem; color: #64748b;"><i class="fas fa-lock"></i> Default (locked)</div>`
                    : `<div class="action-buttons" style="margin-top: 1rem;">
                        <button class="btn-icon" onclick="openServiceModal(${service.id})" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon" onclick="deleteService(${service.id})" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`
            }
        `;
        grid.appendChild(card);
    });
}

// ============================================
// PORTFOLIO MANAGEMENT
// ============================================

function initPortfolio() {
    populatePortfolioGrid();
    
    const addPortfolioBtn = document.getElementById('addPortfolioBtn');
    const closePortfolioModal = document.getElementById('closePortfolioModal');
    const cancelPortfolioBtn = document.getElementById('cancelPortfolioBtn');
    const portfolioForm = document.getElementById('portfolioForm');
    const portfolioSearch = document.getElementById('portfolioSearch');
    const portfolioCategoryFilter = document.getElementById('portfolioCategoryFilter');
    const portfolioImage = document.getElementById('portfolioImage');
    const portfolioModal = document.getElementById('portfolioModal');

    if (addPortfolioBtn) {
        addPortfolioBtn.addEventListener('click', () => openPortfolioModal());
    }
    if (closePortfolioModal) {
        closePortfolioModal.addEventListener('click', closePortfolioModal);
    }
    if (cancelPortfolioBtn) {
        cancelPortfolioBtn.addEventListener('click', closePortfolioModal);
    }
    if (portfolioForm) {
        portfolioForm.addEventListener('submit', savePortfolio);
    }
    if (portfolioSearch) {
        portfolioSearch.addEventListener('input', filterPortfolio);
    }
    if (portfolioCategoryFilter) {
        portfolioCategoryFilter.addEventListener('change', filterPortfolio);
    }
    if (portfolioImage) {
        portfolioImage.addEventListener('change', previewPortfolioImage);
    }
    if (portfolioModal) {
        portfolioModal.addEventListener('click', function(e) {
            if (e.target === this) closePortfolioModal();
        });
    }
}

function openPortfolioModal(portfolioId = null) {
    const modal = document.getElementById('portfolioModal');
    const form = document.getElementById('portfolioForm');
    const modalTitle = document.getElementById('portfolioModalTitle');
    const portfolioImagePreview = document.getElementById('portfolioImagePreview');

    if (!modal || !form || !modalTitle) return;

    form.reset();
    if (portfolioImagePreview) {
        portfolioImagePreview.innerHTML = '';
    }
    
    if (portfolioId) {
        const item = portfolio.find(p => p.id === portfolioId);
        if (item) {
            modalTitle.textContent = 'Edit Portfolio Item';
            document.getElementById('portfolioId').value = item.id;
            document.getElementById('portfolioTitle').value = item.title;
            document.getElementById('portfolioDescription').value = item.description;
            document.getElementById('portfolioTag').value = item.tag;
            document.getElementById('portfolioClient').value = item.client || '';
            document.getElementById('portfolioImageUrl').value = item.imageUrl || '';
            
            if (item.imageUrl && portfolioImagePreview) {
                portfolioImagePreview.innerHTML = `<img src="${item.imageUrl}" alt="Preview" style="max-width: 200px; border-radius: 5px; margin-top: 0.5rem;">`;
            } else if (item.image && portfolioImagePreview) {
                portfolioImagePreview.innerHTML = `<img src="${item.image}" alt="Preview" style="max-width: 200px; border-radius: 5px; margin-top: 0.5rem;">`;
            }
        }
    } else {
        modalTitle.textContent = 'Add New Portfolio Item';
    }
    
    modal.classList.add('active');
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    const form = document.getElementById('portfolioForm');
    const portfolioImagePreview = document.getElementById('portfolioImagePreview');

    if (modal) {
        modal.classList.remove('active');
    }
    if (form) {
        form.reset();
    }
    if (portfolioImagePreview) {
        portfolioImagePreview.innerHTML = '';
    }
}

function previewPortfolioImage(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('portfolioImagePreview');
            if (preview) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; border-radius: 5px; margin-top: 0.5rem;">`;
            }
        };
        reader.readAsDataURL(file);
    }
}

function savePortfolio(e) {
    e.preventDefault();
    
    const portfolioId = document.getElementById('portfolioId');
    const portfolioTitle = document.getElementById('portfolioTitle');
    const portfolioDescription = document.getElementById('portfolioDescription');
    const portfolioTag = document.getElementById('portfolioTag');
    const portfolioClient = document.getElementById('portfolioClient');
    const portfolioImageUrl = document.getElementById('portfolioImageUrl');
    const portfolioImage = document.getElementById('portfolioImage');

    if (!portfolioTitle || !portfolioTitle.value.trim() || 
        !portfolioDescription || !portfolioDescription.value.trim() || 
        !portfolioTag || !portfolioTag.value) {
        alert('Please fill in all required fields (Title, Description, Category)');
        return;
    }

    const formData = {
        id: parseInt(portfolioId.value) || Date.now(),
        title: portfolioTitle.value.trim(),
        description: portfolioDescription.value.trim(),
        tag: portfolioTag.value,
        client: portfolioClient ? portfolioClient.value.trim() : '',
        imageUrl: '',
        image: 'default-portfolio.jpg'
    };
    
    // Handle file upload
    if (portfolioImage && portfolioImage.files[0]) {
        const file = portfolioImage.files[0];
        formData.fileName = file.name;
        const objectUrl = URL.createObjectURL(file);
        formData.imageUrl = objectUrl;
        formData.image = objectUrl;
        console.log('Portfolio image uploaded:', file.name);
    } else if (portfolioImageUrl && portfolioImageUrl.value.trim()) {
        formData.imageUrl = portfolioImageUrl.value.trim();
        formData.image = portfolioImageUrl.value.trim();
    }
    
    const existingIndex = portfolio.findIndex(p => p.id === formData.id);
    
    if (existingIndex >= 0) {
        portfolio[existingIndex] = { ...portfolio[existingIndex], ...formData };
    } else {
        portfolio.unshift(formData);
    }
    
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
    populatePortfolioGrid();
    closePortfolioModal();
    updateMainWebsitePortfolio();
    
    const fileInfo = portfolioImage && portfolioImage.files[0] 
        ? `\nImage "${portfolioImage.files[0].name}" uploaded successfully.` 
        : '';
    alert(`Portfolio item saved successfully!${fileInfo}`);
}

function populatePortfolioGrid() {
    const grid = document.getElementById('portfolioAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    portfolio.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-admin-card';
        const imageSrc = item.imageUrl || item.image || 'default-portfolio.jpg';
        card.innerHTML = `
            <div class="portfolio-admin-image">
                <img src="${imageSrc}" alt="${item.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-placeholder" style="display: none; height: 200px; align-items: center; justify-content: center; background: #f5f7fa;">
                    <i class="fas fa-image" style="font-size: 3rem; color: #ccc;"></i>
                </div>
            </div>
            <div class="portfolio-admin-content">
                <span class="portfolio-admin-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.client ? `<p class="portfolio-client"><strong>Client:</strong> ${item.client}</p>` : ''}
                <div class="portfolio-admin-actions">
                    <button class="btn-icon" onclick="openPortfolioModal(${item.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon" onclick="deletePortfolio(${item.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function deletePortfolio(id) {
    const item = portfolio.find(p => p.id === id);
    if (item && confirm(`Are you sure you want to delete "${item.title}"?`)) {
        portfolio = portfolio.filter(p => p.id !== id);
        localStorage.setItem('portfolio', JSON.stringify(portfolio));
        populatePortfolioGrid();
        updateMainWebsitePortfolio();
        alert('Portfolio item deleted successfully!');
    }
}

function filterPortfolio() {
    const search = document.getElementById('portfolioSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('portfolioCategoryFilter')?.value || 'all';
    
    const filtered = portfolio.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(search) || 
                             item.description.toLowerCase().includes(search);
        const matchesCategory = categoryFilter === 'all' || item.tag === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    const grid = document.getElementById('portfolioAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-admin-card';
        const imageSrc = item.imageUrl || item.image || 'default-portfolio.jpg';
        card.innerHTML = `
            <div class="portfolio-admin-image">
                <img src="${imageSrc}" alt="${item.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-placeholder" style="display: none; height: 200px; align-items: center; justify-content: center; background: #f5f7fa;">
                    <i class="fas fa-image" style="font-size: 3rem; color: #ccc;"></i>
                </div>
            </div>
            <div class="portfolio-admin-content">
                <span class="portfolio-admin-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.client ? `<p class="portfolio-client"><strong>Client:</strong> ${item.client}</p>` : ''}
                <div class="portfolio-admin-actions">
                    <button class="btn-icon" onclick="openPortfolioModal(${item.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon" onclick="deletePortfolio(${item.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// BLOG MANAGEMENT
// ============================================

function initBlog() {
    populateBlogGrid();
    
    const addBlogBtn = document.getElementById('addBlogBtn');
    const closeBlogModal = document.getElementById('closeBlogModal');
    const cancelBlogBtn = document.getElementById('cancelBlogBtn');
    const blogForm = document.getElementById('blogForm');
    const blogSearch = document.getElementById('blogSearch');
    const blogCategoryFilter = document.getElementById('blogCategoryFilter');
    const blogSort = document.getElementById('blogSort');
    const blogImage = document.getElementById('blogImage');
    const blogModal = document.getElementById('blogModal');

    if (addBlogBtn) {
        addBlogBtn.addEventListener('click', () => openBlogModal());
    }
    if (closeBlogModal) {
        closeBlogModal.addEventListener('click', closeBlogModal);
    }
    if (cancelBlogBtn) {
        cancelBlogBtn.addEventListener('click', closeBlogModal);
    }
    if (blogForm) {
        blogForm.addEventListener('submit', saveBlogPost);
    }
    if (blogSearch) {
        blogSearch.addEventListener('input', filterBlog);
    }
    if (blogCategoryFilter) {
        blogCategoryFilter.addEventListener('change', filterBlog);
    }
    if (blogSort) {
        blogSort.addEventListener('change', filterBlog);
    }
    if (blogImage) {
        blogImage.addEventListener('change', previewBlogImage);
    }
    if (blogModal) {
        blogModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeBlogModal();
            }
        });
    }
}

function openBlogModal(blogId = null) {
    const modal = document.getElementById('blogModal');
    const form = document.getElementById('blogForm');
    const modalTitle = document.getElementById('blogModalTitle');
    const blogImagePreview = document.getElementById('blogImagePreview');

    if (!modal || !form || !modalTitle) return;

    form.reset();
    if (blogImagePreview) {
        blogImagePreview.innerHTML = '';
    }
    
    if (blogId) {
        const post = blogPosts.find(p => p.id === blogId);
        if (post) {
            modalTitle.textContent = 'Edit Blog Post';
            document.getElementById('blogId').value = post.id;
            document.getElementById('blogTitle').value = post.title;
            document.getElementById('blogDescription').value = post.description;
            document.getElementById('blogCategory').value = post.category;
            document.getElementById('blogDate').value = post.date;
            document.getElementById('blogImageUrl').value = post.imageUrl || '';
            document.getElementById('blogContent').value = post.content || '';
            document.getElementById('blogLink').value = post.link || '';

            // Preview persisted image (IndexedDB) or URL
            if (blogImagePreview) {
                blogImagePreview.innerHTML = '';
                const showImg = (src) => {
                    blogImagePreview.innerHTML = `<img src="${src}" alt="Preview" style="max-width: 200px; border-radius: 5px;">`;
                };

                if (post.imageKey) {
                    (async () => {
                        try {
                            const rec = await idbGetBlogImage(post.imageKey);
                            if (rec?.blob) {
                                const url = URL.createObjectURL(rec.blob);
                                showImg(url);
                            }
                        } catch (e) {
                            // ignore
                        }
                    })();
                } else if (post.imageUrl && !post.imageUrl.startsWith('blob:')) {
                    showImg(post.imageUrl);
                } else if (post.image && !post.image.startsWith('blob:')) {
                    showImg(post.image);
                }
            }
        }
    } else {
        modalTitle.textContent = 'Add New Blog Post';
        const blogDate = document.getElementById('blogDate');
        if (blogDate) {
            blogDate.value = new Date().toISOString().split('T')[0];
        }
    }
    
    modal.classList.add('active');
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    const form = document.getElementById('blogForm');
    const blogImagePreview = document.getElementById('blogImagePreview');

    if (modal) {
        modal.classList.remove('active');
    }
    if (form) {
        form.reset();
    }
    if (blogImagePreview) {
        blogImagePreview.innerHTML = '';
    }
}

function previewBlogImage(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('blogImagePreview');
            if (preview) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; border-radius: 5px; margin-top: 0.5rem;">`;
            }
        };
        reader.readAsDataURL(file);
    }
}

async function saveBlogPost(e) {
    e.preventDefault();
    
    const blogId = document.getElementById('blogId');
    const blogTitle = document.getElementById('blogTitle');
    const blogDescription = document.getElementById('blogDescription');
    const blogCategory = document.getElementById('blogCategory');
    const blogDate = document.getElementById('blogDate');
    const blogImageUrl = document.getElementById('blogImageUrl');
    const blogContent = document.getElementById('blogContent');
    const blogLink = document.getElementById('blogLink');
    const blogImage = document.getElementById('blogImage');

    // Validate only required fields
    if (!blogTitle || !blogTitle.value.trim() || 
        !blogDescription || !blogDescription.value.trim() || 
        !blogCategory || !blogCategory.value || 
        !blogDate || !blogDate.value) {
        alert('Please fill in all required fields (Title, Description, Category, Date)');
        return;
    }

    const formData = {
        id: parseInt(blogId.value) || Date.now(),
        title: blogTitle.value.trim(),
        description: blogDescription.value.trim(),
        category: blogCategory.value,
        date: blogDate.value,
        imageUrl: blogImageUrl ? blogImageUrl.value.trim() : '',
        imageKey: '',
        content: blogContent ? blogContent.value.trim() : '',
        link: blogLink ? (blogLink.value.trim() || '#') : '#',
        image: 'default-blog.jpg'
    };
    
    // Handle file upload - persist in IndexedDB so it survives refresh
    if (blogImage && blogImage.files[0]) {
        const file = blogImage.files[0];
        try {
            const key = `blog-${formData.id}`;
            await idbPutBlogImage(key, file);
            formData.imageKey = key;
            formData.imageUrl = '';
            formData.image = 'default-blog.jpg';
        } catch (err) {
            console.error('Blog image save error:', err);
            alert('Could not save the image. Please try a smaller image or use an Image URL.');
            return;
        }
    } else if (blogImageUrl && blogImageUrl.value.trim()) {
        // Use provided URL if no file uploaded
        formData.imageUrl = blogImageUrl.value.trim();
        formData.image = blogImageUrl.value.trim();
    }
    
    const existingIndex = blogPosts.findIndex(p => p.id === formData.id);
    
    if (existingIndex >= 0) {
        blogPosts[existingIndex] = { ...blogPosts[existingIndex], ...formData };
    } else {
        blogPosts.unshift(formData);
    }

    // Keep at most 6 posts (newest first)
    blogPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);
    
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    // Update dashboard immediately
    populateBlogGrid();
    closeBlogModal();
    updateMainWebsiteBlog();
    
    // Show success message with file info if uploaded
    const fileInfo = blogImage && blogImage.files[0] 
        ? `\nFile "${blogImage.files[0].name}" uploaded successfully.` 
        : '';
    alert(`Blog post saved successfully!${fileInfo}`);
}

function populateBlogGrid() {
    const grid = document.getElementById('blogAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-admin-card';
        const imageSrc = (post.imageUrl && !post.imageUrl.startsWith('blob:')) ? post.imageUrl : (post.image && !post.image.startsWith('blob:') ? post.image : 'default-blog.jpg');
        card.innerHTML = `
            <img src="${imageSrc}" 
                 alt="${post.title}" 
                 class="blog-admin-card-image"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display: none; height: 200px; align-items: center; justify-content: center; background: #f5f7fa;">
                <i class="fas fa-image" style="font-size: 3rem; color: #ccc;"></i>
            </div>
            <div class="blog-admin-card-content">
                <span class="blog-admin-card-category">${post.category}</span>
                <h3 class="blog-admin-card-title">${post.title}</h3>
                <p class="blog-admin-card-description">${post.description}</p>
                <p class="blog-admin-card-date">${new Date(post.date).toLocaleDateString()}</p>
                <div class="blog-admin-card-actions">
                    <button class="btn-icon" onclick="openBlogModal(${post.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon" onclick="deleteBlogPost(${post.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);

        // If image is stored in IndexedDB, load it and replace the src
        if (post.imageKey) {
            const img = card.querySelector('img.blog-admin-card-image');
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
}

function deleteBlogPost(id) {
    const post = blogPosts.find(p => p.id === id);
    if (post && confirm(`Are you sure you want to delete "${post.title}"?`)) {
        blogPosts = blogPosts.filter(p => p.id !== id);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        populateBlogGrid();
        updateMainWebsiteBlog();
        alert('Blog post deleted successfully!');
    }
}

function filterBlog() {
    const search = document.getElementById('blogSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('blogCategoryFilter')?.value || 'all';
    const sort = document.getElementById('blogSort')?.value || 'newest';
    
    let filtered = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(search) || 
                             post.description.toLowerCase().includes(search);
        const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    // Sort filtered results
    if (sort === 'newest') {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === 'oldest') {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sort === 'title') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    const grid = document.getElementById('blogAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    filtered.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-admin-card';
        const imageSrc = post.imageUrl || post.image || 'default-blog.jpg';
        card.innerHTML = `
            <img src="${imageSrc}" 
                 alt="${post.title}" 
                 class="blog-admin-card-image"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display: none; height: 200px; align-items: center; justify-content: center; background: #f5f7fa;">
                <i class="fas fa-image" style="font-size: 3rem; color: #ccc;"></i>
            </div>
            <div class="blog-admin-card-content">
                <span class="blog-admin-card-category">${post.category}</span>
                <h3 class="blog-admin-card-title">${post.title}</h3>
                <p class="blog-admin-card-description">${post.description}</p>
                <p class="blog-admin-card-date">${new Date(post.date).toLocaleDateString()}</p>
                <div class="blog-admin-card-actions">
                    <button class="btn-icon" onclick="openBlogModal(${post.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon" onclick="deleteBlogPost(${post.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// RESOURCES MANAGEMENT
// ============================================

function initResources() {
    populateResourcesGrid();
    
    const addResourceBtn = document.getElementById('addResourceBtn');
    const closeResourceModal = document.getElementById('closeResourceModal');
    const cancelResourceBtn = document.getElementById('cancelResourceBtn');
    const resourceForm = document.getElementById('resourceForm');
    const resourceSearch = document.getElementById('resourceSearch');
    const resourceTypeFilter = document.getElementById('resourceTypeFilter');
    const resourceModal = document.getElementById('resourceModal');

    if (addResourceBtn) {
        addResourceBtn.addEventListener('click', () => openResourceModal());
    }
    if (closeResourceModal) {
        closeResourceModal.addEventListener('click', closeResourceModal);
    }
    if (cancelResourceBtn) {
        cancelResourceBtn.addEventListener('click', closeResourceModal);
    }
    if (resourceForm) {
        resourceForm.addEventListener('submit', saveResource);
    }
    if (resourceSearch) {
        resourceSearch.addEventListener('input', filterResources);
    }
    if (resourceTypeFilter) {
        resourceTypeFilter.addEventListener('change', filterResources);
    }
    if (resourceModal) {
        resourceModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeResourceModal();
            }
        });
    }
    
    // Clear existing file info when new file is selected
    const resourceFile = document.getElementById('resourceFile');
    if (resourceFile) {
        resourceFile.addEventListener('change', function() {
            if (this.files[0]) {
                const existingFileInfo = document.getElementById('existingFileInfo');
                if (existingFileInfo) {
                    existingFileInfo.style.display = 'none';
                }
            }
        });
    }
}

function openResourceModal(resourceId = null) {
    const modal = document.getElementById('resourceModal');
    const form = document.getElementById('resourceForm');
    const modalTitle = document.getElementById('resourceModalTitle');

    if (!modal || !form || !modalTitle) return;

    form.reset();
    
    // Store current resource data for file preservation
    if (resourceId) {
        const resource = resources.find(r => r.id === resourceId);
        if (resource) {
            modalTitle.textContent = 'Edit Resource';
            document.getElementById('resourceId').value = resource.id;
            document.getElementById('resourceTitle').value = resource.title;
            document.getElementById('resourceDescription').value = resource.description;
            document.getElementById('resourceType').value = resource.type;
            document.getElementById('resourceIcon').value = resource.icon;
            document.getElementById('resourceUrl').value = resource.url && !resource.url.startsWith('data:') && !resource.url.startsWith('blob:') ? resource.url : '';
            document.getElementById('resourceLinkText').value = resource.linkText;
            
            // Store existing file data in a data attribute for preservation
            if (resource.fileData || resource.fileKey) {
                form.dataset.existingFileData = resource.fileData;
                form.dataset.existingFileKey = resource.fileKey || '';
                form.dataset.existingFileName = resource.fileName || '';
                form.dataset.existingFileType = resource.fileType || '';
                form.dataset.existingFileSize = resource.fileSize || 0;
                
                // Show existing file info
                const existingFileInfo = document.getElementById('existingFileInfo');
                const existingFileName = document.getElementById('existingFileName');
                if (existingFileInfo && existingFileName) {
                    existingFileInfo.style.display = 'block';
                    existingFileName.textContent = resource.fileName || 'File';
                }
            } else {
                // Hide existing file info if no file
                const existingFileInfo = document.getElementById('existingFileInfo');
                if (existingFileInfo) {
                    existingFileInfo.style.display = 'none';
                }
            }
        }
    } else {
        modalTitle.textContent = 'Add New Resource';
        // Clear any stored file data
        if (form.dataset) {
            delete form.dataset.existingFileData;
            delete form.dataset.existingFileKey;
            delete form.dataset.existingFileName;
            delete form.dataset.existingFileType;
            delete form.dataset.existingFileSize;
        }
        // Hide existing file info
        const existingFileInfo = document.getElementById('existingFileInfo');
        if (existingFileInfo) {
            existingFileInfo.style.display = 'none';
        }
    }
    
    modal.classList.add('active');
}

function closeResourceModal() {
    const modal = document.getElementById('resourceModal');
    const form = document.getElementById('resourceForm');

    if (modal) {
        modal.classList.remove('active');
    }
    if (form) {
        form.reset();
    }
}

function saveResource(e) {
    e.preventDefault();
    
    const resourceId = document.getElementById('resourceId');
    const resourceTitle = document.getElementById('resourceTitle');
    const resourceDescription = document.getElementById('resourceDescription');
    const resourceType = document.getElementById('resourceType');
    const resourceIcon = document.getElementById('resourceIcon');
    const resourceUrl = document.getElementById('resourceUrl');
    const resourceLinkText = document.getElementById('resourceLinkText');
    const resourceFile = document.getElementById('resourceFile');

    // Validate only required fields (URL is optional)
    if (!resourceTitle || !resourceTitle.value.trim() || 
        !resourceDescription || !resourceDescription.value.trim() || 
        !resourceType || !resourceType.value) {
        alert('Please fill in all required fields (Title, Description, Type)');
        return;
    }

    const formData = {
        id: parseInt(resourceId.value) || Date.now(),
        title: resourceTitle.value.trim(),
        description: resourceDescription.value.trim(),
        type: resourceType.value,
        icon: resourceIcon ? resourceIcon.value.trim() : 'fas fa-file',
        url: '#', // Default URL, will be updated if provided
        linkText: resourceLinkText ? resourceLinkText.value.trim() || 'Download' : 'Download',
        fileName: '',
        fileData: null,
        fileKey: '',
        fileType: '',
        fileSize: 0
    };
    
    // Preserve existing file data if editing and no new file uploaded
    const form = document.getElementById('resourceForm');
    if (form && (form.dataset.existingFileData || form.dataset.existingFileKey) && (!resourceFile || !resourceFile.files[0])) {
        formData.fileData = form.dataset.existingFileData || null;
        formData.fileKey = form.dataset.existingFileKey || '';
        formData.fileName = form.dataset.existingFileName || '';
        formData.fileType = form.dataset.existingFileType || '';
        formData.fileSize = parseInt(form.dataset.existingFileSize) || 0;
        if (formData.fileData) {
            formData.url = formData.fileData; // Use fileData as URL
        }
    }
    
    // Handle file upload - store file data for download
    if (resourceFile && resourceFile.files[0]) {
        const file = resourceFile.files[0];
        formData.fileName = file.name;
        formData.fileSize = file.size;
        formData.fileType = file.type;

        // Prefer localStorage for small files; use IndexedDB for larger files / quota issues
        const MAX_LOCALSTORAGE_BYTES = 1_500_000; // ~1.5MB safe threshold (base64 expands)

        const saveResourceMeta = () => {
            const existingIndex = resources.findIndex(r => r.id === formData.id);
            if (existingIndex >= 0) {
                resources[existingIndex] = { ...resources[existingIndex], ...formData };
            } else {
                resources.unshift(formData);
            }
            localStorage.setItem('resources', JSON.stringify(resources));
            populateResourcesGrid();
            closeResourceModal();
            updateMainWebsiteResources();
        };

        // Large file -> IndexedDB
        if (file.size > MAX_LOCALSTORAGE_BYTES) {
            (async () => {
                try {
                    const key = `resource-${formData.id}`;
                    await idbPutResourceFile(key, file);
                    formData.fileKey = key;
                    formData.fileData = null;
                    formData.url = '#';
                    saveResourceMeta();
                    alert(`Resource saved successfully!\nFile "${file.name}" uploaded and ready for download.`);
                } catch (err) {
                    console.error('IndexedDB save error:', err);
                    alert('This file is too large to save in the browser. Please use a smaller file or provide a URL.');
                }
            })();
            return;
        }

        // Small file -> base64 in localStorage (with quota fallback)
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                formData.fileData = e.target.result; // data URL
                formData.url = e.target.result;
                formData.fileKey = '';
                saveResourceMeta();
                alert(`Resource saved successfully!\nFile "${file.name}" uploaded and ready for download.`);
            } catch (err) {
                // QuotaExceededError -> fallback to IndexedDB
                (async () => {
                    try {
                        const key = `resource-${formData.id}`;
                        await idbPutResourceFile(key, file);
                        formData.fileKey = key;
                        formData.fileData = null;
                        formData.url = '#';
                        saveResourceMeta();
                        alert(`Resource saved successfully!\nFile "${file.name}" uploaded and ready for download.`);
                    } catch (idbErr) {
                        console.error('Save error:', err, idbErr);
                        alert('Could not save file. Please use a smaller file or provide a URL.');
                    }
                })();
            }
        };
        reader.onerror = function() {
            alert('Error reading file. Please try again.');
        };
        reader.readAsDataURL(file);
        return;
    } else if (resourceUrl && resourceUrl.value.trim()) {
        // Use provided URL if no file uploaded (URL is optional)
        formData.url = resourceUrl.value.trim();
    }
    // If neither file nor URL provided, url remains '#' (still saves successfully)
    
    const existingIndex = resources.findIndex(r => r.id === formData.id);
    
    if (existingIndex >= 0) {
        resources[existingIndex] = { ...resources[existingIndex], ...formData };
    } else {
        resources.unshift(formData);
    }
    
    // Save to localStorage
    localStorage.setItem('resources', JSON.stringify(resources));
    
    // Update dashboard immediately
    populateResourcesGrid();
    closeResourceModal();
    updateMainWebsiteResources();
    
    // Show success message
    const fileInfo = resourceUrl && resourceUrl.value.trim() 
        ? `\nResource URL saved.` 
        : `\nNote: No file or URL provided. Resource saved with default link.`;
    alert(`Resource saved successfully!${fileInfo}`);
}

function populateResourcesGrid() {
    const grid = document.getElementById('resourcesAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    resources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-admin-card';
        card.innerHTML = `
            <div class="resource-admin-card-icon">
                <i class="${resource.icon}"></i>
            </div>
            <h3 class="resource-admin-card-title">${resource.title}</h3>
            <p class="resource-admin-card-description">${resource.description}</p>
            <div class="resource-admin-card-actions">
                <button class="btn-icon" onclick="openResourceModal(${resource.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteResource(${resource.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function deleteResource(id) {
    const resource = resources.find(r => r.id === id);
    if (resource && confirm(`Are you sure you want to delete "${resource.title}"?`)) {
        resources = resources.filter(r => r.id !== id);
        localStorage.setItem('resources', JSON.stringify(resources));
        populateResourcesGrid();
        updateMainWebsiteResources();
        alert('Resource deleted successfully!');
    }
}

function filterResources() {
    const search = document.getElementById('resourceSearch')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('resourceTypeFilter')?.value || 'all';
    
    const filtered = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(search) || 
                             resource.description.toLowerCase().includes(search);
        const matchesType = typeFilter === 'all' || resource.type === typeFilter;
        return matchesSearch && matchesType;
    });
    
    const grid = document.getElementById('resourcesAdminGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    filtered.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-admin-card';
        card.innerHTML = `
            <div class="resource-admin-card-icon">
                <i class="${resource.icon}"></i>
            </div>
            <h3 class="resource-admin-card-title">${resource.title}</h3>
            <p class="resource-admin-card-description">${resource.description}</p>
            <div class="resource-admin-card-actions">
                <button class="btn-icon" onclick="openResourceModal(${resource.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="deleteResource(${resource.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// MAIN WEBSITE SYNC FUNCTIONS
// ============================================

function updateMainWebsiteServices() {
    // Data is already saved to localStorage (customServices), which the main website reads from
    try {
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'customServices',
            newValue: JSON.stringify(services),
            storageArea: localStorage
        }));
    } catch (e) {
        console.log('Services updated in localStorage. Main website will auto-refresh.');
    }
    // Force immediate update by triggering custom event
    window.dispatchEvent(new CustomEvent('servicesUpdated'));
}

function updateMainWebsitePortfolio() {
    // Data is already saved to localStorage, which the main website reads from
    try {
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'portfolio',
            newValue: JSON.stringify(portfolio),
            storageArea: localStorage
        }));
    } catch (e) {
        console.log('Portfolio updated in localStorage. Main website will auto-refresh.');
    }
    // Force immediate update by triggering custom event
    window.dispatchEvent(new CustomEvent('portfolioUpdated'));
}

function updateMainWebsiteBlog() {
    // Data is already saved to localStorage, which the main website reads from
    // Trigger multiple update mechanisms for maximum compatibility
    
    // 1. Trigger custom event for same-tab updates (immediate)
    window.dispatchEvent(new CustomEvent('blogUpdated', {
        detail: { blogPosts: blogPosts }
    }));
    
    // 2. Manually trigger storage event for cross-tab updates
    try {
        // Create a proper storage event
        const storageEvent = new StorageEvent('storage', {
            key: 'blogPosts',
            newValue: JSON.stringify(blogPosts),
            oldValue: localStorage.getItem('blogPosts'),
            storageArea: localStorage,
            url: window.location.href
        });
        window.dispatchEvent(storageEvent);
    } catch (e) {
        // Fallback: use custom event if StorageEvent fails
        console.log('Using custom event for blog update');
    }
    
    // 3. Force immediate update by setting a flag
    localStorage.setItem('blogPostsUpdated', Date.now().toString());
    
    // 4. Also trigger a visibility change to force refresh if tab is visible
    if (document.visibilityState === 'visible') {
        window.dispatchEvent(new Event('visibilitychange'));
    }
    
    console.log('Blog posts updated - triggering real-time sync');
}

function updateMainWebsiteResources() {
    // Data is already saved to localStorage, which the main website reads from
    try {
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'resources',
            newValue: JSON.stringify(resources),
            storageArea: localStorage
        }));
    } catch (e) {
        console.log('Resources updated in localStorage. Main website will auto-refresh.');
    }
    // Force immediate update by triggering custom event
    window.dispatchEvent(new CustomEvent('resourcesUpdated'));
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format date helper
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Validate email helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Export data helper (for backup)
function exportData() {
    const data = {
        blogPosts: blogPosts,
        resources: resources,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bcom-admin-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Import data helper (for restore)
function importData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.blogPosts) {
                blogPosts = data.blogPosts;
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                populateBlogGrid();
            }
            if (data.resources) {
                resources = data.resources;
                localStorage.setItem('resources', JSON.stringify(resources));
                populateResourcesGrid();
            }
            alert('Data imported successfully!');
        } catch (error) {
            alert('Error importing data: ' + error.message);
        }
    };
    reader.readAsText(file);
}