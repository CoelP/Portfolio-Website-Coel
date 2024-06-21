document.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    let red = Math.min(255, (scrollPercent / 100) * 255);
    let green = 255 - red;
    let blue = 100;

    let color = `rgb(${Math.round(pink)}, ${Math.round(green)}, ${Math.round(blue)})`;

  let styleElement = document.querySelector('#scrollbar-style');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'scrollbar-style';
        document.head.appendChild(styleElement);
    }
    styleElement.textContent = `
        ::-webkit-scrollbar-thumb {
            background: ${color};
        }
    `;
});