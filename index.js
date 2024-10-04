function addColors() {
  // Define the CSS variables
  const colors = new Array(6).fill(0).map((_, i) => {
    const randomHue = Math.floor(Math.random() * 360);
    if (i % 2) {
      return `hsl(0deg 0% 99.07% / 88%)`;
    }
    return `hsl(0deg 0% 62.04% / 12%)`;
    return `hsla(${randomHue}, 95%, 28%, 0.24);`;
  });
  console.log(colors);
  // Inject the CSS variables into the HTML page
  colors.forEach(function (key, index) {
    // Add CSS rules to the document
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
         .info-block-${index + 1} {
            
             background-color: ${key};
         }
     `;
    document.head.appendChild(styleElement);
  });
}

document.querySelectorAll("a").forEach(function (el) {
  el.addEventListener("click", function () {
    amplitude.track("link", { href: el.href });
  });
});

