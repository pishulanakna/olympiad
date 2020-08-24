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

$name = $_POST['name'];
$age = $_POST['age'];
$parent = $_POST['parent'];
$phone = $_POST['phone'];
$email = $_POST['email'];

//обрабатываем логин и пароль чтобы привести их к безопасному виду. 
$name = stripslashes($name);
$name = htmlspecialchars($name);
$parent = stripslashes($parent);
$parent = htmlspecialchars($parent);
$phone = stripslashes($phone);
$phone = htmlspecialchars($phone);
$email = stripslashes($email);
$email = htmlspecialchars($email);
//удаляем лишние пробелы
$name	 = trim($name);
$parent = trim($parent);
$phone = trim($phone);
$email = trim($email);

//генерируем персональный код для ссылки, пока он не станет уникальным

$permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
$address = substr(str_shuffle($permitted_chars), 0, 16);
$user  = R::findOne( 'users', 'adress = ?', [$adress]);
while (isset($user)) 
{
	$adress = substr(str_shuffle($permitted_chars), 0, 16);
	$user  = R::findOne( 'users', 'adress = ?', [$address]);
}

//помещаем данные в новую запись
$user = R::dispense('users');
$user->name = $name;
$user->age = $age;
$user->parent = $parent;
$user->phone = $phone;
$user->email = $email;
$user->address = $address;
// Сохраняем объект в БД
R::store($user);
//Проверим успешность регистрации 
$user  = R::findOne( 'users', 'address = ?', [$address]);
if (!isset($user))
{
		//если нового пользователя нет в БД, значит регистрация не прошла
		echo 'Что-то пошло не так';
		exit;
} else
//Если скрипт сумел выполниться до этого места, то регистрация прошли успешно.
require 'modules/mail.php';

?>