    // Default Configuration
    const defaultConfig = {
      // Colors (5 colors max - ordered by visual prominence)
      background_color: '#0f0f1e',
      surface_color: '#1a1a2e',
      text_color: '#ffffff',
      primary_action_color: '#667eea',
      secondary_action_color: '#764ba2',
      
      // Fonts
      font_family: 'Playfair Display',
      font_size: 16,
      
      // Content
      main_title: 'Creative Digital Studio',
      subtitle: 'Crafting innovative web experiences with cutting-edge technology and stunning design',
      cta_text: 'Explore Projects',
      about_heading: 'Passionate Designer & Developer',
      about_text: "I'm a creative professional specializing in web development and multimedia design. With expertise in HTML5, CSS3, JavaScript, and ReactJS, I create engaging digital experiences that combine aesthetic beauty with functional excellence. My passion lies in transforming ideas into interactive realities.",
      skills_heading: 'My Expertise',
      contact_heading: "Let's Work Together",
      footer_text: '© 2024 Portfolio Studio. All rights reserved.'
    };

    // Theme detection & persistence
    let savedTheme = localStorage.getItem('theme');
    let isDarkMode = (savedTheme ? savedTheme === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));
    let config = { ...defaultConfig };

    // Apply initial theme colors to the config
    if (isDarkMode) {
      config.background_color = '#0f0f1e';
      config.surface_color = '#1a1a2e';
      config.text_color = '#ffffff';
    } else {
      config.background_color = '#f5f5f5';
      config.surface_color = '#ffffff';
      config.text_color = '#1a1a2e';
    }

    // Apply dark class to documentElement so CSS variables take effect immediately
    document.documentElement.classList.toggle('dark', isDarkMode);

    let isAudioPlaying = false;

    // Apply Colors Function
    function applyColors(cfg) {
      const bg = cfg.background_color || defaultConfig.background_color;
      const surface = cfg.surface_color || defaultConfig.surface_color;
      const text = cfg.text_color || defaultConfig.text_color;
      const primary = cfg.primary_action_color || defaultConfig.primary_action_color;
      const secondary = cfg.secondary_action_color || defaultConfig.secondary_action_color;

      // Set body and app background
      document.body.style.backgroundColor = bg;
      document.body.style.color = text;
      document.getElementById('app').style.backgroundColor = bg;

      // Navigation
      const navbar = document.getElementById('navbar');
      navbar.style.backgroundColor = bg + 'cc';
      navbar.style.color = text;
      document.getElementById('logo-text').style.color = text;

      // Hero section
      const heroBg = document.getElementById('hero-bg');
      heroBg.style.background = `linear-gradient(-45deg, ${primary}, ${secondary}, ${primary}, ${secondary})`;
      
      document.getElementById('hero-badge').style.backgroundColor = surface;
      document.getElementById('hero-badge').style.color = text;
      
      const mainTitle = document.getElementById('main-title');
      mainTitle.style.background = `linear-gradient(-45deg, ${primary}, ${secondary}, ${primary}, ${secondary})`;
      mainTitle.style.backgroundSize = '200% 200%';
      mainTitle.style.backgroundClip = 'text';
      mainTitle.style.webkitBackgroundClip = 'text';
      mainTitle.style.webkitTextFillColor = 'transparent';
      mainTitle.style.animation = 'rotateGradient 6s ease infinite';
      
      document.getElementById('hero-subtitle').style.color = text;
      
      const ctaPrimary = document.getElementById('cta-primary');
      ctaPrimary.style.backgroundColor = primary;
      ctaPrimary.style.color = bg;
      
      const ctaSecondary = document.getElementById('cta-secondary');
      ctaSecondary.style.borderColor = text + '40';
      ctaSecondary.style.color = text;

      // Audio visualizer bars
      document.querySelectorAll('.audio-bar').forEach(bar => {
        bar.style.backgroundColor = primary;
      });

      // Stats cards
      for (let i = 1; i <= 3; i++) {
        const statCard = document.getElementById(`stat-card-${i}`);
        statCard.style.backgroundColor = surface + '80';
        statCard.style.color = text;
      }

      // About section
      document.getElementById('about-badge').style.borderColor = primary;
      document.getElementById('about-badge').style.color = text;
      document.getElementById('about-heading').style.color = text;
      document.getElementById('about-description').style.color = text;
      
      const aboutMainCard = document.getElementById('about-main-card');
      aboutMainCard.style.background = `linear-gradient(135deg, ${primary}20, ${secondary}20)`;
      
      document.getElementById('about-float-card-1').style.backgroundColor = surface;
      document.getElementById('about-float-card-2').style.backgroundColor = surface;
      
      document.getElementById('download-cv').style.backgroundColor = primary;
      document.getElementById('download-cv').style.color = bg;

      // Skills section
      document.getElementById('skills-badge').style.borderColor = primary;
      document.getElementById('skills-badge').style.color = text;
      document.getElementById('skills-heading').style.color = text;
      
      document.querySelectorAll('.skill-card').forEach(card => {
        card.style.backgroundColor = surface + '80';
        card.style.color = text;
      });

      // Projects section
      document.getElementById('projects-badge').style.borderColor = primary;
      document.getElementById('projects-badge').style.color = text;
      document.getElementById('projects-heading').style.color = text;
      
      document.querySelectorAll('.project-card').forEach(card => {
        card.style.backgroundColor = surface + '80';
        card.style.color = text;
      });

      // Contact section
      document.getElementById('contact-badge').style.borderColor = primary;
      document.getElementById('contact-badge').style.color = text;
      document.getElementById('contact-heading').style.color = text;
      
      const contactForm = document.querySelector('#contact-form');
      contactForm.style.backgroundColor = surface + '80';
      contactForm.style.color = text;
      
      document.getElementById('submit-btn').style.backgroundColor = primary;
      document.getElementById('submit-btn').style.color = bg;

      // Footer
      document.getElementById('footer').style.backgroundColor = bg;
      document.getElementById('footer').style.color = text;
    }

    // Apply Fonts Function
    function applyFonts(cfg) {
      const fontFamily = cfg.font_family || defaultConfig.font_family;
      const fontSize = cfg.font_size || defaultConfig.font_size;

      // Apply font to all playfair elements
      document.querySelectorAll('.font-playfair').forEach(el => {
        el.style.fontFamily = `${fontFamily}, 'Playfair Display', serif`;
      });

      // Scale font sizes proportionally
      document.getElementById('hero-title').style.fontSize = `${fontSize * 4.5}px`;
      document.getElementById('hero-subtitle').style.fontSize = `${fontSize * 1.25}px`;
      document.getElementById('about-heading').style.fontSize = `${fontSize * 3.5}px`;
      document.getElementById('about-description').style.fontSize = `${fontSize * 1.125}px`;
      document.getElementById('skills-heading').style.fontSize = `${fontSize * 3.5}px`;
      document.getElementById('projects-heading').style.fontSize = `${fontSize * 3.5}px`;
      document.getElementById('contact-heading').style.fontSize = `${fontSize * 3.5}px`;
      
      // Scale body text
      document.querySelectorAll('p, li, a, button, input, textarea').forEach(el => {
        if (!el.classList.contains('text-4xl') && !el.classList.contains('text-2xl')) {
          el.style.fontSize = `${fontSize}px`;
        }
      });
    }

    // Apply Content Function
    function applyContent(cfg) {
      document.getElementById('main-title').textContent = cfg.main_title || defaultConfig.main_title;
      document.getElementById('hero-subtitle').textContent = cfg.subtitle || defaultConfig.subtitle;
      document.getElementById('cta-text').textContent = cfg.cta_text || defaultConfig.cta_text;
      document.getElementById('about-heading').textContent = cfg.about_heading || defaultConfig.about_heading;
      document.getElementById('about-description').textContent = cfg.about_text || defaultConfig.about_text;
      document.getElementById('skills-heading').textContent = cfg.skills_heading || defaultConfig.skills_heading;
      document.getElementById('contact-heading').textContent = cfg.contact_heading || defaultConfig.contact_heading;
      document.getElementById('footer-text').textContent = cfg.footer_text || defaultConfig.footer_text;
    }

    // Main Config Change Handler
    async function onConfigChange(cfg) {
      config = { ...defaultConfig, ...cfg };
      applyColors(config);
      applyFonts(config);
      applyContent(config);
    }

    // Capabilities Mapping
    function mapToCapabilities(cfg) {
      return {
        recolorables: [
          {
            get: () => cfg.background_color || defaultConfig.background_color,
            set: (value) => {
              cfg.background_color = value;
              if (window.elementSdk) window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => cfg.surface_color || defaultConfig.surface_color,
            set: (value) => {
              cfg.surface_color = value;
              if (window.elementSdk) window.elementSdk.setConfig({ surface_color: value });
            }
          },
          {
            get: () => cfg.text_color || defaultConfig.text_color,
            set: (value) => {
              cfg.text_color = value;
              if (window.elementSdk) window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => cfg.primary_action_color || defaultConfig.primary_action_color,
            set: (value) => {
              cfg.primary_action_color = value;
              if (window.elementSdk) window.elementSdk.setConfig({ primary_action_color: value });
            }
          },
          {
            get: () => cfg.secondary_action_color || defaultConfig.secondary_action_color,
            set: (value) => {
              cfg.secondary_action_color = value;
              if (window.elementSdk) window.elementSdk.setConfig({ secondary_action_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => cfg.font_family || defaultConfig.font_family,
          set: (value) => {
            cfg.font_family = value;
            if (window.elementSdk) window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: () => cfg.font_size || defaultConfig.font_size,
          set: (value) => {
            cfg.font_size = value;
            if (window.elementSdk) window.elementSdk.setConfig({ font_size: value });
          }
        }
      };
    }

    // Edit Panel Values Mapping
    function mapToEditPanelValues(cfg) {
      return new Map([
        ['main_title', cfg.main_title || defaultConfig.main_title],
        ['subtitle', cfg.subtitle || defaultConfig.subtitle],
        ['cta_text', cfg.cta_text || defaultConfig.cta_text],
        ['about_heading', cfg.about_heading || defaultConfig.about_heading],
        ['about_text', cfg.about_text || defaultConfig.about_text],
        ['skills_heading', cfg.skills_heading || defaultConfig.skills_heading],
        ['contact_heading', cfg.contact_heading || defaultConfig.contact_heading],
        ['footer_text', cfg.footer_text || defaultConfig.footer_text]
      ]);
    }

    // Initialize Element SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }

    // Apply initial configuration
    onConfigChange(defaultConfig);

    // === JAVASCRIPT INTERACTIVITY === //

    // Smooth scroll for navigation links (ignore plain '#' anchors)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return; // ignore empty hashes
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Close mobile menu when link is clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
      
      lastScroll = currentScroll;
    });

    // Theme toggle helpers
    function updateThemeToggleIcon(btn, dark) {
      if (!btn) return;
      // Show a sun for light mode and moon for dark mode
      btn.innerHTML = dark ? `
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.03a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.708-.707a1 1 0 010-1.414zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM4.78 4.03a1 1 0 010 1.414L4.07 6.15A1 1 0 012.656 4.73l.708-.707a1 1 0 011.414 0zM6 9a1 1 0 110 2H5a1 1 0 110-2h1zM10 14a4 4 0 100-8 4 4 0 000 8z" /></svg>
      ` : `
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M17.293 13.293A8 8 0 116.707 2.707a8 8 0 0010.586 10.586z"/></svg>
      `;
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      // Initialize icon
      updateThemeToggleIcon(themeToggle, isDarkMode);

      themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        // Apply CSS class and persist
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        if (isDarkMode) {
          // Dark mode colors
          onConfigChange({
            ...config,
            background_color: '#0f0f1e',
            surface_color: '#1a1a2e',
            text_color: '#ffffff'
          });
        } else {
          // Light mode colors
          onConfigChange({
            ...config,
            background_color: '#f5f5f5',
            surface_color: '#ffffff',
            text_color: '#1a1a2e'
          });
        }

        // Update the toggle icon
        updateThemeToggleIcon(themeToggle, isDarkMode);
      });
    }

    // Audio toggle (visual feedback only - no actual audio)
    const audioToggle = document.getElementById('audio-toggle');
    if (audioToggle) {
      audioToggle.addEventListener('click', () => {
        isAudioPlaying = !isAudioPlaying;
        
        const audioBars = document.querySelectorAll('.audio-bar');
        audioBars.forEach(bar => {
          if (isAudioPlaying) {
            bar.style.animationPlayState = 'running';
            audioToggle.style.opacity = '1';
          } else {
            bar.style.animationPlayState = 'paused';
            audioToggle.style.opacity = '0.5';
          }
        });
      });
    }

    // Skills progress bar animation on scroll
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
              bar.style.width = progress + '%';
            }, 100);
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsObserver.observe(skillsSection);
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        if (submitText) submitText.textContent = 'Sending...';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.6';
        }
        
        // Simulate form submission
        setTimeout(() => {
          // Reset form
          contactForm.reset();
          
          // Show success message
          if (successMessage) successMessage.classList.remove('hidden');
          
          // Reset button
          if (submitText) submitText.textContent = 'Send Message';
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
          }
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            if (successMessage) successMessage.classList.add('hidden');
          }, 5000);
        }, 2000);
      });
    }

    // Project card click handlers
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', function() {
        const projectTitleEl = this.querySelector('h3');
        const projectTitle = projectTitleEl ? projectTitleEl.textContent : 'Project Details';
        
        // Create custom modal instead of using alert()
        const modal = document.createElement('div');
        modal.className = 'modal-backdrop fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6';
        modal.innerHTML = `
          <div class="modal-content glass rounded-3xl p-8 max-w-md w-full">
            <div class="text-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-3xl mx-auto mb-4">
                💼
              </div>
              <h3 class="font-playfair font-bold text-2xl mb-2">${projectTitle}</h3>
              <p class="opacity-70">This project showcases advanced web development techniques with modern technologies.</p>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-2 text-sm">
                <span class="w-2 h-2 rounded-full bg-green-400"></span>
                <span>Technologies: HTML, CSS, JavaScript</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Timeline: 4-6 weeks</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Status: Completed</span>
              </div>
            </div>
            <button class="close-modal w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105" style="background-color: ${config.primary_action_color}; color: ${config.background_color};">
              Close
            </button>
          </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal on click
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) closeBtn.addEventListener('click', () => modal.remove());
        
        // Close modal on backdrop click
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.remove();
          }
        });
      });
    });

    // CTA buttons scroll to sections
    const ctaPrimaryEl = document.getElementById('cta-primary');
    if (ctaPrimaryEl) {
      ctaPrimaryEl.addEventListener('click', () => {
        const projectsEl = document.getElementById('projects');
        if (projectsEl) projectsEl.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const ctaSecondary = document.getElementById('cta-secondary');
    if (ctaSecondary) {
      ctaSecondary.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Download CV button (demo only)
    document.getElementById('download-cv').addEventListener('click', () => {
      // Create custom notification instead of alert()
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-6 glass rounded-2xl p-6 shadow-2xl z-50 animate-fade-in-up max-w-sm';
      notification.style.backgroundColor = config.surface_color;
      notification.innerHTML = `
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl flex-shrink-0">
            ✓
          </div>
          <div>
            <h4 class="font-bold mb-1">CV Download Ready</h4>
            <p class="text-sm opacity-70">In a real application, the CV would download here. This is a demo feature.</p>
          </div>
        </div>
      `;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => notification.remove(), 500);
      }, 4000);
    });

    // Add cursor trail effect
    let cursorTrail = [];
    const maxTrailLength = 10;

    document.addEventListener('mousemove', (e) => {
      cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      
      if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
      }
    });

    // Parallax effect for floating elements
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      document.querySelectorAll('.particle').forEach((particle, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * 50 * speed;
        const y = (mouseY - 0.5) * 50 * speed;
        particle.style.transform = `translate(${x}px, ${y}px)`;
      });
    });

    // Console welcome message
    console.log('%c🚀 Welcome to Portfolio Studio!', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cThis is a WMA Final Project by HDIT 12103', 'font-size: 14px; color: #764ba2;');
    console.log('%cBuilt with: HTML5 • CSS3 • JavaScript • Tailwind CSS', 'font-size: 12px; color: #999;');

    // Banner video autoplay handling
    (function() {
      const heroVideo = document.getElementById('hero-video');
      if (!heroVideo) return;
      heroVideo.muted = true;
      heroVideo.playsInline = true;
      heroVideo.loop = true;

      const tryPlay = () => {
        const p = heroVideo.play();
        if (p !== undefined) {
          p.catch(() => {
            // Autoplay was blocked; show a play button the user can click
            if (!document.querySelector('.play-hero-video')) {
              const playBtn = document.createElement('button');
              playBtn.className = 'play-hero-video';
              playBtn.textContent = 'Play Video';
              playBtn.setAttribute('aria-label', 'Play banner video');
              document.body.appendChild(playBtn);
              playBtn.addEventListener('click', () => {
                heroVideo.play().then(() => playBtn.remove()).catch(() => {});
              });
            }
          });
        }
      };

      // Try autoplay on load and after first user interaction
      window.addEventListener('load', tryPlay);
      document.addEventListener('click', tryPlay, { once: true });
    })();

    // Hero video volume toggle (mute/unmute with persistence)
    (function(){
      const heroVideo = document.getElementById('hero-video');
      const volBtn = document.getElementById('hero-volume-toggle');
      if (!heroVideo || !volBtn) return;

      // Restore saved preference if available
      const savedMuted = localStorage.getItem('videoMuted');
      if (savedMuted !== null) {
        heroVideo.muted = savedMuted === 'true';
      } else {
        heroVideo.muted = true; // default muted
      }

      function updateVolBtn() {
        volBtn.textContent = heroVideo.muted ? '🔇' : '🔊';
        volBtn.setAttribute('aria-label', heroVideo.muted ? 'Unmute banner video' : 'Mute banner video');
        volBtn.title = heroVideo.muted ? 'Unmute banner video' : 'Mute banner video';
      }

      updateVolBtn();

      volBtn.addEventListener('click', () => {
        heroVideo.muted = !heroVideo.muted;
        localStorage.setItem('videoMuted', heroVideo.muted);
        updateVolBtn();
      });
    })();

    // Hero video fallback handler (switch to remote sample if local file missing or path invalid)
    (function() {
      const heroVideo = document.getElementById('hero-video');
      if (!heroVideo) return;
      const sourceEl = heroVideo.querySelector('source');
      const fallbackSrc = heroVideo.dataset.fallbackSrc || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
      const fallbackPoster = heroVideo.dataset.fallbackPoster || 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/flower.jpg';

      function applyFallback() {
        if (!sourceEl) return;
        const currentSrc = sourceEl.getAttribute('src') || sourceEl.src || '';
        if (!currentSrc || currentSrc === fallbackSrc) return;
        sourceEl.setAttribute('src', fallbackSrc);
        if (fallbackPoster) heroVideo.poster = fallbackPoster;
        heroVideo.load();
        heroVideo.play().catch(()=>{});
        document.querySelector('.play-hero-video')?.remove();
      }

      // If the source is clearly a local absolute path (e.g., C:\ or file://), switch immediately
      const srcAttr = sourceEl ? sourceEl.getAttribute('src') || '' : '';
      if (srcAttr && (/^[a-zA-Z]:\\|^file:\/\//).test(srcAttr)) {
        applyFallback();
      }

      // On loading error try fallback once
      heroVideo.addEventListener('error', (e) => {
        applyFallback();
      });
      sourceEl && sourceEl.addEventListener('error', applyFallback);
    })();

    // === AUTH MODALS & FORMS === //
    function validateEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    function openModal(modal) {
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const firstInput = modal.querySelector('.form-input');
      if (firstInput) firstInput.focus();
    }

    function closeModal(modal) {
      if (!modal) return;
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      clearAuthForms();
    }

    function clearAuthForms() {
      const forms = [document.getElementById('login-form'), document.getElementById('signup-form')];
      forms.forEach(f => {
        if (!f) return;
        f.reset();
        const err = f.querySelector('.auth-error');
        const suc = f.querySelector('.auth-success');
        if (err) err.classList.add('hidden');
        if (suc) suc.classList.add('hidden');
      });
    }

    // Open buttons
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const mobileSignupBtn = document.getElementById('mobile-signup-btn');

    // Only attach modal open handlers if the element is not a navigation link (href missing or '#')
    if (loginBtn && (!loginBtn.getAttribute('href') || loginBtn.getAttribute('href') === '#')) {
      loginBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(document.getElementById('login-modal')); });
    }
    if (signupBtn && (!signupBtn.getAttribute('href') || signupBtn.getAttribute('href') === '#')) {
      signupBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(document.getElementById('signup-modal')); });
    }
    if (mobileLoginBtn && (!mobileLoginBtn.getAttribute('href') || mobileLoginBtn.getAttribute('href') === '#')) {
      mobileLoginBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(document.getElementById('login-modal')); document.getElementById('mobile-menu')?.classList.add('hidden'); });
    }
    if (mobileSignupBtn && (!mobileSignupBtn.getAttribute('href') || mobileSignupBtn.getAttribute('href') === '#')) {
      mobileSignupBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(document.getElementById('signup-modal')); document.getElementById('mobile-menu')?.classList.add('hidden'); });
    }

    // Close buttons & backdrop
    document.querySelectorAll('.auth-modal .close-auth').forEach(btn => {
      btn.addEventListener('click', () => closeModal(btn.closest('.auth-modal')));
    });

    document.querySelectorAll('.auth-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    });

    // Login form handler
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[name="email"]').value.trim();
        const password = loginForm.querySelector('input[name="password"]').value || '';
        const err = document.getElementById('login-error');
        const suc = document.getElementById('login-success');
        if (err) err.classList.add('hidden');
        if (suc) suc.classList.add('hidden');

        if (!validateEmail(email)) {
          if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.remove('hidden'); }
          return;
        }
        if (password.length < 6) {
          if (err) { err.textContent = 'Password must be at least 6 characters.'; err.classList.remove('hidden'); }
          return;
        }

        const submitBtn = loginForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        setTimeout(() => {
          if (suc) { suc.textContent = 'Signed in successfully.'; suc.classList.remove('hidden'); }
          if (submitBtn) submitBtn.disabled = false;
          setTimeout(() => closeModal(document.getElementById('login-modal')), 900);
        }, 800);
      });
    }

    // Signup form handler
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signupForm.querySelector('input[name="name"]').value.trim();
        const email = signupForm.querySelector('input[name="email"]').value.trim();
        const password = signupForm.querySelector('input[name="password"]').value || '';
        const confirmPassword = signupForm.querySelector('input[name="confirm_password"]').value || '';
        const err = document.getElementById('signup-error');
        const suc = document.getElementById('signup-success');
        if (err) err.classList.add('hidden');
        if (suc) suc.classList.add('hidden');

        if (!name) {
          if (err) { err.textContent = 'Please enter your full name.'; err.classList.remove('hidden'); }
          return;
        }
        if (!validateEmail(email)) {
          if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.remove('hidden'); }
          return;
        }
        if (password.length < 6) {
          if (err) { err.textContent = 'Password must be at least 6 characters.'; err.classList.remove('hidden'); }
          return;
        }
        if (password !== confirmPassword) {
          if (err) { err.textContent = 'Passwords do not match.'; err.classList.remove('hidden'); }
          return;
        }

        const submitBtn = signupForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        setTimeout(() => {
          if (suc) { suc.textContent = 'Account created successfully.'; suc.classList.remove('hidden'); }
          if (submitBtn) submitBtn.disabled = false;
          setTimeout(() => closeModal(document.getElementById('signup-modal')), 1000);
        }, 900);
      });
    }
