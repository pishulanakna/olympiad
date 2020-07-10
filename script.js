"use strict"



//Описываем класс для нашего персонажа
class Herro {

  constructor() {
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
    this.x = 2;
    this.y = 8;
    this.delta = 45; //шаг персонажа в пикселях
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
      // console.log(h.style.top,h.style.left, this.x * this.delta, this.y * this.delta);
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
}

//Создаём нового персонажа
const gameHerro = new Herro();

document.addEventListener("DOMContentLoaded", () => {

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
  gameHerro.show(gameHerro.x, gameHerro.y);

})