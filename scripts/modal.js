!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// Текст для каждого уровня. Отображается в модальном окне
var levelDescription=
    ["<button class='ready'>Я готов!</button>",
    "<h2>Предисловие:</h2> <p>Где-то в далекой Галактике на планету Айтигенио напал БАГ, все программы одна за другой начали выходить из строя и никто не знал как им помочь. Айтигенику удалось спастись и теперь он устремился на поиски Кода! Ему предстоит облететь всю галактику, чтобы собрать части кода, который излечит всех от БАГа!</p><br><h2>Миссия:</h2><p>Чтобы перемещаться между планетами, Айтигенику нужен космический корабль. Используй блоки слева, чтобы Айтигеник смог дойти до корабля.</p>",
    "<h2>Ура!</h2> <p>Для борьбы с Багом нам нужны союзники. Полетели на соседнюю планету, постараемся кого-нибудь найти!</p>",
    "<p><h2>Отлично, добрались!</h2> Ой, кто-то кричит: ''Айтигениик! Я тут, помогии мне!''</p><p>О нет, это же <strong>Айтиша</strong>, моя лучшая подруга! Видимо она в какой-то ловушке, надо ее найти!</p>",
    "<p>Теперь мы вместе полетим на следующую планету, возможно там будут какие-то зацепки.</p>"


    ];

var levelHint=
    ["<h2>Подсказка!</h2>", //текст для всех модсказок. Может кнопка какая
    "<p>Подсказка для уровень 1</p>",
    "<p>Используй цикл “пока цель не достигнута“, и внутри 4 цикла “пока .. свободно” для 4-х направлений.</p>",
    "<p>Нужно действовать пока цель не будет достигнута, если справа свободно делай вправо шаг</p>",
    "<p>Тебе необходимо выстроить приоритет. Сначала проверяй есть ли путь слева?</p>",
    "<p>Подсказка для уровень 4</p>",
    "<p>Подсказка для уровень 5</p>",
    "<p>Подсказка для уровень 6</p>",
    "<p>Подсказка для уровень 7</p>"
    ];


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   modalButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         e.preventDefault();
         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. Данная вещь пригодится, если у нас будет несколько кнопок*/
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]'),
             lvl=document.querySelector('#curLevel').value;
             console.log(lvl);

          switch(modalId){
            case '1':
              modalElem.querySelector('div.content').innerHTML=levelDescription[lvl]+levelDescription[0];
              readyBtn = document.querySelectorAll('.ready')[0];

              readyBtn.addEventListener('click', function(e) {
                var parentModal = this.closest('.modal');
                parentModal.classList.remove('active');
                overlay.classList.remove('active');
              });
              break;
            case '2':
              modalElem.querySelector('div.content').innerHTML=levelHint[0] + levelHint[lvl];
              break;
          }
         
         
         modalElem.classList.add('active');
         overlay.classList.add('active');

         

      }); 

   }); 


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');
         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   });


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

});