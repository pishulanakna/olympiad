<?php
require 'DBConn/libs/rb-mysql.php';
//связываемся с БД
require 'DBConn/dbconn.php';

if (!R::testConnection())
//если не связались с бд, то выводим ошибку и перезагружаем страничку
{
	echo 'Что-то пошло не так';
	exit;
}
$user = R::load('users', $_GET['reg']);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Олимпиада в Айтигенио 2020</title>
  <link rel="stylesheet" href="../styles/style.css">
  <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
</head>
<body>
  <div id="reg">
    <img src="../images/mail.png" alt="">
    <span class="head">Вы зарегистрированы!</span>
    <div class="group">
      <p>На Email <strong class="mail">
      <?php echo $user->email ?>
    </strong> отправлено письмо с сылкой на олимпиаду.</p>
    </div>
    <div class="group">
      <p>Если письма нет в папке <strong>«Входящие»</strong>, проверьте  <strong>«Спам»</strong> и <strong>«Промоакции»</strong></p>
    </div>

  </div>
</body>
</html>