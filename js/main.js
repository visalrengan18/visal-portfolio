// Main JavaScript

// Navigation
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// Handle scroll for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
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

// Skills data
const skills = [
    { name: 'Java', level: 95, color: 'primary' },
    { name: 'Spring Boot', level: 90, color: 'secondary' },
    { name: 'REST APIs', level: 85, color: 'primary' },
    { name: 'MySQL', level: 85, color: 'secondary' },
    { name: 'MongoDB', level: 75, color: 'primary' },
    { name: 'HTML/CSS/JS', level: 90, color: 'secondary' },
    { name: 'Git/GitHub', level: 80, color: 'primary' },
    { name: 'Postman', level: 75, color: 'secondary' },
];

// Render skills
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'glass-card skill-card';
    skillCard.style.opacity = '0';
    skillCard.style.transform = 'translateY(30px)';
    
    const dotColor = skill.color === 'primary' ? '#00ffff' : '#9d4edd';
    const progressColor = skill.color === 'primary' ? '#00ffff' : '#9d4edd';
    const shadowColor = skill.color === 'primary' 
        ? '0 0 10px rgba(0, 255, 255, 0.5)' 
        : '0 0 10px rgba(157, 78, 221, 0.5)';
    
    skillCard.innerHTML = `
        <div class="skill-header">
            <h4 class="skill-name">${skill.name}</h4>
            <div class="skill-dot" style="background: ${dotColor};"></div>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" style="width: 0; background: ${progressColor}; box-shadow: ${shadowColor};"></div>
        </div>
        <div class="skill-percentage">${skill.level}%</div>
    `;
    
    skillsGrid.appendChild(skillCard);
    
    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate progress bar
                    setTimeout(() => {
                        const progressBar = entry.target.querySelector('.skill-progress');
                        progressBar.style.width = skill.level + '%';
                    }, 300);
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(skillCard);
});

// Projects data
const projects = [
    {
        name: 'Student-Course Management System',
        description: 'Full-stack web application with CRUD operations for managing students and courses',
        technologies: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        features: ['User Authentication', 'REST APIs', 'Database Integration', 'Responsive Design'],
        color: 'primary',
    },
    {
        name: 'Secure Login System',
        description: 'Robust authentication system with password encryption and session management',
        technologies: ['Spring Boot', 'MySQL', 'Security', 'JWT'],
        features: ['Password Encryption', 'Session Management', 'User Validation', 'Secure API'],
        color: 'secondary',
    },
    {
        name: 'E-commerce Website',
        description: 'Dynamic online shopping platform with product listings and cart functionality',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
        features: ['Product Catalog', 'Shopping Cart', 'Dynamic Pricing', 'User Interface'],
        color: 'primary',
    },
    {
        name: '3D Portfolio Website',
        description: 'Immersive portfolio showcasing projects with Three.js 3D interactions',
        technologies: ['Three.js', 'HTML', 'CSS', 'JavaScript'],
        features: ['3D Graphics', 'Smooth Animations', 'Responsive Design', 'Interactive UI'],
        color: 'secondary',
    },
    {
        name: 'Educational Institute Clone',
        description: 'Frontend clone of an educational institute website with modern design',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        features: ['Modern Layout', 'Interactive Elements', 'Mobile Friendly', 'Clean Code'],
        color: 'primary',
    },
    {
        name: 'Arduino LED Project',
        description: 'Hardware project using ultrasonic sensors to control LED brightness',
        technologies: ['Arduino', 'C++', 'Sensors', 'Hardware'],
        features: ['Sensor Integration', 'LED Control', 'Distance Detection', 'Real-time Response'],
        color: 'secondary',
    },
];

