

 
<?php 
include "connect.php";
?>
<div  id='edit_content'></div>
<?php


 
$search_text = $_POST['search_text'];
$select = mysql_query("select emp.ename,salaries.esal,salaries.eid,salaries.smonth,salaries.sdate , salaries.id
from salaries
INNER JOIN emp on emp.eid=salaries.eid and 
 (emp.ename like '%$search_text%' or  salaries.smonth like '%$search_text%' )") or die(mysql_error());
 
 if(mysql_num_rows($select)>0){
  echo '<table class="table">
  <thead>
    <tr style="background:#00ffff;">
      <th scope="col">#</th>
      <th scope="col"> اسم الموظف</th>
      <th scope="col">الشهر</th>
      <th scope="col">  المرتب  </th>
      <th scope="col"> تاريخ الصرف</th>
      <th scope="col">  الخيارات</th>
    </tr>
  </thead>
  <tbody>';
  $counter = 0;
  while($rows = mysql_fetch_array($select)){
      $counter++;
  echo '
  <tr>
  <td style="background:#008080;color:white;"scope="row">'.$counter.'</td>
  <td style="background:#e87400;color:white;" id="name_'.$rows["id"].'">'.$rows['ename'].'</td>
  <td style="background:#008080; color:white;" >'.$rows['smonth'].'</td>
  <td style="background:#800080;color:white;" >'.$rows['esal'].'</td>
  <td style="background:#dd4800;color:white;" >'.$rows['sdate'].'</td>
  <td style="background:#000071;color:white;" >
  <span  class="btn btn-success" style="width:48%;" onmousedown="edit_sal('.$rows["id"].')">تعديل</span>  
   ';?>
  <span class="btn btn-danger" style="width:48%;" 	
  onmousedown='delete_(<?php echo $rows["id"];?>,"delete.php","show_all_sal.php","المرتب","عرض المرتبات","salaries","id")'>حذف
  
    <?php
    echo '
  
</td>
 
</tr>
';

}
echo '  </tbody>
</table>';
}else{
    echo "<span class = 'text text-danger'>لا توجد   ببيانات</span>";
}

?>