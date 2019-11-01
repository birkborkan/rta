<?php
session_start();
include("conn.php");
$username = $_POST['username'];
$password =  $_POST['password'];
 
if(!empty($username) and !empty($password)){



    $select = mysqli_query($connect,"select * from login where username='$username' and password='$password' and status='0'") ;
    if(mysqli_num_rows($select) > 0){
        while ($rows = mysqli_fetch_array($select)){
        $uname = $rows['username'];
        $upass = $rows['password'];
        $id = $rows['id'];
        $name = $rows['name'];
        $login_level = $rows['login_level'];

        } 
        if($uname == $username && $upass == $password){
             if($login_level == "1"){
                $_SESSION['id'] = $id;
                $_SESSION['name'] = $name;
                $_SESSION['username'] = $uname;
                $_SESSION['global_admin'] = "global_admin";
                echo "done_global";
             } elseif($login_level == "2"){
                $_SESSION['id'] = $id;
                $_SESSION['name'] = $name;
                $_SESSION['username'] = $uname;
                $_SESSION['admin'] = "admin";
                echo "done_admin";
             }
         
        }
    }else{
        echo "user_not_found";
    }
}



?>