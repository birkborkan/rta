<?php
include("check_login.php");
?>
<!doctype html>
<html>
<head>
	<title></title>
	
<meta charset="utf-8"> 

<link rel="stylesheet" type="text/css" href="css/insert_store.css">
</head>
<body>
<?php
   
include"connect.php";
    $e_id=intval($_GET['id']);
  $e_name=$_POST['ename'];
  $e_phone=$_POST['ephone'];
  $e_job=$_POST['ejob'];
  $e_sal=$_POST['esal'];
  $e_date=$_POST['ehdate'];
?>	
 <details>  <summary><span class="sam">ادخال جديد</span></summary>
<form class="inputform" action="employees_insert.php" method="POST" >
	<fieldset style="width:65%">
		<legend>اضافة  موظف</legend>
        اسم الموظف :<input class="text" type="text" name="ename"  required >
        الهاتف:<input class="text" type="text" name="ephone" required ><br>
        الوظيفة:<input class="text" type="text" name="ejob"  >
        الراتب:<input class="text" type="text" name="esal" value="0"  ><br> 
     تاريخ التعيين  :<input type="date" name="ehdate"   >
<input type="submit" name="insert" value="اصافة">
<input type="submit" name="update" value="تحديث">

<input type="reset" value="الغاء">

<input type="hidden" name="add" value="new">

</fieldset>
</form>
    </details>  
    
    <?php

    if(isset($_POST['insert']))
    { 
        $per=intval($_SESSION['seper']);
        if($per!=1) {
         echo " <p style='color:red ; text-align: center;font-size:20px'>
                               ليس لديك صلاحية الاضافة </p> ";
        }
        else
        {
        $insert=mysql_query("insert into emp
            (ename,ephone,ejob,esal,ehdate)
            values
         ('$e_name','$e_phone','$e_job',$e_sal,'$e_date')",$conn) or die("خطا في ادخال")
                    ;
            echo"<p class='add'><script> document.write(' تم اضافة بنجاح') </script></p>";
        }

     }
    /*
    
              if (isset($insert))
                        {
                             echo"<p class='add'><script> document.write(' تم اضافة بنجاح') </script></p>";
                        }
    */
 


   
$q=mysql_query(" select * from emp order by eid desc");
if (mysql_num_rows($q)==0) {
 echo"<p class='add'><script> document.write(' لا توجد بيانات') </script></p>";
}
else
{  ?>
<center>
<table class="table"  cellpadding="10" cellspacing="0">
  <tr class="title2">
        <td>الرقم</td>
           <td>الاسم</td>
           <td>الهاتف </td>
              <td>الوظيفة</td>
                 <td>الراتب</td>
                   <td>تاريخ التعين</td>
                         <td >الخيارات</td>

  </tr>
    
    <?php   //<img src='images/delete.jpg' width='8%' >
while($row=mysql_fetch_array($q))
{//dname,dphone,pname,ptype,pqty,psel,pcost,pbuy,ppro,plos,lfees,ldate1,ldate2
    echo "
<tr>
<td>".$row['eid']."</td>
<td>".$row['ename']."</td>
<td>".$row['ephone']."</td>
<td>".$row['ejob']."</td>
<td>".$row['esal']."</td>
<td>".$row['ehdate']."</td>
<td >
<a href='employees_update.php?do=edit&id=".$row['eid']."'><input class='ed' type='button' value='تعديل'></a>   
 " ; ?>
<input class="del" type="button" onclick="del_data(<?php echo $row['eid']; ?>)" alt="حذف الفاتورة" name="delete" value="حذف">	
</td> 
</tr>
	<?php
}   echo"</table>";
}  
   
    
    mysql_close($conn);
    ?>
   <script type="text/javascript">
	var per=<?php echo $_SESSION['seper'] ?>;
	function del_data(delid)
		{ if(per==1){
		if(confirm("هل متاكد من حذف السجل"))
			{
				window.location.href='employees_delete.php?del_id='+delid+'';
				return true;
			}
            }
         else{
             alert("ليس لديك صلاحية الحذف");
         }
			
		}
	</script>		
</body>
</html>
