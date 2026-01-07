
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile_menu_toggle');
    const mobileMenu = document.querySelector('.desktop_nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    const addToCartButtons = document.querySelectorAll('.add_to_cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.textContent = 'Добавлено!';
            this.style.backgroundColor = '#4CAF50';
            this.style.borderColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'В корзину';
                this.style.backgroundColor = 'transparent';
                this.style.borderColor = '#D1C12B';
            }, 2000);
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});