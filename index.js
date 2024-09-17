
  // Define the CSS variables
  const colors = new Array(6).fill(0).map((_, i) => {
    const randomHue = Math.floor(Math.random() * 360);
    return `hsla(${randomHue}, 95%, 23%, 0.06);`;
  });
console.log(colors)
  // Inject the CSS variables into the HTML page
  colors.forEach(function (key, index) {
     // Add CSS rules to the document
     const styleElement = document.createElement('style');
     styleElement.innerHTML = `
         .info-block-${index+1} {
            
             background-color: ${key};
         }
     `;
     document.head.appendChild(styleElement);
  
});
