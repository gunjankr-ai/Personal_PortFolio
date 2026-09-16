/* ==========================================================================
   MAIN JAVASCRIPT CONTROLLER
   Theme, Navigation, Modals, Forms, Project Filtering, Toasts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ----------------- 1. Theme Toggle -----------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Initialize theme
  const savedTheme = localStorage.getItem('gk_portfolio_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  root.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('gk_portfolio_theme', newTheme);
    });
  }

  // ----------------- 2. Mobile Drawer Navigation -----------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ----------------- 3. Active Nav Link on Scroll (Scroll-Spy) -----------------
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        allNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ----------------- 4. Scroll To Top Button -----------------
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----------------- 5. Project Category Filtering -----------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-large');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'grid';
        } else {
          const categories = card.dataset.category || '';
          if (categories.includes(filterValue)) {
            card.style.display = 'grid';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // ----------------- 6. Contact Form Validation & Toast -----------------
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  function showToast(message, isError = false) {
    if (!toast) return;
    const toastMsg = toast.querySelector('.toast-message');
    if (toastMsg) toastMsg.textContent = message;
    
    toast.style.borderColor = isError ? '#ef4444' : 'var(--border-highlight)';
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Inputs
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      // Helper validation
      function validateField(input, condition) {
        const group = input.closest('.form-group');
        if (!condition) {
          group.classList.add('has-error');
          hasError = true;
        } else {
          group.classList.remove('has-error');
        }
      }

      validateField(nameInput, nameInput.value.trim().length >= 2);
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(emailInput, emailRegex.test(emailInput.value.trim()));

      validateField(subjectInput, subjectInput.value.trim().length >= 3);
      validateField(messageInput, messageInput.value.trim().length >= 10);

      if (!hasError) {
        // Success simulation
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
          showToast("Message sent successfully! Gunjan Kumar will respond soon.");
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 800);
      } else {
        showToast("Please correct the highlighted fields.", true);
      }
    });

    // Clear errors on input
    ['form-name', 'form-email', 'form-subject', 'form-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }

  // ----------------- 7. Research Paper & Resume Modals -----------------
  const modalOverlay = document.getElementById('info-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openModal(title, htmlContent) {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = htmlContent;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Research Paper Button Trigger
  const viewPaperBtns = document.querySelectorAll('.trigger-paper-modal');
  viewPaperBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(
        "Research Paper Overview & Status",
        `<div style="line-height: 1.7;">
          <p style="color: var(--text-accent); font-weight: 600; margin-bottom: 0.75rem;">
            Title: Artificial Intelligence for Wetland Monitoring and Conservation
          </p>
          <p style="color: var(--text-secondary); margin-bottom: 1.25rem;">
            <strong>Status:</strong> [In Preparation / Under Review / Conference Submission Placeholder]
          </p>
          <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
            <h5 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-primary);">Abstract Synopsis:</h5>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">
              This research presents a unified AI and remote sensing methodology for continuous wetland health monitoring. 
              By pairing Sentinel-2 multi-spectral bands with convolutional segmentation architectures and in-situ IoT telemetry, 
              the proposed pipeline identifies water level depletion and unauthorized urban encroachment with high spatial fidelity.
            </p>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary btn-sm" onclick="document.getElementById('info-modal').classList.remove('open'); document.body.style.overflow='';">
              Request Full Preprint / Collaborate
            </a>
            <button class="btn btn-secondary btn-sm" onclick="alert('Placeholder: You can link your uploaded PDF or preprint link here in index.html.');">
              Download Draft PDF [Placeholder]
            </button>
          </div>
        </div>`
      );
    });
  });

  // Resume Download Button triggers print or download
  const resumeDownloadBtns = document.querySelectorAll('.trigger-resume-download');
  resumeDownloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Prompt user or trigger print
      window.print();
    });
  });
});
