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

        .appendField("Шаг вверх");

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

        .appendField("Шаг вниз");

    this.setPreviousStatement(true, null);

    this.setNextStatement(true, null);

    this.setColour(120);

 this.setTooltip("Движение");

 this.setHelpUrl("");

  }

};



//цикл "Пока ... свободно"

Blockly.Blocks['while_direction_free'] = {

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



//цикл "Пока цель не достигнута"

Blockly.Blocks['while_not_goal'] = {

  init: function() {

    this.appendStatementInput("loop_body")

        .setCheck(null)

        .setAlign(Blockly.ALIGN_CENTRE)

        .appendField("Пока цель не достигнута")

    this.setPreviousStatement(true, null);

    this.setNextStatement(true, null);

    this.setColour(150);

 this.setTooltip("");

 this.setHelpUrl("");

  }

};



//условие "Если ... свободно"

Blockly.Blocks['if_direction_free'] = {

  init: function() {

    this.appendStatementInput("condition_body")

        .setCheck(null)

        .appendField("Если ")

        .appendField(new Blockly.FieldDropdown([["справа","right"], ["слева","left"], ["сверху","top"], ["снизу","down"]]), "direction")

        .appendField("свободно");

    this.setPreviousStatement(true, null);

    this.setNextStatement(true, null);

    this.setColour(180);

 this.setTooltip("");

 this.setHelpUrl("");

  }

};



//условие "Если ... свободно, иначе"

Blockly.Blocks['if_direction_free_else'] = {

  init: function() {

    this.appendStatementInput("condition_body")

        .setCheck(null)

        .appendField("Если ")

        .appendField(new Blockly.FieldDropdown([["справа","right"], ["слева","left"], ["сверху","top"], ["снизу","down"]]), "direction")

        .appendField("свободно");

    this.appendStatementInput("else_body")

        .setCheck(null)

        .setAlign(Blockly.ALIGN_RIGHT)

        .appendField("иначе");

    this.setPreviousStatement(true, null);

    this.setNextStatement(true, null);

    this.setColour(180);

 this.setTooltip("");

 this.setHelpUrl("");

  }

};

//Цикл пока x > <
Blockly.Blocks['while_x'] = {
  init: function() {
    this.appendStatementInput("loop_body")
        .setCheck(null)
        .appendField("пока Х ")
        .appendField(new Blockly.FieldDropdown([["больше",">"], ["меньше","<"]]), "comparing")
        .appendField(new Blockly.FieldTextInput("0"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Цикл пока y > <
Blockly.Blocks['while_y'] = {
  init: function() {
    this.appendStatementInput("loop_body")
        .setCheck(null)
        .appendField("пока Y ")
        .appendField(new Blockly.FieldDropdown([["больше",">"], ["меньше","<"]]), "comparing")
        .appendField(new Blockly.FieldTextInput("0"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Блок для сравнивания веса деталей
Blockly.Blocks['if_part_weight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Если");
    this.appendValueInput("detail_1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["больше",">"], ["меньше","<"]]), "condition");
    this.appendValueInput("detail_2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(", то");
    this.appendStatementInput("condition_body")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Блок Деталь в рюкзаке
Blockly.Blocks['in_a_backpack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("вес детали");
    this.appendDummyInput()
        .appendField("в памяти");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Блок Деталь под ногами
Blockly.Blocks['on_the_floor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("вес");
    this.appendDummyInput()
        .appendField("новой детали");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Блок Заменить деталь
Blockly.Blocks['replace_the_part'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Запомнить вес новой детали");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//цикл for
Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendStatementInput("loop_body")
        .setCheck(null)
        .appendField("повторить")
        .appendField(new Blockly.FieldTextInput("0"), "i")
        .appendField("раз");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

