//Тут прописываем функции, возвращающие js код, генерируемый каждым нашим блоком



Blockly.JavaScript['go_right'] = function(block) {

  var code = 'gameHerro.goRight();\n';

  return code;

};



Blockly.JavaScript['go_left'] = function(block) {

  var code = 'gameHerro.goLeft();\n';

  return code;

};



Blockly.JavaScript['go_up'] = function(block) {

  var code = 'gameHerro.goUp();\n';

  return code;

};



Blockly.JavaScript['go_down'] = function(block) {

  var code = 'gameHerro.goDown();\n';

  return code;

};



Blockly.JavaScript['while_direction_free'] = function(block) {

  var dropdown_direction = block.getFieldValue('direction');

  var statements_loop_body = Blockly.JavaScript.statementToCode(block, 'loop_body');

  var code = `

  while (gameHerro.isFree("${dropdown_direction}")) {

    ${statements_loop_body}

  };\n`;

  return code;

};



Blockly.JavaScript['while_not_goal'] = function(block) {

  var statements_loop_body = Blockly.JavaScript.statementToCode(block, 'loop_body');

  var code = `

  let limitLoop = 1000;

  while (!gameHerro.isGoal() && limitLoop > 0) {

    limitLoop--;

    console.log(limitLoop)

    ${statements_loop_body}

  };\n`;

  return code;

};



Blockly.JavaScript['if_direction_free'] = function(block) {

  var dropdown_direction = block.getFieldValue('direction');

  var statements_condition_body = Blockly.JavaScript.statementToCode(block, 'condition_body');

  var code = `

  if (gameHerro.isFree("${dropdown_direction}")) {

    ${statements_condition_body}

  };\n`;

  return code;

};



Blockly.JavaScript['if_direction_free_else'] = function(block) {

  var dropdown_direction = block.getFieldValue('direction');

  var statements_condition_body = Blockly.JavaScript.statementToCode(block, 'condition_body');

  var statements_else_body = Blockly.JavaScript.statementToCode(block, 'else_body');

  var code = `

  if (gameHerro.isFree("${dropdown_direction}")) {

    ${statements_condition_body}

  } else {

    ${statements_else_body}

  };\n`;

  return code;

};

Blockly.JavaScript['while_x'] = function(block) {
  var dropdown_comparing = block.getFieldValue('comparing');
  var text_value = block.getFieldValue('value');
  var statements_loop_body = Blockly.JavaScript.statementToCode(block, 'loop_body');
  
  var code = `

  let limitLoop = 1000;

  while (gameHerro.x*50 ${dropdown_comparing} ${text_value}) {

    limitLoop--;

    console.log(limitLoop)

    ${statements_loop_body}

  };\n`;

  return code;
};

Blockly.JavaScript['while_y'] = function(block) {
  var dropdown_comparing = block.getFieldValue('comparing');
  var text_value = block.getFieldValue('value');
  var statements_loop_body = Blockly.JavaScript.statementToCode(block, 'loop_body');
  
  var code = `

  let limitLoop = 1000;

  while (gameHerro.y*50 ${dropdown_comparing} ${text_value}) {

    limitLoop--;

    console.log(limitLoop)

    ${statements_loop_body}

  };\n`;

  return code;
};