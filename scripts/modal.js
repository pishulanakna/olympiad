!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// Текст для каждого уровня. Отображается в модальном окне
var levelDescription=
    ["<button class='ready'>Я готов!</button>",
    "<h2>Предисловие:</h2> <p>Где-то в далекой Галактике на планету Айтигенио напал БАГ, все программы одна за другой начали выходить из строя и никто не знал как им помочь. Айтигенику удалось спастись и теперь он устремился на поиски Кода! Ему предстоит облететь всю галактику, чтобы собрать части кода, который излечит всех от БАГа!</p><br><h2>Миссия:</h2><p>Для перемещения между планетами Айтигенику нужен космический корабль. Используй блоки слева, чтобы Айтигеник смог добраться до корабля.</p><p>Пока путь свободен двигайся в нужном направлении.</p>",
    "<h2>Ура, космический корабль к полету готов!</h2><p>Теперь мы можем изучить соседнюю планету и найти часть кода.</p><h2>Миссия:</h2><p>Изучить соседнюю  планету!</p>",
    "<h2>Отлично, мы получили часть кода “КА”</h2><p>Теперь можно продолжить путь! Изучим следующую планету АС-1506.</p><h2>Миссия</h2><p>Изучить планету АС-1506 и найти часть кода.</p>",
    "<h2>Отлично мы получили еще одну часть кода “РУ”</h2><p>Получен сигнал бедствия с ближайшей  планеты.</p><p>Это же <strong>Айтиша</strong>, лучшая подруга Айтигеника! В поисках кода она попала в ловушку.</p><h2>Миссия</h2><p>Спасти Айтишу из ловушки.</p>",
    "<h2>Спасибо, что спасли меня. Мне удалось найти часть кода “ЗА”.</h2><p>Теперь мы вместе сможем продолжить экспедицию и найти новые зацепки. БАГу нас не остановить.</p><h2>Миссия</h2><p>Внимание! Прямо по курсу пояс астероидов! Нужно пролететь мимо, не задев их.</p>",
    "<p>Шота для 6 уровня может быть здесь будет. А может и нет....</p>",
    "<p>Шота для 7 уровня может быть здесь будет. А может и нет....</p>"


    ];

var levelHint=
    ["<h2>Подсказка!</h2>", //текст для всех модсказок. Может кнопка какая
    "<p>Подсказка для уровень 1</p>",
    "<p>Пока справа свободно иди направо, а пока свободно сверху иди вверх, следуй маршруту.</p>",
    "<p>Нужно действовать, пока цель не будет достигнута. Если справа свободно - делай шаг вправо.</p>",
    "<p>Пока нужное направление свободно делай шаг, внимательно построй верный маршрут.</p>",
    "<p>Двигайся по координатам <strong>X</strong> и <strong>Y</strong>, сначала вверх пока <strong>Y</strong> меньше 350 и далее по маршруту.</p>",
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