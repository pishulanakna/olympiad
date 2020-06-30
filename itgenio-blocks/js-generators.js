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