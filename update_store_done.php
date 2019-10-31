<?php
include "connect.php";
$e_id=$_POST['eid'];
$s_id=$_POST['sid'];
/*
<td>".$row['dname']."</td>
                        <td>".$row['pname']."</td>
                        <td>".$row['ptype']."</td>*/
 
if($e_id)
{
    $select_imp = mysql_query("select * from store_imp where eid = '$e_id'");
    $row_imp=mysql_fetch_array($select_imp);
    $p_name=$row_imp['pname'];
    $p_type=$row_imp['ptype'];
    $p_qty=$row_imp['pqty'];
    if(mysql_num_rows($select_imp)>0){
        $s_date=date('y-m-d');
        $store_update= mysql_query("update store  set
       
        sqty= sqty + $p_qty
       
     where sno=$s_id" )or die(mysql_error());  //"1لم يتم تحديث"
                if (isset($store_update)) {
                    $import_update= mysql_query("update store_imp  
                    set stor=1
                 where eid=$e_id" )or die("2لم يتم تحديث");
            //history start.................................................
            $s_date=date('y-m-d h:i:sa');
            $s_q=mysql_query(" select * from store where sno like '$s_id'");
            $srow=mysql_fetch_array($s_q);
                  $s_type=$srow['stype'];
                  $old_qty=$srow['sqty'];
                  $s_name=$srow['sname'];
                  $new_qty = $p_qty;
          $insert=mysql_query("insert into history
                        (hpro,hcurqty,hadd,hnew)  values
                        ('$s_name',$old_qty,$new_qty,$new_qty+$old_qty)")
                                or die("خطا في لدخال"); 
              
            //history end.........................................................
                 echo"done";
                
                }
               
    }else{
   
   echo "not";
   
         
        }
}
//<?php echo"value='".$res['sname']."' "
mysql_close($conn);
?>