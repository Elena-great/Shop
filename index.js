function openCountdown() {
  const openDate = new Date("April 15, 2022 18:58"); //вводим константу - дату открытия кондитерской
  const now = new Date(); // вводим константу сегодняшнего дня
  const diff = openDate - now; // вводим константу разницы - дата открытия минус сегодняшний день

  //переводим из милисекунд
  const msInSecond = 1000; //сколько милисекунд в секунде
  const msInMinute = 60 * 1000; //в минутах
  const msInHour = 60 * 60 * 1000; //в часах
  const msInDay = 24 * 60 * 60 * 1000; //в днях

  //высчитываем кол-во оставшихся дней
  const displayDay = Math.floor(diff/msInDay); //делим разницу на кол-во милисекунд в дне. Для округления результата используем метод Math.floor

  //этот результат мы должны отразить в приложении: в html у нас есть уже h5, получаем доступ к нему
  document.querySelector(".days").textContent = displayDay;

  //далее создаем по тому же принципу часы, минуты, секунды

  const displayHour = Math.floor((diff%msInDay)/msInHour); //делим разницу(у нас остался остаток с дней) на дни и делим на милисекунды в часах
  document.querySelector(".hours").textContent = displayHour;

  const displayMinute = Math.floor((diff%msInHour)/msInMinute);
  document.querySelector(".minutes").textContent = displayMinute;

  const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
  document.querySelector(".seconds").textContent = displaySecond;

  if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID); //чтобы наш счет останавливался, а не продолжался
    openPastry();
  }
}

let timerID = setInterval(openCountdown, 1000); //добавляем переменную let timerID, чтобы время больше не шло и помещаем её в метод clearInterval

function openPastry() { //добавляем функцию, чтобы у нас менялся заголовок при открытии магазина
  const heading = document.querySelector("h1"); //выделяем заголовок
  heading.textContent = "We are open! We are waiting for you!"; // меняем текст заголовка
  heading.classList.add("pink"); //создаем класс, чтобы задать ему стиль в CSS
}

const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

button.addEventListener ('click', function() {

    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})

//получаем доступ к картинкам
const items = document.querySelectorAll('.item');

//выбираем каждую из картинок, с помощью метода forEach (получаем доступ к массиву и каждой картинке из него), чтобы навесить стиль в CSS
items.forEach(item =>{ //ставим событие, когда мы наводим мышку должно случиться определенное действие
  item.addEventListener('mouseover', ()=>{ //вводим класс для картинок в CSS
    removeFocus(); //функцию удаления помещаем сюда, чтобы класс у нас санчала удалялся, а потом добавлялся
    item.classList.add('selected');
  })
})

//функция удаления класса с картинки
removeFocus = () =>{
  items.forEach(item =>{
    item.classList.remove('selected');
  })
}

