const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        toggle.textContent = "✖";  // cross
    } else {
        toggle.textContent = "☰";  // menu
    }
});

document.querySelectorAll('.scroll-bar').forEach((bar) => {
    bar.innerHTML += bar.innerHTML;
});
