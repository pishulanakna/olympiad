<?php
  session_start();
  
  if (isset($_GET['play'])) {
  	switch ($_GET['play']) {
       case '-3':
        require "modules/regcompleted.html";
        break;
      case '-2':
        require "modules/afterReg2.html";
        break;
       case '-1':
        require "modules/afterReg.html";
        break;
      case '0':
        require "modules/registration.html";
        break;
  		case '1':
  			require "modules/quest-page.html";
  			break;

  		case '2':
  			require "modules/quest-page2.html";
  			break;

  		case '3':
  			require "modules/quest-page3.html";
  			break;

  		case '4':
  			require "modules/quest-page4.html";
  			break;

  		case '5':
  			require "modules/quest-page5.html";
  			break;

      case '7':
        require "modules/quest-page7.html";
        break;

  		case '9':
  			require "modules/finish.html";
  			break;
  		
  		default:
  			require "modules/lending-page.html";
  			break;
  	}

   
  } 
  else {
    require "modules/lending-page.html";
  }
?>