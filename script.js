document.addEventListener('DOMContentLoaded', function(){

    //init all components
    initLoader();
});

//loading screeen
function initLoader(){
    const loading = document.getElementById('loadingScreen');
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
    },100);

    //to make sure loading screen disappear after maximum time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 3000 );
}