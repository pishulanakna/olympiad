<?php
	session_start();
	
	if (isset($_POST['name'])) {
		require 'DBConn/reg.php';
	} else if (isset($_GET['play'])) {
  	switch ($_GET['play']) {
      case '-2':
        require "modules/afterReg2.html";
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
  	}
	} 
	else if (isset($_GET['reg']))
	{
		require 'modules/regcompleted.php';
	}
	else if (isset($_GET['u']))
	{
	    require "modules/afterReg.php";
	}
	else
	{
    require 'modules/registration.html';
	}
?>