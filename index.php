<?php
  session_start();
  if (isset($_GET['play'])) {
    require "modules/quest-page2.html";
  } else {
    require "modules/lending-page.html";
  }
?>