
window.addEventListener('load', () => {
    const toggleBtn = document.querySelector(".fas fa-bars");
    const ulNav = document.querySelector('.header-nav');
    
    const aNav = document.querySelectorAll('.nav-a')
    toggleBtn.addEventListener('click', () => {
        ulNav.classList.toggle('active');
    });
    aNav.forEach(btn => {
        btn.addEventListener('click', () => {
            ulNav.classList.remove('active');
        })
    }); 
})