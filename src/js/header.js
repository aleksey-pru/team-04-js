// Отримуємо елементи бургер-меню та мобільного меню
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
const navLinks = document.querySelectorAll('.mob-menu-nav-link');
// Функція для відкриття мобільного меню
function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    blockScroll();
}

// Функція для закриття мобільного меню
function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    enableScroll();
}

function blockScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'visible';
}

// Додаємо обробник подій для відкриття мобільного меню
burgerBtn.addEventListener('click', openMobileMenu);

// Додаємо обробник подій для закриття мобільного меню
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu()      
    });
});
// Закриття меню при кліку за його межами
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !burgerBtn.contains(event.target)) {      
        closeMobileMenu();
    }
});



//Menu

const menuBtn = document.querySelector('.js-header-menu-btn');
const submenu = document.querySelector('.header-submenu');
const menuSubLinks  = document.querySelectorAll('.header-submenu-item a');

function closeHeaderMenu() {
    submenu.classList.remove('is-open');
}

menuBtn.addEventListener('click', (event) => {
   event.stopPropagation(); 
  submenu.classList.toggle('is-open');
  
});

document.addEventListener('click', (event) => {
  if (!menuBtn.contains(event.target) && !submenu.contains(event.target)) {
    closeHeaderMenu();
  }
});



// Плавний скрол до секцій
document.addEventListener("DOMContentLoaded", function () {
    
    const menuLinks = document.querySelectorAll(".menu-navigation, .mob-menu-nav-link");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
              // console.log("Прокрутка :", targetId);
              closeHeaderMenu();
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById("header").offsetHeight,
                    behavior: "smooth"
                });
            } else {
                console.log("Секція відсутня:", targetId);
            }
        });
    });
});
