/* ============================================
   ZENCLASS TEMPLATE - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVIGATION
    // ============================================
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu on link click
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============================================
    // THEME TOGGLE
    // ============================================
    
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isDark = !document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
    
    // ============================================
    // 3D CUBE CONTROLS
    // ============================================
    
    const skillsCube = document.getElementById('skillsCube');
    const cubeControlBtns = document.querySelectorAll('.cube-control-btn:not(.auto-rotate)');
    const autoRotateBtn = document.getElementById('autoRotateBtn');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    let isAutoRotating = false;
    let autoRotateInterval;
    
    const faceRotations = {
        front:  { x: -15, y: -25 },
        back:   { x: -15, y: 155 },
        right:  { x: -15, y: -115 },
        left:   { x: -15, y: 65 },
        top:    { x: -105, y: -25 },
        bottom: { x: 75, y: -25 }
    };
    
    const faceToCategory = {
        front: 'frontend',
        back: 'backend',
        right: 'design',
        left: 'tools',
        top: 'languages',
        bottom: 'soft'
    };
    
    function rotateCube(face) {
        if (!skillsCube) return;
        
        const rotation = faceRotations[face];
        skillsCube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
        
        // Update active button
        cubeControlBtns.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-face="${face}"]`);
        if (activeBtn) activeBtn.classList.add('active');
        
        // Show corresponding skill category
        const category = faceToCategory[face];
        skillCategories.forEach(cat => {
            cat.classList.remove('active');
            if (cat.dataset.category === category) {
                cat.classList.add('active');
            }
        });
        
        // Animate skill bars
        setTimeout(() => animateSkillBars(), 300);
    }
    
    // Cube control buttons
    cubeControlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const face = btn.dataset.face;
            rotateCube(face);
            stopAutoRotate();
        });
    });
    
    // Cube face clicks
    document.querySelectorAll('.cube-face').forEach(face => {
        face.addEventListener('click', () => {
            const category = face.dataset.category;
            const faceKey = Object.keys(faceToCategory).find(key => faceToCategory[key] === category);
            if (faceKey) {
                rotateCube(faceKey);
                stopAutoRotate();
            }
        });
    });
    
    // Auto-rotate
    function startAutoRotate() {
        isAutoRotating = true;
        autoRotateBtn?.classList.add('active');
        
        const faces = Object.keys(faceRotations);
        let index = 0;
        
        autoRotateInterval = setInterval(() => {
            rotateCube(faces[index]);
            index = (index + 1) % faces.length;
        }, 3000);
    }
    
    function stopAutoRotate() {
        isAutoRotating = false;
        autoRotateBtn?.classList.remove('active');
        clearInterval(autoRotateInterval);
    }
    
    if (autoRotateBtn) {
        autoRotateBtn.addEventListener('click', () => {
            if (isAutoRotating) {
                stopAutoRotate();
            } else {
                startAutoRotate();
            }
        });
    }
    
    // ============================================
    // SKILL BARS ANIMATION
    // ============================================
    
    function animateSkillBars() {
        const activeBars = document.querySelectorAll('.skill-category.active .skill-progress');
        activeBars.forEach(bar => {
            const progress = bar.dataset.progress || 0;
            bar.style.width = progress + '%';
        });
    }
    
    // Initial animation
    setTimeout(animateSkillBars, 500);
    
    // ============================================
    // SCROLL TO TOP
    // ============================================
    
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn?.classList.add('visible');
        } else {
            scrollTopBtn?.classList.remove('visible');
        }
    });
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ============================================
    // PARTICLES BACKGROUND
    // ============================================
    
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(168, 85, 247, ${Math.random() * 0.5 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float-particle ${Math.random() * 10 + 10}s infinite linear;
            `;
            particlesContainer.appendChild(particle);
        }
        
        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-particle {
                0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // SMOOTH SCROLL FOR NAV LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
});
