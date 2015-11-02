<?php

$servername = "localhost";
$username = "sammy";
$password = "sammy";
$db = 'judges';

/*
$username = "xjcugjji_judges";
$password = "Cyberhopper123";
$db = 'xjcugjji_judges';
*/
// Create connection
$link = new mysqli($servername, $username, $password,$db);

// Check connection
if ($link->connect_error) {
die("Connection failed: " . $link->connect_error);
}
//echo "Connected successfully";