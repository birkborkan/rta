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
                  <tr>
                       
                       <th>الرقم</th>
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
                        <a href='#'  onclick='return false;' 
                        onmousedown='edit_employee(".$row['eid'].")'><input style='background:#70e670;color:#3d3df2;' class='btn btn-primary btn-user btn-block'   value='تعديل'></a>   
                        "; ?>  
                        <input style='background:#f57373;color:#3d3df2;'  
                         class='btn btn-primary btn-user btn-block'      
                            value='حذف' onmousedown='delete_(<?php echo $row["eid"] ; ?>,"delete_emp.php","show_all_employee.php","الموظف","عرض الموظفين")'/>	
                            
                        </td> 
                        </tr>  
                        <?php  }    
                         
                   ?>
                   
                   
                   
                  </tbody>
                </table>
                </div>
                <?php 
                    }else{
                echo"<p class='add'><script> document.write(' لا توجد بيانات') </script></p>";
                    }
            ?>
            <div>