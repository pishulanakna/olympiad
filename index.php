<?php
  session_start();
  if (isset($_GET['play'])) {
    require "modules/quest-page.html";
  } else {
    require "modules/lending-page.html";
  }
?>