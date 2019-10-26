<?php
include "connect.php";
$delete_id = $_POST['delete_id'];

if($delete_id){

    $del = mysql_query("delete from emp where eid = '$delete_id'");
    if($del){
        echo "done";
    }
}

?>