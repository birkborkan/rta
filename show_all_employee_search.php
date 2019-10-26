<?php include "connect.php";

 $name = $_POST['search_text'];
    if($name){  
      
$q = mysql_query("select * from `emp` where `ename` like '%$name%' 
or ejob like '%$name%' or esal like '%$name%' or ephone like '%$name%'") or die(mysql_error());
                    if(mysql_num_rows($q) > 0) {
                    

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
                        <a href='# ' onclick='return false;' onmousedown='edit_employee(".$row['eid'].")'><input style='background:#70e670;
                        border:1px solid white ;color:#3d3df2;' class='btn btn-primary btn-user btn-block'   value='تعديل'></a>   
                          
                        <input style='background:#f57373; border:1px solid white ;color:#3d3df2;'   class='btn btn-primary btn-user btn-block'   onclick='del_data(".$row['eid'].")' alt='حذف الفاتورة' name='delete' value='حذف'>	
                        </td> 
                        </tr>
                        ";   
                        }    
                         
                   ?>
                   
                   
                   
                  </tbody>
                </table>
                </div>
                <?php 
                    }else{
                echo" لا توجد بيانات";
                    }
                  }else{

                    $q = mysql_query("select * from `emp` ") or die(mysql_error());
                    if(mysql_num_rows($q) > 0) {
                    

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
                        <a href='#'  onclick='return false;' onmousedown='edit_employee(".$row['eid'].")'><input style='background:#70e670;color:#3d3df2;' class='btn btn-primary btn-user btn-block'   value='تعديل'></a>   
                          
                        <input style='background:#f57373;color:#3d3df2;'   class='btn btn-primary btn-user btn-block'   onclick='del_data(".$row['eid'].")' alt='حذف الفاتورة' name='delete' value='حذف'>	
                        </td> 
                        </tr>
                        ";   
                        }    
                         
                   ?>
                   
                   
                   
                  </tbody>
                </table>
                </div>
                <?php 
                    }else{
                echo"<p class='add'><script> document.write(' لا توجد بيانات') </script></p>";
                    }
                  }
                  ?>