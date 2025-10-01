// script.js - Enhanced with Assignment 2 Requirements

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize fun fact toggle
    initFunFactToggle();
    
    // Set active navigation based on current page
    setActiveNavigation();
    
    // Page-specific initializations
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        initHomePage();
    } else if (currentPage === 'about.html') {
        initAboutPage();
    } else if (currentPage === 'gallery.html') {
        initGalleryPage();
    }
});

/**
 * Initialize mobile navigation functionality
 */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

/**
 * Initialize fun fact toggle functionality
 */
function initFunFactToggle() {
    const toggleBtn = document.querySelector('.fact-toggle');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const factContent = this.nextElementSibling;
            
            if (factContent.style.display === 'block') {
                factContent.style.display = 'none';
                this.textContent = 'Discover Fun Fact';
            } else {
                factContent.style.display = 'block';
                this.textContent = 'Hide Fun Fact';
            }
        });
    }
}

/**
 * Set active navigation based on current page
 */
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Home Page Initialization
 */
function initHomePage() {
    // Add dynamic welcome message
    addWelcomeMessage();
    
    // Add random background color button
    addBackgroundColorButton();
    
    // Initialize slideshow
    initSlideshow();
    
    // Bonus: Add weather widget
    addWeatherWidget();
    
    // Add staggered animation to paragraphs
    addStaggeredAnimation();
}

/**
 * Add dynamic welcome message with current date and time
 */
function addWelcomeMessage() {
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const dateTimeString = now.toLocaleDateString('en-US', options);
        
        const welcomeMessage = document.createElement('p');
        welcomeMessage.className = 'welcome-message';
        welcomeMessage.textContent = `Today is ${dateTimeString}`;
        welcomeMessage.style.fontStyle = 'italic';
        welcomeMessage.style.marginTop = '10px';
        welcomeMessage.style.color = '#7f8c8d';
        
        heroContent.appendChild(welcomeMessage);
    }
}

/**
 * Add button to change background color randomly
 */
function addBackgroundColorButton() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const colorButton = document.createElement('button');
        colorButton.textContent = 'Change Theme Color';
        colorButton.id = 'color-changer';
        colorButton.style.margin = '20px auto';
        colorButton.style.display = 'block';
        colorButton.style.padding = '10px 20px';
        colorButton.style.backgroundColor = '#3498db';
        colorButton.style.color = 'white';
        colorButton.style.border = 'none';
        colorButton.style.borderRadius = '5px';
        colorButton.style.cursor = 'pointer';
        colorButton.style.fontWeight = '600';
        colorButton.style.transition = 'all 0.3s ease';
        
        colorButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#2980b9';
            this.style.transform = 'translateY(-2px)';
        });
        
        colorButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#3498db';
            this.style.transform = 'translateY(0)';
        });
        
        colorButton.addEventListener('click', function() {
            const colors = [
                'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
                'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
                'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
                'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
                'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)'
            ];
            
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.background = randomColor;
        });
        
        heroSection.appendChild(colorButton);
    }
}

/**
 * Initialize image slideshow
 */
