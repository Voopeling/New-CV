var swiper = new Swiper('.code__slider', {
    lidesPerView: 1,
    speed: 1500,
    autoplay: {
        delay: 5000
    },
    spaceBetween: 300,
    loop: true,
    autoHeight: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

//подключение анимаций от скролла
let $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
$('[data-animation-start]').scrollAnimations({ //новый дата атрибут меняет триггер срабатывания анимации
    offset: 0.7
});
$('[data-animation-bot]').scrollAnimations({ //новый дата атрибут меняет триггер срабатывания анимации
    offset: 0.95
});
$('[data-animation-preview]').scrollAnimations({ //новый дата атрибут меняет триггер срабатывания анимации
    offset: 0.9
});
$containers.scrollAnimations();


//кастомный курсор
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) { //событие на передвижение мыши
    e.style.left = n.clientX + "px",  //задает положение курсору от угла окна по горизонтали
        e.style.top = n.clientY + "px"    //задает положение курсору от угла окна по вертикали
});
var
    e = document.getElementById("pointer"); //Нашли кастомный курсор

$(document).mousemove(function (e) {   //функция добавления класса курсору
    $("button, li, a, .swiper-pagination-bullet, .preview__wrapper-burger")
        .on("mouseenter", function () {
            $('.pointer').addClass("large")
        })
        .on("mouseleave", function () {	  //функция удаление класса при покидании курсора границ обьекта
            $('.pointer').removeClass("large")
        })

});

//мерцание
let toggle = document.querySelectorAll('.toggle')
for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('transitionend', () => {
        toggle[i].classList.add('tr-delay-0')
        //t()
    })
}

// function t (){
//     for (let i = 0; i < toggle.length; i++){
//         toggle[i].classList.toggle('skills__active')
//     }
//     setTimeout(t, 1000)
// }



//бургер меню
let burgerBatton = document.querySelector('.preview__wrapper-burger')
let burgerMenu = document.querySelector('.preview__wrapper-menu')
burgerBatton.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active__menu')
    burgerBatton.classList.toggle('preview__wrapper-burger-close')
})

let load = document.querySelector('.body__wrapper-load')
let html = document.querySelector('.html')
let pointer = document.querySelector('.pointer')
window.addEventListener('load', () => {
    load.style.transform = 'translate(0%, -100%)'
    html.style.overflow = 'auto'
    pointer.style.display = 'block'
})