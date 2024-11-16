// ! smooth scrolling feature 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ! Scroll-to-Top Button feature
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '30px';
scrollToTopBtn.style.right = '30px';
scrollToTopBtn.style.fontSize = '2rem';
scrollToTopBtn.style.background = 'var(--main-color)';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none'; // Initially hidden
scrollToTopBtn.style.boxShadow =
    '0px 0px 15px black';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