function initSlideshow() {
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        // Create slideshow container
        const slideshowContainer = document.createElement('div');
        slideshowContainer.className = 'slideshow-container';
        slideshowContainer.style.position = 'relative';
        slideshowContainer.style.width = '100%';
        slideshowContainer.style.height = '500px';
        slideshowContainer.style.borderRadius = '10px';
        slideshowContainer.style.overflow = 'hidden';
        slideshowContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        
        // Get the existing image and caption
        const existingImage = heroImage.querySelector('img');
        const existingCaption = heroImage.querySelector('.image-caption');
        
        // Create slides array
        const slides = [
            {
                src: existingImage ? existingImage.src : 'images/flag.jpg',
                caption: existingCaption ? existingCaption.textContent : 'LOCATED AT LESOTHO'
            },
            {
                src: 'images/thaba bosiu.jpg',
                caption: 'Thaba Bosiu Mountain'
            },
            {
                src: 'images/sunset.jpg',
                caption: 'Sunset at Thaba Bosiu'
            }
        ];
        
        // Create slides
        slides.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide';
            slideDiv.style.display = index === 0 ? 'block' : 'none';
            slideDiv.style.width = '100%';
            slideDiv.style.height = '100%';
            slideDiv.style.position = 'absolute';
            slideDiv.style.top = '0';
            slideDiv.style.left = '0';
            
            const img = document.createElement('img');
            img.src = slide.src;
            img.alt = slide.caption;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            const caption = document.createElement('div');
            caption.className = 'image-caption';
            caption.textContent = slide.caption;
            caption.style.position = 'absolute';
            caption.style.bottom = '0';
            caption.style.left = '0';
            caption.style.right = '0';
            caption.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            caption.style.color = 'white';
            caption.style.padding = '10px 15px';
            caption.style.textAlign = 'center';
            caption.style.fontStyle = 'italic';
            
            slideDiv.appendChild(img);
            slideDiv.appendChild(caption);
            slideshowContainer.appendChild(slideDiv);
        });
        
        // Create navigation buttons
        const prevButton = document.createElement('button');
        prevButton.textContent = '❮';
        prevButton.className = 'slideshow-prev';
        prevButton.style.position = 'absolute';
        prevButton.style.top = '50%';
        prevButton.style.left = '10px';
        prevButton.style.transform = 'translateY(-50%)';
        prevButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        prevButton.style.color = 'white';
        prevButton.style.border = 'none';
        prevButton.style.borderRadius = '50%';
        prevButton.style.width = '40px';
        prevButton.style.height = '40px';
        prevButton.style.cursor = 'pointer';
        prevButton.style.fontSize = '18px';
        
        const nextButton = document.createElement('button');
        nextButton.textContent = '❯';
        nextButton.className = 'slideshow-next';
        nextButton.style.position = 'absolute';
        nextButton.style.top = '50%';
        nextButton.style.right = '10px';
        nextButton.style.transform = 'translateY(-50%)';
        nextButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        nextButton.style.color = 'white';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '50%';
        nextButton.style.width = '40px';
        nextButton.style.height = '40px';
        nextButton.style.cursor = 'pointer';
        nextButton.style.fontSize = '18px';
        
        slideshowContainer.appendChild(prevButton);
        slideshowContainer.appendChild(nextButton);
        
        // Replace existing content with slideshow
        heroImage.innerHTML = '';
        heroImage.appendChild(slideshowContainer);
        
        // Slideshow functionality
        let currentSlide = 0;
        const slideElements = slideshowContainer.querySelectorAll('.slide');
        
        function showSlide(n) {
            slideElements.forEach(slide => {
                slide.style.display = 'none';
            });
            
            currentSlide = (n + slideElements.length) % slideElements.length;
            slideElements[currentSlide].style.display = 'block';
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
        
        // Auto-advance slides every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Button event listeners
        nextButton.addEventListener('click', function() {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        prevButton.addEventListener('click', function() {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        // Pause on hover
        slideshowContainer.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });
        
        slideshowContainer.addEventListener('mouseleave', function() {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

/**
 * Add staggered animation to paragraphs
 */
function addStaggeredAnimation() {
    const paragraphs = document.querySelectorAll('.intro-section p');
    
    paragraphs.forEach((p, index) => {
        p.style.setProperty('--i', index);
        p.style.animationDelay = `${index * 0.1}s`;
    });
}

/**
 * About Page Initialization
 */
function initAboutPage() {
    // Display destination information from JavaScript object
    displayDestinationInfo();
    
    // Add Show More/Show Less functionality
    addShowMoreToggle();
    
    // Display random fun fact
    displayRandomFunFact();
}

/**
 * Display destination information using JavaScript object and template literals
 */
function displayDestinationInfo() {
    const destinationInfo = {
        name: "Thaba Bosiu",
        location: "Lesotho",
        established: 1824,
        founder: "King Moshoeshoe I",
        significance: "Birthplace of the Basotho nation",
        history: "Thaba Bosiu served as a fortress and capital of the Basotho kingdom during the Lifaqane wars in the 19th century. Its strategic defensive position made it nearly impregnable to attacks.",
        culture: "The mountain is deeply significant in Basotho culture as the founding site of their nation. It remains a spiritual center and pilgrimage site.",
        attractions: [
            "Moshoeshoe's Grave - The final resting place of King Moshoeshoe I",
            "Historical Fortifications - Stone defenses built during Moshoeshoe's reign",
            "Visitor Center Museum - Exhibits on Basotho history and culture",
            "Panoramic Views - 360-degree vistas of the surrounding landscape"
        ],
        additionalInfo: "Thaba Bosiu was declared a national monument in 1967. The name translates to 'Mountain at Night,' reflecting the circumstances under which Moshoeshoe and his followers arrived to establish their stronghold."
    };
    
    const historySection = document.querySelector('.content-section:first-of-type');
    
    if (historySection) {
        // Create info display using template literals
        const infoHTML = `
            <div class="destination-info">
                <h3>About ${destinationInfo.name}</h3>
                <p><strong>Location:</strong> ${destinationInfo.location}</p>
                <p><strong>Established:</strong> ${destinationInfo.established}</p>
                <p><strong>Founder:</strong> ${destinationInfo.founder}</p>
                <p><strong>Significance:</strong> ${destinationInfo.significance}</p>
                <p>${destinationInfo.history}</p>
                <p>${destinationInfo.culture}</p>
                
                <h4>Key Attractions:</h4>
                <ul>
                    ${destinationInfo.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                </ul>
                
                <div class="additional-info" style="display: none;">
                    <p>${destinationInfo.additionalInfo}</p>
                </div>
            </div>
        `;
        
        // Insert the generated HTML
        const existingContent = historySection.innerHTML;
        historySection.innerHTML = infoHTML + existingContent;
    }
}

/**
 * Add Show More/Show Less toggle functionality
 */
function addShowMoreToggle() {
    // This will be called after displayDestinationInfo creates the additional-info div
    setTimeout(() => {
        const additionalInfo = document.querySelector('.additional-info');
        const toggleButton = document.createElement('button');
        
        if (additionalInfo) {
            toggleButton.textContent = 'Show More';
            toggleButton.className = 'show-more-btn';
            toggleButton.style.marginTop = '15px';
            toggleButton.style.padding = '8px 16px';
            toggleButton.style.backgroundColor = '#3498db';
            toggleButton.style.color = 'white';
            toggleButton.style.border = 'none';
            toggleButton.style.borderRadius = '5px';
            toggleButton.style.cursor = 'pointer';
            toggleButton.style.fontWeight = '600';
            toggleButton.style.transition = 'all 0.3s ease';
            
            toggleButton.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#2980b9';
            });
            
            toggleButton.addEventListener('mouseout', function() {
                this.style.backgroundColor = '#3498db';
            });
            
            toggleButton.addEventListener('click', function() {
                if (additionalInfo.style.display === 'none') {
                    additionalInfo.style.display = 'block';
                    this.textContent = 'Show Less';
                } else {
                    additionalInfo.style.display = 'none';
                    this.textContent = 'Show More';
                }
            });
            
            additionalInfo.parentNode.insertBefore(toggleButton, additionalInfo.nextSibling);
        }
    }, 100);
}

/**
 * Display a random fun fact on page load
 */
function displayRandomFunFact() {
    const funFacts = [
        "Thaba Bosiu was never conquered despite numerous attacks during the 19th century.",
        "The mountain's name means 'Mountain at Night' in Sesotho.",
        "King Moshoeshoe I is buried on Thaba Bosiu, and it remains a pilgrimage site.",
        "Thaba Bosiu was declared a national monument in 1967.",
        "According to legend, the mountain grew higher at night to protect its inhabitants.",
        "Thaba Bosiu served as the capital of the Basotho kingdom for over 40 years.",
        "The mountain stands at 1,804 meters (5,919 feet) above sea level.",
        "Thaba Bosiu is located about 24 km east of Maseru, Lesotho's capital."
    ];
    
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    
    // Create or update fun fact display
    let funFactDisplay = document.querySelector('.random-fun-fact');
    
    if (!funFactDisplay) {
        funFactDisplay = document.createElement('div');
        funFactDisplay.className = 'random-fun-fact';
        funFactDisplay.style.margin = '20px 0';
        funFactDisplay.style.padding = '15px';
        funFactDisplay.style.backgroundColor = '#e8f4fc';
        funFactDisplay.style.borderLeft = '5px solid #3498db';
        funFactDisplay.style.borderRadius = '5px';
        
        const attractionsSection = document.querySelector('.content-section:last-of-type');
        if (attractionsSection) {
            attractionsSection.appendChild(funFactDisplay);
        }
    }
    
    funFactDisplay.innerHTML = `<strong>Did You Know?</strong> ${randomFact}`;
}

/**
 * Gallery Page Initialization
 */
function initGalleryPage() {
    // Add lightbox functionality
    addLightbox();
    
    // Add filter buttons
    addGalleryFilters();
    
    // Add JavaScript hover effects
    addHoverEffects();
    
    // Add staggered animation to gallery items
    addGalleryStaggeredAnimation();
}

/**
 * Add lightbox functionality to gallery images
 */
function addLightbox() {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.zIndex = '1000';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.borderRadius = '5px';
    lightboxImg.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.5)';
    
    const lightboxCaption = document.createElement('div');
    lightboxCaption.style.color = 'white';
    lightboxCaption.style.marginTop = '15px';
    lightboxCaption.style.textAlign = 'center';
    lightboxCaption.style.fontSize = '1.2rem';
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lightboxCaption);
    document.body.appendChild(lightbox);
    
    // Add click event to gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
            lightboxCaption.textContent = this.alt;
        });
    });
    
    // Close lightbox when clicked
    lightbox.addEventListener('click', function() {
        this.style.display = 'none';
    });
}

