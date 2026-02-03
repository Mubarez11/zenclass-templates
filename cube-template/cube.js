/* ============================================
   ZENCLASS 3D SKILLS CUBE - JavaScript
   Composant autonome
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // THEME TOGGLE
    // ============================================
    
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('cube-theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('cube-theme', isLight ? 'light' : 'dark');
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
    
    // Rotation angles for each face
    const faceRotations = {
        front:  { x: -15, y: -25 },
        back:   { x: -15, y: 155 },
        right:  { x: -15, y: -115 },
        left:   { x: -15, y: 65 },
        top:    { x: -105, y: -25 },
        bottom: { x: 75, y: -25 }
    };
    
    // Map faces to skill categories
    const faceToCategory = {
        front: 'frontend',
        back: 'backend',
        right: 'design',
        left: 'tools',
        top: 'languages',
        bottom: 'soft'
    };
    
    // Rotate cube to specific face
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
    
    // Control button clicks
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
    
    // Auto-rotate functionality
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
    
    // Initial animation on page load
    setTimeout(animateSkillBars, 500);
    
    // ============================================
    // DRAG TO ROTATE (Optional enhancement)
    // ============================================
    
    let isDragging = false;
    let startX, startY;
    let currentX = -25, currentY = -15;
    
    const cubeScene = document.querySelector('.cube-scene');
    
    if (cubeScene) {
        cubeScene.addEventListener('mousedown', (e) => {
            if (isAutoRotating) return;
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            skillsCube.style.transition = 'none';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            currentX = currentX + deltaX * 0.5;
            currentY = currentY - deltaY * 0.5;
            
            skillsCube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
            
            startX = e.clientX;
            startY = e.clientY;
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                skillsCube.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        });
    }
    
});
