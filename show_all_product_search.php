<?php include "connect.php";

 $name = $_POST['search_text'];
    if($name){  
      
$q = mysql_query("select * from `store` where `sname` like '%$name%' 
or stype like '%$name%' ") or die(mysql_error());
                    if(mysql_num_rows($q) > 0) {
                    

    ?>
    
    <table class="table table-bordered" id="dataTable" width="100%" style='font-size:11px;text-align:right;' cellspacing="0">
                  <thead>
                  <tr>
                       
                       <th>#</th>
                      
            <th>المنتج</th>
            <th>التصنيف </th>
               <th>السعر</th>
                    <th>تاريخ الاضافة</th>
                          <th >الخيارات</th>
                     </tr>
                  </thead>
                   <tbody>
                    <?php
                   $srno=mysql_num_rows($q);
                        
                        while($row=mysql_fetch_array($q))
                        {//dname,dphone,pname,ptype,pqty,psel,pcost,pbuy,ppro,plos,lfees,ldate1,ldate2
                            
                            echo "
                        <tr>
                        <td>".$srno."</td>
                        
                        <td>".$row['sname']."</td>
                        <td>".$row['stype']."</td>
                        <td>".$row['sprice']."</td>
                        <td>".$row['sdate']."</td>
                        <td >
                        <a href='#'  onclick='return false;' 
                        onmousedown='edit_employee(".$row['eid'].")'><input style='background:#70e670;color:#3d3df2;' class='btn btn-primary btn-user btn-block'   value='تعديل'></a>   
                          
                        <input style='background:#f57373;color:#3d3df2;'  
                         class='btn btn-primary btn-user btn-block'      onclick='return false;' 
                         onmousedown='delete(".$row['eid'].")'   value='حذف'>	
                        </td> 
                        </tr>
                        ";  $srno-=1;  
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

                    $q = mysql_query("select * from `store` ") or die(mysql_error());
                    if(mysql_num_rows($q) > 0) {
                    

    ?>
    
    <table class="table table-bordered" id="dataTable" width="100%" style='font-size:11px;text-align:right;' cellspacing="0">
                  <thead>
                  <tr>
                       
                       <th>#</th>
                      
            <th>المنتج</th>
            <th>التصنيف </th>
               <th>السعر</th>
                    <th>تاريخ الاضافة</th>
                          <th >الخيارات</th>
                     </tr>
                  </thead>
                   <tbody>
                    <?php
                   $srno=mysql_num_rows($q);
                        
                        while($row=mysql_fetch_array($q))
                        {//dname,dphone,pname,ptype,pqty,psel,pcost,pbuy,ppro,plos,lfees,ldate1,ldate2
                            
                            echo "
                        <tr>
                        <td>".$srno."</td>
                        
                        <td>".$row['sname']."</td>
                        <td>".$row['stype']."</td>
                        <td>".$row['sprice']."</td>
                        <td>".$row['sdate']."</td>
                        <td >
                        <a href='#'  onclick='return false;' 
                        onmousedown='edit_employee(".$row['eid'].")'><input style='background:#70e670;color:#3d3df2;' class='btn btn-primary btn-user btn-block'   value='تعديل'></a>   
                          
                        <input style='background:#f57373;color:#3d3df2;'  
                         class='btn btn-primary btn-user btn-block'      onclick='return false;' 
                         onmousedown='delete_emp(".$row['eid'].")'   value='حذف'>	
                        </td> 
                        </tr>
                        ";  $srno-=1;  
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