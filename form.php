<!-- FIrst, make sure you: -->
<!-- 1. sudo apt-get install libphp-phpmailer -->
<!-- 2. sudo apt-get install sendmail-bin -->

<?php

      ini_set('display_errors', 1);
      ini_set('display_startup_errors', 1);
      error_reporting(E_ALL);

      $_POST['name'] = "Merilee";
      $_POST['email'] = "eelirem@gmail.com";
      $body = "Hello!";
      $mySiteAddress = 'merilee@merileewheelock.com';
      $siteName = 'www.merileewheelock.com';

      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $body = $_POST['message'];
      $mail->AddReplyTo($_POST['email'],$_POST['name']);
      $mail->SetFrom($mySiteAddress);
      $mail->AddAddress("merilee.wheelock@gmail.com", "Merilee Wheelock");
      $mail->Subject    = "Message from ".$siteName;
      $mail->MsgHTML("Message From: " . $_POST['name'] . "  | Email: " . $_POST['email'] . " | "  . $body);

      if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      } else {
      echo "Message sent!";
      }
      exit;
      header('location: /#contact');

?>