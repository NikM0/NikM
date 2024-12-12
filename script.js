document.addEventListener("DOMContentLoaded", function () {
  // Glitch effect for the name
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

  function triggerRandomGlitch() {
    const randomDelay = Math.random() * 5000 + 4000; // Random delay between 2 to 7 seconds
    setTimeout(() => {
      startGlitch();
      triggerRandomGlitch(); // Set up the next glitch after this one completes
    }, randomDelay);
  }

  triggerRandomGlitch(); // Initial trigger to start the glitch cycle

  function getRandomChar() {
    const chars = "[{}]-_=+1234567890!@#$%^&*()|\/;:,.<>~";
    return chars[Math.floor(Math.random() * chars.length)];
  }

  // Smooth scrolling for navigation without updating URL
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior

      // Get the target section
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      // Scroll the section into the center of the screen
      const sectionRect = targetSection.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.pageYOffset; // Get the section's top position relative to the page

      const offset = (window.innerHeight - sectionRect.height) / 2; // Calculate the offset to center the section

      // Scroll to the section with adjusted offset
      window.scrollTo({
        top: sectionTop - offset, // Adjusted scroll position
        behavior: 'smooth' // Smooth scroll
      });
    });
  });
});
