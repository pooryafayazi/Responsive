

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-menu");

if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
    });
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetHref = this.getAttribute('href');
        if (targetHref !== null) {
            const targetId = targetHref.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = -50; // تنظیم افست
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetHref = this.getAttribute('href');
        if (targetHref !== null) {
            const targetId = targetHref.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                let offset;
                if (window.innerWidth > 992) {
                    offset = -55;
                } else {
                    offset = -295;
                }
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});










