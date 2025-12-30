// ============================================
// SIMPLIFIED APP.JS - STATIC INFORMATIONAL SITE
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Character counter for textarea
    const descriptionTextarea = document.getElementById('exp-description');
    const charCount = document.getElementById('char-count');

    if (descriptionTextarea && charCount) {
        descriptionTextarea.addEventListener('input', function () {
            charCount.textContent = this.value.length;
        });
    }

    // Form submission handler - show success message
    const experienceForm = document.getElementById('experience-form');

    if (experienceForm) {
        experienceForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show success message
            const formContainer = document.querySelector('.experience-form-container');
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <h3 style="color: var(--color-accent); margin-bottom: 1rem;">✓ Gracias por compartir tu experiencia</h3>
                <p>Tu mensaje ha sido registrado. Esta información ayuda a documentar casos similares.</p>
            `;
            successMessage.style.cssText = 'background: #d4edda; border: 1px solid #c3e6cb; padding: 2rem; margin-top: 2rem; border-radius: 4px;';

            formContainer.appendChild(successMessage);

            // Reset form
            experienceForm.reset();
            if (charCount) charCount.textContent = '0';

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Remove message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (mainNav) mainNav.classList.remove('active');
                    if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
});
