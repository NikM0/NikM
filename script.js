// Glitch Effect on Name
document.addEventListener("DOMContentLoaded", function () {
  const glitchName = document.getElementById("glitch-name");
  const originalText = glitchName.textContent;

  function startGlitch() {
    const glitchInterval = setInterval(() => {
      glitchName.textContent = [...originalText]
        .map((char) => (Math.random() > 0.5 ? getRandomChar() : char))
        .join("");
    }, 50);

    setTimeout(() => {
      clearInterval(glitchInterval);
      glitchName.textContent = originalText;
    }, 300); // 0.3 seconds
  }

  // Trigger glitch effect only when element is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startGlitch();
        observer.disconnect(); // Stop observing after it's triggered
      }
    });
  });
  observer.observe(glitchName);

  function getRandomChar() {
    const chars = "[{}]-_=+1234567890!@#$%^&*()|\/;:,.<>~";
    return chars[Math.floor(Math.random() * chars.length)];
  }
});

// Smooth Scrolling Navigation
document.addEventListener("DOMContentLoaded", function () {
  const scroll = new SmoothScroll('nav a[href*="#"]', {
    speed: 800,
    offset: 0,
    updateURL: false
  });
});

// Intersection Observer for Lazy Loading Sections
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once content is visible
      }
    });
  }, {
    threshold: 0.5 // Load content when it's 50% in view
  });

  sections.forEach(section => observer.observe(section));
});
