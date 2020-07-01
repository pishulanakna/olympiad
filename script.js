"use strict"

//Описываем класс для нашего персонажа
class Herro {
  constructor() {
    this.x = 3.5;
    this.y = 12;
    this.delta = 30;  //шаг персонажа в пикселях
    this.delay = 500;  //задержка в мс между шагами персонажа
    this.funcDelay = 0 //ожидание до выполнения очередной функции 
                      //(для каждой последующей функции это ожидание 
                      //будет расти на величину this.delay, 
                      //чтобы следующая функция не начиналась,
                      //пока не закончатся предыдущие)
  };
  //Сброс параметров
  reset() {
    console.log('1');
    this.funcDelay = 0;
    this.x = 3.5;
    this.y = 12;
    this.show();
  }
  //Метод для перестановки персонажа в позицию, 
  //соответствующую его координатам
  show() {
    const h = document.querySelector("#herro");
    h.style.left = this.x * this.delta + "px";
    h.style.top = this.y * this.delta + "px";
    console.log(h.style.top,h.style.left, this.x * this.delta, this.y * this.delta);
    if (this.x * this.delta>370 && this.x * this.delta<450 && this.y * this.delta>170 && this.y * this.delta<250){
      alert('finish');
    }
  };
  //Методы для перемещения персонажа
  goRight() {
    setTimeout(() => {
      this.x++;
      this.show();
    }, this.funcDelay);
    this.funcDelay += this.delay;
  }
  goLeft() {
    setTimeout(() => {
      this.x--;
      this.show();
    }, this.funcDelay);
    this.funcDelay += this.delay;
  }
  goUp() {
    setTimeout(() => {
      this.y--;
      this.show();
    }, this.funcDelay);
    this.funcDelay += this.delay;
  }
  goDown() {
    setTimeout(() => {
      this.y++;
      this.show();
    }, this.funcDelay);
    this.funcDelay += this.delay;
  }
}

//Создаём нового персонажа
const gameHerro = new Herro();

document.addEventListener("DOMContentLoaded",() => {

  const workspace = Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});

  //Генерация и запуск js кода для скрипта, составленного пользователем
  const getCode = function() {
    saveBlocksLocal();
    gameHerro.reset();
    this.disabled = true;
    const code = Blockly.JavaScript.workspaceToCode(workspace) + "";
    eval(code);
    setTimeout(()=>{this.disabled = false;},gameHerro.funcDelay);
  }

  //Сохранение скрипта, составленного пользователем в локальное хранилище
  const saveBlocksLocal = () => {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    let xml_text = Blockly.Xml.domToText(xml);
    localStorage.setItem("blocks",xml_text);
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

  document.querySelector("#start").addEventListener("click",getCode);

  //Сохраняем скрипт пользователя каждые 2 секунды
  setInterval(saveBlocksLocal,2000);

  //Ставим персонажа в начальную позицию
  gameHerro.show();

})













