<<<<<<< HEAD
<?php
include "connect.php";
   
  $e_id=$_POST['eid'];
  if($e_id)
  {  
    $select_exp=mysql_query(" select * from store_exp where eid = $e_id ");
    $exrow=mysql_fetch_array($select_exp);
    $o_date=date('y-m-d');
    $s_id=$exrow['sid'];
    $c_no=$exrow['cno'];
    $d_name=$exrow['dname'];
    $p_name=$exrow['pname'];
    $p_qty=$exrow['pqty'];
    $s_type=$exrow['ptype'];
    $t_cost=$exrow['tcost'];  // total cost
    $b_cost=$exrow['bcost']; // bay cost
    $l_date=$exrow['ldate'];  // load  cost
    $v_item=mysql_query("select sprice from store where sno = '$s_id'");
    $pres=mysql_fetch_array($v_item);
    $s_price=$pres['sprice'];
    $p_sel=$p_qty * $s_price;
    $p_pro=max(($p_sel-$t_cost-$b_cost),0);
    $p_los=max(($b_cost+$t_cost-$p_sel),0);
    
    $insert=mysql_query("insert into store_imp
    (eid,sid,cno,dname,pname,pqty,ptype,pcost,pbuy,psel,ppro,plos,ldate1,ldate2,stor) 
     values
($e_id,$s_id,'$c_no','$d_name','$p_name','$p_qty','$s_type','$t_cost','$b_cost','$p_sel','$p_pro','$p_los','$l_date','$o_date','0')") or die(mysql_error()); 
     $exup= mysql_query("update store_exp  
   set  arrive=1 where eid = $e_id ")or die("لم يتم تحديث البيانات");
   if($insert){
    echo"done";
  } 

    } 

=======
<?php
include "connect.php";
   
  $e_id=$_POST['eid'];
  if($e_id)
  {  
    $select_exp=mysql_query(" select * from store_exp where eid = $e_id ");
    $exrow=mysql_fetch_array($select_exp);
    $o_date=date('y-m-d');
    $s_id=$exrow['sid'];
    $c_no=$exrow['cno'];
    $d_name=$exrow['dname'];
    $p_name=$exrow['pname'];
    $p_qty=$exrow['pqty'];
    $s_type=$exrow['ptype'];
    $t_cost=$exrow['tcost'];
    $b_cost=$exrow['bcost'];
    $l_date=$exrow['ldate'];
    $v_item=mysql_query("select sprice from store where sname like '$p_name'");
    $pres=mysql_fetch_array($v_item);
    $s_price=$pres['sprice'];
    $p_sel=$p_qty*$p_price;
    $p_pro=max(($p_sel-$p_cost-$p_buy),0);
    $p_los=max(($p_cost+$p_buy-$p_sel),0);
    
    $insert=mysql_query("insert into store_imp
    (eid,sid,cno,dname,pname,pqty,ptype,pcost,pbuy,psel,ppro,plos,ldate1,ldate2,stor) 
     values
($e_id,$s_id,'$c_no','$d_name','$p_name','$p_qty','$s_type','$p_cost','$p_buy','$p_sel','$p_pro','$p_los','$l_date','$o_date','0')") or die(mysql_error()); 
     $exup= mysql_query("update store_exp  
   set  arrive=1 where eid = $e_id ")or die("لم يتم تحديث البيانات");
   if($insert){
    echo"done";
  } 

    } 

>>>>>>> d42dc1c73ebf2e72a55ab3654ba0ea2f28550619
?>