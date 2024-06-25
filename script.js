document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('intro-text');
    const introSubtext = document.getElementById('intro-subtext');
    
    const text = "Hello! I'm Nagapriyatham Pindi";
    const subtext = "A Data Geek and Fitness Enthusiast";

    let index = 0;
    let subIndex = 0;

    function type() {
        if (index < text.length) {
            introText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else if (subIndex < subtext.length) {
            introSubtext.textContent += subtext.charAt(subIndex);
            subIndex++;
            setTimeout(type, 100);
        }
    }

    type();
});
