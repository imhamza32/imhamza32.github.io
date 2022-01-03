<?php
// the message
$msg = "testing email from portfolio";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("hamzamunib32@gmail.com","Portfolio Message",$msg);
?>