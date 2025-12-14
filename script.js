document.addEventListener('DOMContentLoaded', () => {
    // --- 1. NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- 3. ANIMASI FADE-IN (INTERSECTION OBSERVER) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.process-section, .process-card, .design-image, .interactive-showcase').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // --- 4. LOGIKA SLIDER HP INTERAKTIF ---
    const sliderTrack = document.getElementById('phoneSlider');
    const dots = document.querySelectorAll('.dot');
    
    // Pastikan elemen slider ada sebelum menjalankan logic
    if (sliderTrack) {
        // Update Dot saat discroll
        sliderTrack.addEventListener('scroll', () => {
            const slideWidth = sliderTrack.clientWidth;
            const activeIndex = Math.round(sliderTrack.scrollLeft / slideWidth);
            
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[activeIndex]) {
                dots[activeIndex].classList.add('active');
            }
        });
    }
});

// Fungsi Navigasi Tombol Panah (Global Scope)
function moveSlider(direction) {
    const sliderTrack = document.getElementById('phoneSlider');
    if (sliderTrack) {
        const slideWidth = sliderTrack.clientWidth;
        sliderTrack.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
    }
}

// Fungsi Klik Dot Indikator (Global Scope)
function goToSlide(index) {
    const sliderTrack = document.getElementById('phoneSlider');
    if (sliderTrack) {
        const slideWidth = sliderTrack.clientWidth;
        sliderTrack.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
    }
}