/**
 * Add filter buttons to gallery
 */
function addGalleryFilters() {
    const gallerySection = document.querySelector('.gallery-section');
    
    if (gallerySection) {
        // Create filter buttons container
        const filterContainer = document.createElement('div');
        filterContainer.className = 'gallery-filters';
        filterContainer.style.marginBottom = '20px';
        filterContainer.style.textAlign = 'center';
        
        // Create filter buttons
        const filters = [
            { name: 'All', category: 'all' },
            { name: 'Historical', category: 'historical' },
            { name: 'Cultural', category: 'cultural' },
            { name: 'Landscape', category: 'landscape' }
        ];
        
        filters.forEach(filter => {
            const button = document.createElement('button');
            button.textContent = filter.name;
            button.dataset.filter = filter.category;
            button.className = 'filter-btn';
            button.style.margin = '0 5px 10px';
            button.style.padding = '8px 16px';
            button.style.backgroundColor = '#3498db';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            button.style.fontWeight = '600';
            button.style.transition = 'all 0.3s ease';
            
            button.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#2980b9';
            });
            
            button.addEventListener('mouseout', function() {
                if (!this.classList.contains('active')) {
                    this.style.backgroundColor = '#3498db';
                }
            });
            
            button.addEventListener('click', function() {
                // Update active state
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.backgroundColor = '#3498db';
                });
                
                this.classList.add('active');
                this.style.backgroundColor = '#2980b9';
                
                // Filter gallery items
                filterGalleryItems(filter.category);
            });
            
            filterContainer.appendChild(button);
        });
        
        // Set first button as active
        filterContainer.querySelector('.filter-btn').classList.add('active');
        filterContainer.querySelector('.filter-btn').style.backgroundColor = '#2980b9';
        
        // Add category data to gallery items
        const galleryItems = document.querySelectorAll('.gallery-item');
        const categories = ['historical', 'cultural', 'landscape', 'historical', 'cultural'];
        
        galleryItems.forEach((item, index) => {
            item.dataset.category = categories[index] || 'landscape';
        });
        
        // Insert filter container before gallery grid
        const galleryGrid = document.querySelector('.gallery-grid');
        gallerySection.insertBefore(filterContainer, galleryGrid);
    }
}

