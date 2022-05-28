const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBntImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBntImg.src = "./img/icons/nav_close.svg"
    } else {
        navBntImg.src = "./img/icons/nav_open.svg"
    }
}



AOS.init({
    // disable: 'phone',
    // once: true
});