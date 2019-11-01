<?php include "connect.php";?>
<div class="table-responsive">
<input type='text' class="form-control fa fa-search"placeholder='search' id='search_text' onkeydown = "search('show_all_employee_search.php','عرض الموظفين');" onkeyup = "search('show_all_employee_search.php','عرض الموظفين');"/>
<div  id='edit_content'></div>
<div  id='search_id'></div>
<div id='search_content'> 
<?php

$q=mysql_query(" select * from emp order by eid desc");
                    if (mysql_num_rows($q)>0) {
                    

    ?>
    
    
                <table class="table table-bordered" id="dataTable" width="100%" style='font-size:11px;text-align:right;' cellspacing="0">
                  <thead>
                  <tr style='background:#4f004f;color:white;'>
                       
                       <th>#</th>
            <th>الاسم</th>
            <th>الهاتف </th>
               <th>الوظيفة</th>
                  <th>الراتب</th>
                    <th>تاريخ التعين</th>
                          <th >الخيارات</th>
                     </tr>
                  </thead>
                   <tbody>
                    <?php
                   
                        $srno= 0;
                        while($row=mysql_fetch_array($q))
                        {//dname,dphone,pname,ptype,pqty,psel,pcost,pbuy,ppro,plos,lfees,ldate1,ldate2
                            $srno++;
                            echo "
                        <tr>
                        <td style='background:forestgreen;color:white;'>".$srno."</td>
                        <td style='background:#4f004f;color:white;'>".$row['ename']."</td>
                        <td style='background:#f1f38b;color:red;'>".$row['ephone']."</td>
                        <td style='background:#aa5555;color:white;'>".$row['ejob']."</td>
                        <td style='background:#ffff62;color:black;'>".$row['esal']."</td>
                        <td style='background: #54a9a9;color:white;'>".$row['ehdate']."</td>
                        <td style='background:#ffff91;color:white;' >
                        <span onmousedown='edit_employee(".$row['eid'].")'
                        class='btn btn-success' style='width:48%;'>تعديل </span>   
                        "; ?>  
                        <span   class='btn btn-danger' style='width:48%;'
                             
                            onmousedown='delete_(<?php echo $row["eid"] ; ?>,"delete.php","show_all_employee.php","الموظف","عرض الموظفين","emp","eid")'>حذف</span>	
                            
                        </td> 
                        </tr>  
                        <?php   
                         }  ?>
               </tbody>
                </table>
                </div>
                <?php 
                    }else{
                echo"<p class='add'><script> document.write(' لا توجد بيانات') </script></p>";
                    }
            ?>
            <div>