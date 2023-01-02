const hamburger = document.querySelector('.hamburger--js');
console.log(hamburger);

hamburger.addEventListener('click', () => {
    console.log("button clicked");
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})