/**
 * Filter gallery items based on category
 */
function filterGalleryItems(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

/**
 * Add JavaScript-powered hover effects to gallery images
 */
function addHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        
        // Store original transform
        const originalTransform = img.style.transform;
        
        item.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            img.style.transform = originalTransform;
        });
    });
}

/**
 * Add staggered animation to gallery items
 */
function addGalleryStaggeredAnimation() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

/**
 * Bonus: Add weather widget using Fetch API
 */
async function addWeatherWidget() {
    try {
        // Using Open-Meteo API for Lesotho weather
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-29.3167&longitude=27.4833&current_weather=true');
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        const weather = data.current_weather;
        
        // Create weather widget
        const weatherWidget = document.createElement('div');
        weatherWidget.className = 'weather-widget';
        weatherWidget.style.margin = '20px 0';
        weatherWidget.style.padding = '15px';
        weatherWidget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        weatherWidget.style.borderRadius = '10px';
        weatherWidget.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
        weatherWidget.style.textAlign = 'center';
        weatherWidget.style.maxWidth = '300px';
        weatherWidget.style.marginLeft = 'auto';
        weatherWidget.style.marginRight = 'auto';
        
        const tempCelsius = weather.temperature;
        const weatherCode = weather.weathercode;
        
        // Simple weather description based on WMO codes
        let weatherDesc = 'Clear';
        if (weatherCode > 0 && weatherCode < 50) {
            weatherDesc = 'Cloudy';
        } else if (weatherCode >= 50 && weatherCode < 70) {
            weatherDesc = 'Rainy';
        } else if (weatherCode >= 70) {
            weatherDesc = 'Snowy';
        }
        
        weatherWidget.innerHTML = `
            <h3>Current Weather at Thaba Bosiu</h3>
            <div style="font-size: 2rem; margin: 10px 0;">${tempCelsius}°C</div>
            <div style="font-size: 1.2rem;">${weatherDesc}</div>
            <div style="margin-top: 10px; font-size: 0.9rem; color: #7f8c8d;">
                Wind: ${weather.windspeed} km/h
            </div>
        `;
        
        // Add to hero section
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.appendChild(weatherWidget);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Don't display anything if weather data fails
    }
}