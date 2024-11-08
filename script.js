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

  function triggerRandomGlitch() {
    const randomDelay = Math.random() * 5000 + 4000; // Random delay between 2 to 7 seconds
    setTimeout(() => {
      startGlitch();
      triggerRandomGlitch(); // Set up the next glitch after this one completes
    }, randomDelay);
  }

  triggerRandomGlitch(); // Initial trigger to start the glitch cycle

  function getRandomChar() {
    const chars = "[{}]-_=+1234567890!@#$%^&*()|\/;:,.<>`~";
    return chars[Math.floor(Math.random() * chars.length)];
  }
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});