// Render projects
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'glass-card project-card';
    projectCard.style.opacity = '0';
    projectCard.style.transform = 'translateY(30px)';
    
    const dotColor = project.color === 'primary' ? '#00ffff' : '#9d4edd';
    const borderColor = project.color === 'primary' ? 'rgba(0, 255, 255, 0.3)' : 'rgba(157, 78, 221, 0.3)';
    const bgColor = project.color === 'primary' ? 'rgba(0, 255, 255, 0.2)' : 'rgba(157, 78, 221, 0.2)';
    
    projectCard.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${project.name}</h3>
            <div class="skill-dot" style="background: ${dotColor};"></div>
        </div>
        
        <p class="project-description">${project.description}</p>
        
        <div style="margin-bottom: 1rem;">
            <h4 class="project-section-title">Technologies:</h4>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 class="project-section-title">Key Features:</h4>
            <ul class="project-features">
                ${project.features.map(feature => `
                    <li>
                        <div class="feature-dot" style="background: ${dotColor};"></div>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="project-buttons">
            <a href="#" class="btn-project" style="background: ${bgColor}; border-color: ${dotColor}; color: ${dotColor};">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                Live Demo
            </a>
            <a href="#" class="btn-project" style="background: var(--muted); border-color: var(--border); color: var(--foreground);">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
    
    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(projectCard);
});

// Timeline data
const timeline = [
    {
        type: 'education',
        title: 'Bachelor in Computer Science and Engineering',
        organization: 'Anna University',
        period: '2022 - Present',
        details: 'CGPA: 8.0 | Focus: Full-Stack Development, Data Structures, Algorithms',
        color: 'primary',
        icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'
    },
    {
        type: 'school',
        title: 'HSC - Higher Secondary Certificate',
        organization: 'Pothihai public school',
        period: '2022',
        details: 'Completed Higher Secondary Certificate (HSC) with a focus on Computer Science, achieving a remarkable score of 75%.',
        color: 'secondary',
        icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    },
    {
        type: 'school',
        title: 'SSLC - Secondary School Leaving Certificate',
        organization: 'Pothihai public school',
        period: '2020',
        details: 'Completed secondary education with a focus on Science and Mathematics, achieving an outstanding score of 99.2%.',
        color: 'primary',
        icon: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>'
    },
];

// Render timeline
const timelineEl = document.getElementById('timeline');
timeline.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    const dotColor = item.color === 'primary' ? '#00ffff' : '#9d4edd';
    const bgColor = item.color === 'primary' ? 'rgba(0, 255, 255, 0.2)' : 'rgba(157, 78, 221, 0.2)';
    const textColor = item.color === 'primary' ? '#00ffff' : '#9d4edd';
    
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.style.opacity = '0';
    timelineItem.style.transform = `translateX(${isLeft ? '-30px' : '30px'})`;
    
    timelineItem.innerHTML = `
        <div class="timeline-content glass-card" style="${isLeft ? 'text-align: right;' : ''}">
            <div class="timeline-icon bg-${item.color}" style="background: ${bgColor}; color: ${textColor}; ${isLeft ? 'margin-left: auto;' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg>
            </div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-org" style="color: ${textColor};">${item.organization}</p>
            <p class="timeline-period">${item.period}</p>
            <p class="timeline-details">${item.details}</p>
        </div>
        <div class="timeline-dot" style="background: ${dotColor};"></div>
        <div style="flex: 1;"></div>
    `;
    
    timelineEl.appendChild(timelineItem);
    
    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(timelineItem);
});

// Contact Form with EmailJS
const contactForm = document.getElementById('contactForm');

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification function
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.custom-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    
    const isSuccess = type === 'success';
    const icon = isSuccess ? '✅' : '❌';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        color: white;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        background: ${isSuccess ? 
            'linear-gradient(135deg, #00ffaa, #00cc88)' : 
            'linear-gradient(135deg, #ff6b6b, #cc5555)'};
        border: 1px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
    `;
    
    notification.innerHTML = `
        <span style="font-size: 1.25rem;">${icon}</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    const duration = isSuccess ? 5000 : 7000;
    setTimeout(() => {
        hideNotification(notification);
    }, duration);
    
    // Click to close
    notification.addEventListener('click', () => hideNotification(notification));
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 400);
}

// Form submission handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <div class="loading-spinner" style="
                width: 16px;
                height: 16px;
                border: 2px solid transparent;
                border-top: 2px solid currentColor;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
            Sending...
        </div>
    `;
    submitBtn.disabled = true;
    
    try {
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim(),
            date: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            })
        };
        
        // Validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            throw new Error('Please fill in all fields');
        }
        
        if (!isValidEmail(formData.email)) {
            throw new Error('Please enter a valid email address');
        }
        
        if (formData.message.length < 10) {
            throw new Error('Message should be at least 10 characters long');
        }
        
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_yydknk8',   // Replace with your Service ID
            'template_it5nzbo',  // Replace with your Template ID
            formData
        );
        
        console.log('Email sent successfully:', response);
        
        // Show success message
        showNotification('🎉 Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        console.error('Error sending message:', error);
        
        // User-friendly error messages
        let errorMessage = 'Failed to send message. ';
        
        if (error.message.includes('Please fill') || 
            error.message.includes('valid email') || 
            error.message.includes('at least')) {
            errorMessage = error.message;
        } else if (error.status === 0) {
            errorMessage += 'Please check your internet connection.';
        } else if (error.status === 400) {
            errorMessage += 'Invalid form data. Please check your inputs.';
        } else if (error.status === 429) {
            errorMessage += 'Too many attempts. Please try again in a few minutes.';
        } else {
            errorMessage += 'Please try again or email me directly at visairengan18@gmail.com';
        }
        
        showNotification(errorMessage, 'error');
        
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Add loading animation style
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .form-group input:invalid, 
    .form-group textarea:invalid {
        border-color: #9d4edd !important;
    }
    
    .form-group input:valid, 
    .form-group textarea:valid {
        border-color: #00ffaa !important;
    }
`;
document.head.appendChild(loadingStyle);

// Real-time validation
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() && input.checkValibility()) {
            input.style.borderColor = '#00ffaa';
        } else if (!input.value.trim()) {
            input.style.borderColor = '';
        }
    });
});

// Animate elements on scroll
const observeElements = document.querySelectorAll('.glass-card, .section-title, .section-subtitle');
observeElements.forEach(el => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    if (!el.classList.contains('skill-card') && !el.classList.contains('project-card')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    }
});
