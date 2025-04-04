document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // Close mobile nav when clicking on a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
    
    // Hero slider
    const slides = document.querySelectorAll('.hero__slide');
    const prevBtn = document.querySelector('.hero__arrow--prev');
    const nextBtn = document.querySelector('.hero__arrow--next');
    const dotsContainer = document.querySelector('.hero__dots');
    let currentSlide = 0;
    let slideInterval;
    
    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('hero__dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Aller à la slide ${index + 1}`);
      dotsContainer.appendChild(dot);
      
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetInterval();
      });
    });
    
    const dots = document.querySelectorAll('.hero__dot');
    
    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      
      currentSlide = index;
      
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      } else if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
      goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
      goToSlide(currentSlide - 1);
    }
    
    function startInterval() {
      slideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }
    
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
    
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
    
    // Start the slideshow
    startInterval();
    
    // Room tabs
    const roomTabs = document.querySelectorAll('.rooms__tab');
    const rooms = document.querySelectorAll('.room');
    
    roomTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const roomId = tab.getAttribute('data-room');
        
        // Remove active class from all tabs and rooms
        roomTabs.forEach(t => t.classList.remove('active'));
        rooms.forEach(r => r.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding room
        tab.classList.add('active');
        document.getElementById(roomId).classList.add('active');
      });
    });
    
    // Gallery filtering
    const galleryFilters = document.querySelectorAll('.gallery__filter');
    const galleryItems = document.querySelectorAll('.gallery__item');
    
    galleryFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-filter');
        
        // Remove active class from all filters
        galleryFilters.forEach(f => f.classList.remove('active'));
        
        // Add active class to clicked filter
        filter.classList.add('active');
        
        // Filter gallery items
        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          
          if (category === 'all' || category === itemCategory) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
    
    // Lightbox
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox__image');
    const lightboxClose = document.querySelector('.lightbox__close');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').getAttribute('src');
        const imgAlt = item.querySelector('img').getAttribute('alt');
        
        lightboxImage.setAttribute('src', imgSrc);
        lightboxImage.setAttribute('alt', imgAlt);
        lightbox.classList.add('active');
        
        // Disable scroll on body
        document.body.style.overflow = 'hidden';
      });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    function closeLightbox() {
      lightbox.classList.remove('active');
      
      // Re-enable scroll on body
      document.body.style.overflow = '';
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      alert('Votre message a été envoyé avec succès!');
      contactForm.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });