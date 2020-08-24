<?php 

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();

$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'itgenby@gmail.com';
$mail->Password = '1Itgeneration1';
$mail->SMTPSecure = 'tls';
$mail->SMTPAutoTLS = false;
$mail->SMTPKeepAlive = true;   
$mail->Mailer = “smtp”;
$mail->Port = 587;

$mail->CharSet = 'UTF-8';

$mail->From = 'itgenby@gmail.com';
$mail->FromName = 'Itgenio';
$mail->addAddress($user->email);

$mail->IsHTML(true);

$mail->Subject = 'Олимпиада по программированию';
$mail->Body = '<h2>Здравствуй, '.$user->name.'</h2>';
$mail->Body .= '<p>Для участия в олимпиаде перейди по этой ссылке:</p>';
$mail->Body .= '<a href="http://quest.itgen.io/?u='.$user->address.'">quest.itgen.io/?u='.$user->address.'</a>';

$mail->AltBody = 'Здравствуй, '.$user->name;
$mail->AltBody .= 'Для участия в олимпиаде перейди по этой ссылке:';
$mail->AltBody .= $user->address;

if($mail->send()) {
    header ('Refresh:0; url="\?reg='.$user->id);
}else{
    echo 'Что-то пошло не так. Письмо не может быть отправлено';
    echo $mail->ErrorInfo;
}

?>