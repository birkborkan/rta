<?php
include "connect.php";
$e_id=$_POST['eid'];
$s_id=$_POST['sid'];
/*
<td>".$row['dname']."</td>
                        <td>".$row['pname']."</td>
                        <td>".$row['ptype']."</td>*/
 
if($e_id)
{   //hid sid eid cno dname pname oldqty pqty newqty ldate1 ldate2 hdate  
    $select_imp = mysql_query("select * from store_imp where eid = '$e_id'");
    $row_imp=mysql_fetch_array($select_imp);
    
    $s_id=$row_imp['sid'];
    $e_id=$row_imp['eid'];
    $c_no=$row_imp['cno'];
    $d_name=$row_imp['dname'];
    $p_name=$row_imp['pname'];
    $p_type=$row_imp['ptype'];
    $p_qty=$row_imp['pqty'];
    $date1=$row_imp['ldate1'];
    $date2=$row_imp['ldate2'];
$select_sqty = mysql_query("select sqty from store where sno = '$s_id'");
$sqty_old = mysql_fetch_array($select_sqty);

$sqty_new = $sqty_old['sqty'] + $p_qty;
 
    if(mysql_num_rows($select_imp)>0){
        $s_date=date('y-m-d');
        $store_update= mysql_query("update store  set
        sqty= '$sqty_new'
        where sno = '$s_id' ")or die(mysql_error());   
                if ($store_update) {
                    $import_update= mysql_query("update store_imp  
                    set stor=1
                 where eid = '$e_id'" )or die(mysql_error());
            //history start.................................................
      
            $s_q=mysql_query(" select * from store where sno = '$s_id'") ;
                
                  $srow=mysql_fetch_array($s_q);
                 
                  /*  hid sid eid cno dname pname ptype pqty ldate1 ldate2 oldqty newqty  hdate
                  $s_type=$srow['stype'];
                  $old_qty=$srow['sqty'];
                  $s_name=$srow['sname'];
                  $new_qty = $p_qty;*/
                  $s_id=$row_imp['sid'];
                  $e_id=$row_imp['eid'];
                  $c_no=$row_imp['cno'];
                  $d_name=$row_imp['dname'];
                  $p_name=$row_imp['pname'];
                  $p_type=$row_imp['ptype'];
                  $p_qty=$row_imp['pqty'];
                  $date1=$row_imp['ldate1'];
                  $date2=$row_imp['ldate2'];
                  $old_qty=$srow['sqty']; 
                  $new_qty=$old_qty + $p_qty;
          $insert=mysql_query("insert into history
                        (sid,eid,cno,dname,pname,ptype,pqty,ldate1,ldate2,oldqty,newqty)  values
                        ('$sid','$eid','$c_no','$d_name','$p_name','$p_type','$p_qty','$date1','$date2','$old_qty','$new_qty')")
                                or die(mysql_error());  
              
            //history end.........................................................
                 echo "done";
                
                }
               
    }else{
   
   echo "not";
   
         
        }
}
//<?php echo"value='".$res['sname']."' "
mysql_close($conn);
?>