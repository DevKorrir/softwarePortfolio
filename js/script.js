
document.addEventListener('DOMContentLoaded', function() {

    //init all components
    initLoader();
    initThemeToggle();
    
});

//loading screeen
function initLoader() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.querySelector('.loading-progress');

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;

        loadingProgress.style.width = progress + '%';

        if (progress >= 100){
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'visible';
            }, 500);
        }
    }, 100);

    //to make sure loading screen disappear after maximum time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 3000);
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;

    if (!themeToggle) return;

    //Default theme = dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);
    if (icon) {
        icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Smooth transition
    body.style.transition = "background-color 0.4s ease, color 0.4s ease";

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update icon
        if (icon) {
            icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }

        // Add animation class for extra smoothness
        body.classList.add('theme-transition');
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 300);
    });
}
