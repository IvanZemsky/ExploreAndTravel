(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav-items');
    const menuCloseItem = document.querySelector('.header__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-items_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-items_active');
    });
}());