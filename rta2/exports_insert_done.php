<?php
include"connect.php";
  $r_name=$_GET['rname'];
  $c_no=$_GET['cno'];
  $d_name=$_GET['dname'];
  $p_name=$_GET['pname'];
  $p_qty=$_GET['pqty'];
  $p_type=$_GET['ptype'];
  $b_cost=$_GET['bcost'];
  $d_cost=$_GET['dcost'];
  $l_cost=$_GET['lcost'];
  $mani=$_GET['manifist'];
  $l_date=$_GET['ldate'];
  $comm=$_GET['comm'];
  $o_date=date('y-m-d');   
      
if(isset($r_name))
{       
         $v_item=mysql_query("select stype from store where sname like '$p_name'");
         $res=mysql_fetch_array($v_item);
     $stype=$res['stype'];
     $t_cost=$b_cost+$d_cost+$l_cost+$mani;
         $insert=mysql_query("insert into store_exp
        (rname,cno,dname,pname,pqty,ptype,bcost,dcost,lcost,manifist,tcost,ldate,arrive,comm) 
         values 
            ('$r_name','$c_no','$d_name','$p_name',$p_qty,'$stype',$b_cost,$d_cost,$l_cost,$mani,$t_cost,'$l_date',0,'$comm')",$conn) or die("خطا في ادخال")
                ;
    if($insert){
        echo "insert_is_done";
    }
     }
    
  