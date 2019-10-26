<?php
include("check_login.php");
?>
<!doctype html>
<html>
<head>
	<title></title>
	
<meta charset="utf-8"> 


<link rel="stylesheet" type="text/css" href="css/insert_store.css">
    <script type="text/javascript">
    var aa;

      function printDiv(printPage) {
     var printContents = document.getElementById(printPage).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}

    </script>
</head>
<body dir='rtl'>


<?php
   
include"connect.php";
    $d_id=intval($_GET['id']);
  $r_name=$_POST['rname'];
  $c_no=$_POST['cno'];
  $d_name=$_POST['dname'];
  $p_name=$_POST['pname'];
  $p_qty=$_POST['pqty'];
  $p_type=$_POST['ptype'];
  $b_cost=$_POST['bcost'];
  $d_cost=$_POST['dcost'];
  $l_cost=$_POST['lcost'];
  $mani=$_POST['manifist'];
  $l_date=$_POST['ldate'];
  $comm=$_POST['comm'];


    $o_date=date('y-m-d');
   $items=mysql_query("select sno,sname,stype from store order by sno");
   
    
?>	
   <center> 
<form class="inputform" >
	   
           <div onclick="select_exp()"><img title="عرض المبيعات" src="images/data.jfif" /></div>
		<legend>ادخال بيانات جديدة</legend>
     
        <table class="table table-sm"  border='0' style='text-align:right; width:auto;color:black;font-size:16px;border:white;margin-top:0px'>
           <tr>
              <td> المرحل</td>
              <td>  <input class="text" type="text" id="rname"  required>  </td>
                             <td> رقم العربة</td>
              <td>  <input class="text" type="text" id="cno" required > </td>
            </tr>    
            
            <tr>
              <td> اسم السائق </td>
              <td> <input class="text" type="text" id="dname"  required ></td>
                             <td> الوحدة </td>
              <td> <select id="pname" >
 <?php while($srow=mysql_fetch_array($items)):; ?>	
     <option value="<?php echo $srow['sname'];?>" ><?php echo $srow['sname']; $stype=$srow['stype'];?></option>
     
    <?php endwhile ; 
     ?>
 </select></td>
            </tr>   
           
           
        <tr>
              <td> الكمية</td>
              <td> <input type="text" id="pqty" value="0" min="1"></td>
              <td> الشراء</td>
              <td> <input type="text" id="bcost" value="0"  min='1'   ></td>
            </tr>  
            
            <tr>
              <td> تكلفة ترحيل</td>
              <td> <input type="text" id="dcost" value="0"  min='1'></td>
                  <td> تكلفة تحميل</td>
              <td> <input type="text" id="lcost" value="0"  min='1'   ></td>
            </tr>    
            <tr>
                <td> منفستو</td>
              <td> <input type="text" id="manifist" value="0"  min='1'   ></td>
              <td> تاريخ الشحن</td>
              <td><input type="date" id="ldate" ></td>
            </tr> 
            <tr>
              <td> ملاحظات</td>
              <td><textarea rows="1" cols="30" id="comm" ></textarea></td>
                            <td colspan='2'>  
                
                <input type="submit" onclick="return false;" onmousedown="new_insert()" name="insert" value="اصافة">
<input type="reset" value="الغاء">
<input type="hidden" name="add" value="new">
                </td>
            </tr>   
          
 

              </table>
        
 
</form>
</center>
</body>
</html>
