let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    column = document.querySelectorAll('.column'),
    newMenu = document.createElement('li'),
    adv = document.querySelector('.adv'),
    promt = document.getElementById('prompt'),
    q = prompt('Ваше отношение к техники Apple?', '');
        
    
    newMenu.classList.add('menu-item');
    newMenu.textContent = 'Пятый пункт';

menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(newMenu);

document.body.style.backgroundImage = "url(img/apple_true.jpg)";
document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple';
column[1].removeChild(adv);

promt.textContent = q;






