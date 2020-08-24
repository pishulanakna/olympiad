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
$user = R::findOne( 'users', 'address = ?', [$_GET['u']]);
if (!isset($user)) 
{
    echo "<h2>Указанного Вами адреса не существует</h2>";
    exit;
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Олимпиада в Айтигенио 2020</title>
  <link rel="stylesheet" href="styles/style.css">
  <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
</head>
<body>
	<div class="w800 lastPagepage-content">
		<div class="top-panel lastPagetop-panel">
			<div class="line-block">
		  	<span class="lastPageTitle"><img src="../images/student.png" alt="">&nbsp;
		  	<?php echo $user->name ?>
		  	</span>
		  </div>
		</div>
		

	  <div class="container">
	    
      <div class="half">
        <div>5 сентября начнется олимпиада</div>
        <div class="photo"><img src="../images/btn1.png" alt=""></div>
        
      </div>


		  <div class="half">
        <div class="box">
          <span class="title">правила</span>
          <div class="rules">
            <div class="icon"><img src="../images/alarm.png" alt=""></div>
            <div class="text">После нажатия на кнопку старт, пойдет время олимпиады. Нельзя будет остановить время</div>
          </div>

          <div class="rules">
            <div class="icon"><img src="../images/rocket.png" alt=""></div>
            <div class="text">Олимпиаду можно будет пройти 5 сентября в течении всего дня</div>
          </div>

          <div class="rules">
            <div class="icon"><img src="../images/winner.png" alt=""></div>
            <div class="text">
              <ul>Главный приз получает кто:
                <li> - наберет больше очков - Геников </li>
                <li> - использует меньше всего блоков</li>
                <li> - пройдет олимпиаду быстрее всех</li>
              </ul>
          </div>
          </div>
        </div>
		  
      </div>	    
	  </div>

</body>
</html>