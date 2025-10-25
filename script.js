document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarBtns = document.querySelectorAll('.sidebar-btn');
  
    // Sidebar toggle
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  
    // Sidebar button click actions
    sidebarBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        sidebarBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (window.innerWidth <= 900) sidebar.classList.remove('active');
      });
    });
  
    // Back-to-top
    const backToTop = document.querySelector('.back-to-top');
    backToTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Animate sections (fade-in)
    const sections = document.querySelectorAll('section.fade-in');
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(section => sectionObserver.observe(section));
  
    // Animate skill bars smoothly (works with inline style widths)
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-bar-fill');
  
    const skillsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => {
            // Get the original width from inline style (e.g., "width:90%;")
            const originalWidth = bar.style.width || "0%";
            // Reset to 0 first
            bar.style.width = "0%";
  
            // Animate smoothly after a short delay
            setTimeout(() => {
              bar.style.transition = "width 1.5s ease-in-out";
              bar.style.width = originalWidth;
            }, 200);
          });
          skillsObserver.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.5 });
    skillsObserver.observe(skillsSection);
  });




  
document.addEventListener("DOMContentLoaded", function() {
  const texts = [
    "Frontend Developer  ",
    "UI Designer   ",
    "Web Developer  "
  ];

  const typingElement = document.getElementById("typing-text");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 60 : 100; // Adjust typing/deleting speed

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1500; // pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // next text
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
});
