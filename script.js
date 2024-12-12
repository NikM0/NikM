document.addEventListener("DOMContentLoaded", function () {
  // Glitch effect logic
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
    const randomDelay = Math.random() * 5000 + 4000; // Random delay between 4 to 9 seconds
    setTimeout(() => {
      startGlitch();
      triggerRandomGlitch(); // Set up the next glitch after this one completes
    }, randomDelay);
  }

  triggerRandomGlitch(); // Initial trigger to start the glitch cycle

  function getRandomChar() {
    const chars = "[{}]-_=+1234567890!@#$%^&*()|\\/:;,.<>`~";
    return chars[Math.floor(Math.random() * chars.length)];
  }

  // Smooth scroll logic
  const scroll = new SmoothScroll('nav a[href*="#"]', {
    speed: 800,
    offset: 0,
    updateURL: false,
  });

  // Dynamic URL update on scroll
  const sections = document.querySelectorAll("section");
  const originalURL = "https://nikm0.github.io/NikM/";

  function updateURLOnScroll() {
    const scrollPosition = window.scrollY;
    let updatedURL = originalURL;
    let sectionFound = false;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 0; // Adjust for nav height
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        updatedURL = `${originalURL}#${section.id}`;
        sectionFound = true;
      }
    });

    // Reset URL when no section matches
    if (!sectionFound) {
      updatedURL = originalURL;
    }

    // Update the URL dynamically without reloading the page
    if (window.location.href !== updatedURL) {
      history.replaceState(null, "", updatedURL);
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", updateURLOnScroll);
});
