"use strict"



//Описываем класс для нашего персонажа
class Herro {

  constructor() {
    // текущий уровень
    this.level=0;

    // адрес фона текущего уровня
    this.bgImageName='';

    // адрес картинки персонажа
    this.heroImageName='';

    // адрес картинки с финишем
    this.finishImageName='';


    // массив с начальными значениями точки старта
    this.startPosition=[[1,8]];

    // массив со значениями точки финиша
    this.finishPosition=[[8,4]];

    // Наша карта 1-стена, 0-дорога
    this.map = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    // this.x = 2;
    // this.y = 8;
    this.delta = 55; //шаг персонажа в пикселях
    this.delay = 500; //задержка в мс между шагами персонажа
    this.funcDelay = 500 //ожидание до выполнения очередной функции 
    //(для каждой последующей функции это ожидание 
    //будет расти на величину this.delay, 
    //чтобы следующая функция не начиналась,
    //пока не закончатся предыдущие)
    this.timeOuts = []; //здесь будем хранить таймауты для каждого отображения героя
  };
  //Сброс параметров
  reset() {
    this.funcDelay = 500;
    this.x = 2;
    this.y = 8;
    this.timeOuts = [];
    this.show(this.x, this.y);
  }
  //Метод для перестановки персонажа в позицию, 
  //соответствующую его координатам
  show(myX,myY) {
    const h = document.querySelector("#herro");
    h.style.opacity = 1;
    if (this.map[myY - 1][myX - 1] == 0) { //роверяю наличие дороги по карте
      h.style.left = myX * this.delta + "px";
      h.style.top = myY * this.delta + "px";
      console.log(h.style.top,h.style.left, this.x * this.delta, this.y * this.delta);
      if (myX * this.delta > 445 && myX * this.delta < 480 && myY * this.delta > 170 && myY * this.delta < 250) {
        h.style.opacity = 0;
      }
    } else {
      //останавливаем все таймауты, чтобы остановить следующие шаги героя
      console.log(this.timeOuts);
      this.timeOuts.forEach(element => {
        clearTimeout(element);
      });  
      document.querySelector("#start").disabled = false;
    }
  };
  //Методы для перемещения персонажа
  goRight() {
    this.x++;
    const thisX = this.x, thisY = this.y;
    let timeout = setTimeout(() => {
      this.show(thisX, thisY);
    }, this.funcDelay);
    this.timeOuts.push(timeout);
    this.funcDelay += this.delay;
  }
  goLeft() {
    this.x--;
    const thisX = this.x, thisY = this.y;
    let timeout = setTimeout(() => {
      this.show(thisX, thisY);
    }, this.funcDelay);
    this.timeOuts.push(timeout);
    this.funcDelay += this.delay;
  }
  goUp() {
    this.y--;
    const thisX = this.x, thisY = this.y;
    let timeout = setTimeout(() => {
      this.show(thisX, thisY);
    }, this.funcDelay);
    this.timeOuts.push(timeout);
    this.funcDelay += this.delay;
  }
  goDown() {
    this.y++;
    const thisX = this.x, thisY = this.y;
    let timeout = setTimeout(() => {
      this.show(thisX, thisY);
    }, this.funcDelay);
    this.timeOuts.push(timeout);
    this.funcDelay += this.delay;
  }

  //функция, определяющая, свободен ли путь в заданном направлении
  isFree = (dir) => {
    const x = gameHerro.x - 1, y = gameHerro.y - 1;
    let wall;
    switch(dir) {
      case "right":
        wall = gameHerro.map[y][x+1];
        break;
      case "left":
        wall = gameHerro.map[y][x-1];
        break;
      case "top":
        wall = gameHerro.map[y-1][x];
        break;
      case "down":
        wall = gameHerro.map[y+1][x];
        break;
    }
    return !wall;
  };

  // Определяем какой сейчас уровень и делаем подготовку для следующего
  newLevel=()=>{
    if (this.level<10){
      this.level++;

    }
    let bg_name
    document.getElementById('curLevel').value=this.level;
    document.getElementsByClassName('js-open-modal')[0].click();
    this.bgImageName='images/bg/level'+this.level+'.jpg'; //генерирую адрес картинки с фоном для текущего уровня
    this.heroImageName='images/hero/level'+this.level+'.png'; //генерирую адрес картинки персонажа для текущего уровня
    this.finishImageName ='images/finish/level'+this.level+'.png'; //генерирую адрес картинки финиша для текущего уровня

    document.querySelector('#showGame').style.background= "url("+ this.bgImageName+") no-repeat";
    
    document.querySelector('#herro').style.background= "url("+ this.heroImageName+") no-repeat";
    document.querySelector('#herro').style.left = this.startPosition[this.level-1][0] * this.delta + "px";
    document.querySelector('#herro').style.top = this.startPosition[this.level-1][1] * this.delta + "px";

    document.querySelector('#exit').style.background= "url("+ this.finishImageName+") no-repeat";
    document.querySelector('#exit').style.left = this.finishPosition[this.level-1][0] * this.delta + "px";
    document.querySelector('#exit').style.top = this.finishPosition[this.level-1][1] * this.delta + "px";
  };


}

//Создаём нового персонажа
const gameHerro = new Herro();

document.addEventListener("DOMContentLoaded", () => {
  gameHerro.newLevel();

  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
  });

  //Генерация и запуск js кода для скрипта, составленного пользователем
  const getCode = function () {
    saveBlocksLocal();
    gameHerro.reset();
    this.disabled = true;
    const code = Blockly.JavaScript.workspaceToCode(workspace) + "";
    eval(code);
    let timeout = setTimeout(() => {
      this.disabled = false;
    }, gameHerro.funcDelay);
    gameHerro.timeOuts.push(timeout);
  }

  //Сохранение скрипта, составленного пользователем в локальное хранилище
  const saveBlocksLocal = () => {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    let xml_text = Blockly.Xml.domToText(xml);
    localStorage.setItem("blocks", xml_text);
  }

  //Загрузка из локального хранилища
  const loadBlocksLocal = () => {
    if (localStorage.getItem("blocks")) {
      let xml_text = localStorage.getItem("blocks")
      let xml = Blockly.Xml.textToDom(xml_text);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  }


  loadBlocksLocal();

  document.querySelector("#start").addEventListener("click", getCode);

  document.querySelector("#reset").addEventListener("click", gameHerro.reset.bind(gameHerro));

  //Сохраняем скрипт пользователя каждые 2 секунды
  setInterval(saveBlocksLocal, 2000);

  //Ставим персонажа в начальную позицию
  // gameHerro.show(gameHerro.x, gameHerro.y);

})