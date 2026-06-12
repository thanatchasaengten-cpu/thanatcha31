// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Shadow เมื่อเลื่อนหน้า
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation เมื่อเลื่อนถึง Section
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
});

// ปุ่มกลับด้านบน
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
