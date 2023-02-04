/* Увеличиваем индекс на 1 — показываем следующий слайд: */
document.querySelector(".next").onclick = () => {
    showSlides(slideIndex += 1);
    console.log(slideIndex); // 2, 3, 1, 2, 3, 1, 2, 3, 1...
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
document.querySelector(".previous").onclick = () => {
    showSlides(slideIndex -= 1);
    console.log(slideIndex); // 3, 2, 1, 3, 2, 1, 3, 2, ...
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;

/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Функция перелистывания: */
function showSlides(n) {
    
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.querySelectorAll(".item");
    console.log(slides.length); //3
    console.log(n); //1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
      
    }
    if (n < 1) {
        slideIndex = slides.length
        console.log(slides.length);
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}
