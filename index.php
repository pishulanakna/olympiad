<?php
  session_start();
  
  if (isset($_GET['play'])) {
  	switch ($_GET['play']) {
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
  		
  		default:
  			require "modules/lending-page.html";
  			break;
  	}

   
  } 
  else {
    require "modules/lending-page.html";
  }
?>