<?php
 include "connect.php";
   
 $borsa=$_POST['borsa'];
 $miss=$_POST['miss'];
 $e_id=$_POST['eid'];
 $stor=$_POST['stor'];
 
 
if($borsa){
    
    if($stor == 0){   
/*        $v_item=mysql_query("select * from store where sname like '$p_name'");
        $sres=mysql_fetch_array($v_item);
      $s_type=$sres['stype'];
      $t_cost=$b_cost+$d_cost+$l_cost+$mani;*/
      $select_imp=mysql_query(" select * from store_imp where eid = $e_id ");
      $improw=mysql_fetch_array($select_imp);
      $o_date=date('y-m-d');
      $s_id=$improw['sid'];
      $p_qty=$improw['pqty'] - $miss;
      $p_cost=$improw['pcost'];  // total cost
      $p_buy=$improw['pbuy']; // bay cost
      
      $v_item=mysql_query("select sprice from store where sno = '$s_id'");
      $pres=mysql_fetch_array($v_item);
      $s_price=$pres['sprice'];
      $p_sel=$p_qty * $s_price;
     //echo "sel:".$p_sel."bay:".$b_cost."cost".$t_cost;
      $p_pro=max(($p_sel-($p_cost+$p_buy+$borsa)),0);
      $p_los=max((($p_buy+$p_cost+$borsa)-$p_sel),0);
      //psel,ppro,plos
    $update = mysql_query("update store_imp set 
      borsa='$borsa',
      miss='$miss',
      psel='$p_sel',
      ppro='$p_pro',
      plos='$p_los'
    where eid = '$e_id'") or die(mysql_error()) ;
    if($update){
        echo "done";
    }
    } 
    else {
      echo "no";  
    }
 
     
 }
   
?>