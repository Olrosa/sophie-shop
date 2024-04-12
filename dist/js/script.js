document.addEventListener('DOMContentLoaded', function() {
   

    // ACTIVE COLOR 

    const header = document.querySelector('.header');
    const openHeader = document.getElementById('openMenu');
    const headerList = document.getElementById('headerList');
    const headerListLinks = document.querySelectorAll('.header__list-link');
    const logo = document.getElementById('logo');
    const logoMobile = document.getElementById('logo_mob');
    const cart = document.getElementById('cart');
    let isOpen = false;

    if (!header.classList.contains('dark')) {
        header.addEventListener('mouseenter', function() {
            headerListLinks.forEach(link => {
                link.classList.add('active'); // Добавляем класс активности к каждой ссылке
            });
            header.classList.add('active');
            logo.src = '../icons/logo.png'; // Возвращаем источник изображения логотипа обратно
            /* logoMobile.src = '../icons/logo.png'; */
            cart.src = '../icons/cart.svg'; // Возвращаем источник изображения корзины обратно
        
            header.addEventListener('mouseleave', function() {
                headerListLinks.forEach(link => {
                    link.classList.remove('active'); // Убираем класс активности у каждой ссылки
                });
                headerList.classList.remove('active');
                header.classList.remove('active');
                logo.src = '../icons/logo_white.png'; // Меняем источник изображения логотипа
       /*          logoMobile.src = '../icons/logo_white.png'; */
                cart.src = '../icons/cart_white.svg'; // Меняем источник изображения корзины
                openHeader.src = '../icons/open2.svg'
                });
                
        });
        
        openHeader.addEventListener('click', () => {
           
            if (isOpen == false) {
                isOpen = true;
                headerListLinks.forEach(link => {
                    link.classList.add('active'); // Добавляем класс активности к каждой ссылке
                });
                header.classList.add('active');
                logo.src = '../icons/logo.png'; // Возвращаем источник изображения логотипа обратно
                /* logoMobile.src = '../icons/logo.png'; */
                cart.src = '../icons/cart.svg'; // Возвращаем источник изображения корзины обратно
                headerList.classList.add('active');
                openHeader.src = '../icons/close.svg'
            } else {
                isOpen = false;
                headerListLinks.forEach(link => {
                    link.classList.remove('active'); // Убираем класс активности у каждой ссылки
                });
                headerList.classList.remove('active');
                header.classList.remove('active');
                logo.src = '../icons/logo_white.png'; // Меняем источник изображения логотипа
       /*          logoMobile.src = '../icons/logo_white.png'; */
                cart.src = '../icons/cart_white.svg'; // Меняем источник изображения корзины
                openHeader.src = '../icons/open2.svg'
            }
           
        });



        
    }

    /// TABS

    const tabs = document.querySelectorAll('.about__item');
    const tabContents = document.querySelectorAll('.about__tab');
    const images = document.querySelectorAll('.about__img');
    const textBlock = document.querySelector('.about__text-block');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
    
            // Удаление активного класса со всех вкладок
            tabs.forEach(item => {
                item.classList.remove('active');
            });
            // Добавление активного класса выбранной вкладке
            tab.classList.add('active');
    
            // Удаление активного класса со всех содержимых вкладок
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            // Активация соответствующего содержимого вкладки
            document.getElementById(tabId).classList.add('active');
    
            // Удаление активного класса со всех изображений
            images.forEach(img => {
                img.classList.remove('active');
            });
            // Активация соответствующего изображения
            const activeImg = document.querySelector(`.about__img-block .about__img:nth-child(${index + 1})`);
            if (activeImg) {
                activeImg.classList.add('active');
            }
    
            setTextBlockTop(index); // Передаем индекс текущего таба в функцию
        });
    });
    
    function setTextBlockTop(index) {
        const baseTop = 136; // Базовое значение top для первого таба
        const offset = 40; // Величина смещения для каждого следующего таба
        textBlock.style.top = `${baseTop + offset * index}px`;
    }

    /// CART

   
    const cartButton = document.getElementById("cart");
    const cart2 = this.getElementById("cartOpen");
    const cartCloseButton = document.getElementById("cartClose");
    const cartOverlay = document.querySelector(".overlay");
    const body = document.body;

    cartButton.addEventListener("click", function() {
        cart2.classList.add("active");
        cartOverlay.classList.remove("hide"); // Убираем класс hide
        body.style.overflow = "hidden"; // Блокируем скролл body
    });

    cartCloseButton.addEventListener("click", function() {
        cart2.classList.remove("active");
        cartOverlay.classList.add("hide"); // Добавляем класс hide
        body.style.overflow = ""; // Восстанавливаем скролл body
    });

    
    
    // Получаем все элементы с классом .header__list-sub
    const subListTriggers = document.querySelectorAll('.header__list-sub');

    // Обходим все элементы и добавляем обработчики событий
    subListTriggers.forEach(function(subListTrigger) {
        const subList = subListTrigger.querySelector('.header__sublist');

        // Функция для добавления класса active
        function addActive() {
            subList.classList.add('active');
            // Возможно, вам нужно добавить класс submenu к родительскому элементу
            const header = subListTrigger.closest('.header');
            if (header) {
                header.classList.add('submenu');
            }
        }

        // Функция для удаления класса active
        function removeActive() {
            subList.classList.remove('active');
            // Возможно, вам нужно удалить класс submenu у родительского элемента
            const header = subListTrigger.closest('.header');
            if (header) {
                header.classList.remove('submenu');
            }
        }

        // Событие при наведении на элемент с классом .header__list-sub
        subListTrigger.addEventListener('mouseover', addActive);

        // Событие при уходе курсора с элемента с классом .header__list-sub и его подменю
        subListTrigger.addEventListener('mouseout', function(event) {
            // Проверяем, действительно ли курсор ушел с элемента и его подменю
            if (!subListTrigger.contains(event.relatedTarget)) {
                removeActive();
            }
        });

        // Событие при уходе курсора с подменю
        subList.addEventListener('mouseout', function(event) {
            // Проверяем, действительно ли курсор ушел с подменю и не перешел на .header__list-sub
            if (!subList.contains(event.relatedTarget) && !subListTrigger.contains(event.relatedTarget)) {
                removeActive();
            }
        });
    });


    // SLIDER
    const accessorySlider = new Swiper('.accessory__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });


    
    
    

});
