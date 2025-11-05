// Portfolio data with beautiful projects
const portfolioItems = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A fully responsive e-commerce website with advanced filtering, shopping cart, and secure payment integration.",
        image: "fas fa-shopping-cart",
        category: "web",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "Travel Blog",
        description: "A beautiful travel blog with interactive maps, photo galleries, and social sharing features.",
        image: "fas fa-globe-americas",
        category: "design",
        technologies: ["WordPress", "PHP", "JavaScript"]
    },
    {
        id: 3,
        title: "Fitness App",
        description: "A mobile fitness application with workout tracking, progress analytics, and social challenges.",
        image: "fas fa-dumbbell",
        category: "mobile",
        technologies: ["React Native", "Firebase", "Redux"]
    },
    {
        id: 4,
        title: "Corporate Website",
        description: "A professional corporate website with CMS integration, team management, and client portal.",
        image: "fas fa-building",
        category: "web",
        technologies: ["Vue.js", "Laravel", "MySQL"]
    },
    {
        id: 5,
        title: "Restaurant Booking",
        description: "An online reservation system for restaurants with table management and customer notifications.",
        image: "fas fa-utensils",
        category: "mobile",
        technologies: ["Flutter", "Node.js", "MongoDB"]
    },
    {
        id: 6,
        title: "Portfolio Showcase",
        description: "A creative portfolio website for artists with image galleries, filtering, and lightbox effects.",
        image: "fas fa-palette",
        category: "design",
        technologies: ["HTML5", "CSS3", "JavaScript"]
    }
];

// Services data
const services = [
    {
        id: 1,
        title: "Web Design & Development",
        description: "We create stunning, responsive websites that provide exceptional user experiences and drive conversions.",
        price: "$1,500 - $5,000",
        features: [
            "Custom Design",
            "Responsive Layout",
            "SEO Optimization",
            "CMS Integration",
            "E-commerce Solutions"
        ],
        icon: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver seamless performance on all devices.",
        price: "$3,000 - $15,000",
        features: [
            "iOS & Android",
            "UI/UX Design",
            "API Integration",
            "App Store Deployment",
            "Maintenance & Support"
        ],
        icon: "fas fa-mobile-alt"
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies to increase your online visibility and grow your business.",
        price: "$500 - $3,000/month",
        features: [
            "SEO Strategy",
            "Social Media Marketing",
            "Content Creation",
            "PPC Advertising",
            "Analytics & Reporting"
        ],
        icon: "fas fa-chart-line"
    },
    {
        id: 4,
        title: "Brand Identity",
        description: "Complete brand identity packages including logo design, style guides, and marketing materials.",
        price: "$1,000 - $4,000",
        features: [
            "Logo Design",
            "Brand Guidelines",
            "Business Cards",
            "Social Media Kit",
            "Stationery Design"
        ],
        icon: "fas fa-palette"
    }
];

// Function to load portfolio items
function loadPortfolioItems() {
    const portfolioContainer = document.getElementById('portfolio-items');
    
    if (portfolioContainer) {
        portfolioContainer.innerHTML = '';
        
        portfolioItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            
            portfolioItem.innerHTML = `
                <div class="portfolio-img">
                    <i class="${item.image}"></i>
                </div>
                <div class="portfolio-content">
                    <h3>${item.title}</h3>
                    <span class="category">${getCategoryName(item.category)}</span>
                    <p>${item.description}</p>
                    <div class="technologies">
                        ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            portfolioContainer.appendChild(portfolioItem);
        });
    }
}

// Function to get category name
function getCategoryName(category) {
    const categories = {
        'web': 'Web Development',
        'mobile': 'Mobile App',
        'design': 'UI/UX Design'
    };
    
    return categories[category] || category;
}

// Function to load services
function loadServices() {
    const servicesContainer = document.getElementById('services-container');
    
    if (servicesContainer) {
        servicesContainer.innerHTML = '';
        
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            
            serviceCard.innerHTML = `
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <div class="service-content">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <div class="price">${service.price}</div>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Get Quote</a>
                </div>
            `;
            
            servicesContainer.appendChild(serviceCard);
        });
    }
}

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadPortfolioItems();
    loadServices();
});