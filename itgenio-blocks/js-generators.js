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

Blockly.JavaScript['while_right_free'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var statements_loop_body = Blockly.JavaScript.statementToCode(block, 'loop_body');
  // TODO: Assemble JavaScript into code variable.
  var code = `
  while (gameHerro.isFree("${dropdown_direction}")) {
    ${statements_loop_body}
  };\n`;
  return code;
};
