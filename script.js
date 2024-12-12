<script>
  // Prevent the default behavior of the anchor link
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
      
      // Scroll the section into the center of the screen
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Scroll to the center of the section
        inline: 'nearest'
      });
    });
  });

  // Optional: Add a class to make sections fade in when they come into view
  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
</script>
