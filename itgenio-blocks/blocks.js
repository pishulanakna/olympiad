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

//цикл "Пока ... свободно"
Blockly.Blocks['while_right_free'] = {
  init: function() {
    this.appendStatementInput("loop_body")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Пока  ")
        .appendField(new Blockly.FieldDropdown([["справа","right"], ["слева","left"], ["сверху","top"], ["снизу","down"]]), "direction")
        .appendField("свободно");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};