 // Function to set image dimensions based on container width
 function setGalleryImageDimensions() {
    const container = document.getElementById("image-container");
    const images = container.getElementsByTagName("img");

    const containerWidth = container.offsetWidth;
    const imageSize = containerWidth / images.length;

    for (let i = 0; i < images.length; i++) {
        images[i].style.width = imageSize + "px";
        images[i].style.height = imageSize + "px";
    }
}

// Call the function when the page loads and when it's resized
window.addEventListener("load", setGalleryImageDimensions);
window.addEventListener("resize", setGalleryImageDimensions);


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });