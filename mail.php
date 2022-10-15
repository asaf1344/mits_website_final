<?php
//get data from form  

//$name = $_POST['name'];
//$email= $_POST['email'];
//$message= $_POST['message'];
//$to = "asaftirur@gmail.com";
//$subject = "Mail From website";
//$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
//$headers = "From: asaftirur@gmail.com" . "\r\n" .
//"CC: somebodyelse@example.com";
//if($email!=NULL){
 //   mail($to,$subject,$txt,$headers);
//}
//redirect
//header("Location:thankyou.html");

<?php
$errors = [];
if (!empty($_POST)) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];
   if (empty($name)) {
       $errors[] = 'Name is empty';
   }
   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
   }
   if (empty($message)) {
       $errors[] = 'Message is empty';
   }
}

?>