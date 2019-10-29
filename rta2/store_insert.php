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
$s_name=$_POST['name'];
$s_type=$_POST['type'];
$s_qty=$_POST['qty'];
$s_price=$_POST['price'];
$s_date=$_POST['date'];
if(isset($_POST['add']) and $_POST['add']=='new')
{
    $per=intval($_SESSION['seper']);
    if($per!=1) {
     echo " <p style='color:red ; text-align: center;font-size:20px'>
                           ليس لديك صلاحية الاضافة </p> ";
    }
    else
        {
       $s_date=date('y-m-d');
    $insert=mysql_query("insert into store
        (sname,stype,sprice,sdate) 
        values
        ('$s_name','$s_type',$s_price,'$s_date')",$conn)
                 or die("erroe in insert");
            if (isset($insert)) {
                 echo"<p class='add'><script> document.write(' تم اضافة بنجاح') </script></p>";

            }
        }

}
//<?php echo"value='".$res['sname']."' "
mysql_close($conn);
?>	
<form class="inputform" action="store_insert.php" method="POST" >
	<fieldset>
		<legend>اضافة اصناف جديدة</legend>
المنتح:<input type="text" name="name" required placeholder="ادخل اسم المنتج" autocomplate autofocus>
 النوع:
 <select name="type">
 	<option value="مدعوم">مدعوم</option>
 		<option value="تجاري">تجاري</option>
 	
 </select><br>
السعر:<input type="text" name="price"  min='1'>

<input type="submit" value="اضافة">
<input type="reset" value="الغاء">

<input type="hidden" name="add" value="new">

</fieldset>
</form>
   <p class="add"><a href="store_update.php"><script> document.write("المنتجات") </script></a>  

</body>
</html>
