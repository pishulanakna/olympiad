//Тут создаются наши пользовательские блоки со всеми их параметрами
//Для создания можно пользоваться этим приложением https://blockly-demo.appspot.com/static/demos/blockfactory/index.html

Blockly.Blocks['go_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Шаг вправо");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Движение");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Шаг влево");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Движение");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Вверх");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Движение");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Вниз");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Движение");
 this.setHelpUrl("");
  }
};