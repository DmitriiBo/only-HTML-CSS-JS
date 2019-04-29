// Корневой Javascript

window.onload = function(){ // вешаем на данное событие, чтобы фукнция начала выполнятся после загрузки и отображения DOM узлов
  let btn = document.querySelector('.menu-btn') 
  btn.addEventListener('click', go); // цепляем функцию GO, которая будет отображать/скрывать БУРГЕР-МЕНЮ на мобильной версии, на событие КЛИК. 

   function go(e) {
    let menu = document.querySelector('.menu');
    let header = document.querySelector('header');
    e.preventDefault();
    if (menu.style.display == "" || menu.style.display == 'none') {
        menu.style.display = 'block';
        header.style.marginBottom = '60px'
    } else {
        menu.style.display = 'none';
        header.style.marginBottom = '0';
    }
  }
}
