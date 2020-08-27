!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// Текст для каждого уровня. Отображается в модальном окне
var levelDescription=
    ["<button class='ready'>Я готов!</button>",
    "<h2>Предисловие:</h2> <p>Где-то в далекой Галактике на планету Айтигенио напал БАГ, все программы одна за другой начали выходить из строя и никто не знал как им помочь. Айтигенику удалось спастись и теперь он устремился на поиски Кода! Ему предстоит облететь всю галактику, чтобы собрать части кода, который излечит всех от БАГа!</p><br><h2>Миссия:</h2><p>Для перемещения между планетами Айтигенику нужен космический корабль. Используй блоки слева, чтобы Айтигеник смог добраться до корабля. Пока путь свободен двигайся в нужном направлении.</p>",
    "<h2>Ура, космический корабль к полету готов!</h2><p>Теперь мы можем изучить соседнюю планету и найти часть кода!</p><h2>Миссия:</h2><p>Изучить соседнюю  планету!</p>",
    "<p>Отлично, мы получили часть кода <strong>“КА”</strong><p><p>Теперь можно продолжить путь! Изучим следующую планету АС-1506.</p><h2>Миссия:</h2><p>Изучить планету АС-1506 и найти часть кода.</p>",
    "<p>Отлично мы получили еще одну часть кода <strong>“РУ”</strong><p><p>Получен сигнал бедствия с ближайшей  планеты.</p><p>Это же <strong>Айтиша</strong>, лучшая подруга Айтигеника! В поисках кода она попала в ловушку</p><h2>Миссия:</h2><p>Спасти Айтишу из ловушки.</p>",
    "<p>Спасибо, что спасли меня. Мне удалось найти часть кода <strong>“ЗА”.</strong></p><p>Теперь мы вместе сможем продолжить экспедицию и найти новые зацепки. БАГу нас не остановить.</p><h2>Миссия:</h2><p>Внимание! Прямо по курсу пояс астероидов! Нужно пролететь мимо, не задев их.</p>",
    "<p>Бинго! Мы добрались до планеты. Теперь в нашей копилке еще одна часть кода <strong>“Г”.</strong></p><p>Нас приветствует местный житель<br>-Приветствую, на планете Железяка.Меня зовут Джампи, БАГ добрался и до нашей планеты!  У меня произошел сбой в программе :( И теперь я могу ходить только на 3 шага вперед и 2 шага назад. Я растерял все свои запчасти и теперь не помню, как победить БАГа.</p><h2>Миссия:</h2><p>Собрать все запчасти Джампи.</p>",
    "<p><strong>Джампи:</strong> - Ух ты! Большое спасибо за помощь!<br><strong>Айтигеник:</strong>  - Джампи, мы как раз в поисках частей Кода, который поможет излечить нас всех от Бага! Может вы знаете, что нам поможет?<br><strong>Джампи:</strong> - Хм, не уверен, но может вам пригодится вот эта часть кода <strong>«РЕ».</strong>Посоветую посетить планету Сервера, там наверняка вы что-то найдете!<br><strong>Айтигеник:</strong> -Отлично, спасибо!<br> Мы прилетели на планету Сервера.<br> <strong>Сервермэн:</strong> - Баг вывел из строя Сервер, бросив важную деталь в пещеру,  нужно ее найти,  известен только ее вес. Я не могу покинуть свой пост, помоги.</p><h2>Миссия:</h2><p>Найди в пещере самую тяжелую деталь и запомни её вес.</p>"


    ];

var levelHint=
    ["<h2>Подсказка!</h2>", //текст для всех модсказок. Может кнопка какая
    "<p>Подсказка для уровень 1</p>",
    "<p>Пока справа свободно иди направо, а пока свободно сверху иди вверх, следуй маршруту.</p>",
    "<p>Нужно действовать, пока цель не будет достигнута. Если справа свободно - делай шаг вправо.</p>",
    "<p>Пока нужное направление свободно делай шаг, внимательно построй верный маршрут.</p>",
    "<p>Двигайся по координатам <strong>Х</strong> и <strong>Y</strong>, сначала вверх пока <strong>Y</strong> меньше 350 и далее по маршруту.</p>",
    "<p>Сначала собери деталь на координате 1, потом 5, затем на -3, и в конце - 2.</p>",
    "<p>Если вес новой детали больше, чем вес детали в памяти - запомни вес новой детали.</p>"
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
             // console.log(lvl);

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