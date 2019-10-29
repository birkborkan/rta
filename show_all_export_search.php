<?php include "connect.php";

 $name = $_POST['search_text'];
    if($name){  
      
        $q = mysql_query("select * from `store_exp` where `rname` like '%$name%' or cno like '%$name%' or dname like '%$name%' or pname like '%$name%' or ptype like '%$name%' ")or die(mysql_error());
                    if(mysql_num_rows($q) > 0) {
  
  ?>
<table class="table table-bordered" id="dataTable" width="100%" style='font-size:11px;text-align:right;' cellspacing="0">
                  <thead>
                  <tr>
                       <th>#</th>
            <th>المرحل</th>
            <th>ر. العربة </th>
               <th>اسم السائق</th>
                  <th>الوحدة</th>
                    <th>الكمية </th>
                       <th>التصنيف </th>
                         <th>الشراء </th>
                           <th>ترحيل </th>
                            <th>تحميل </th>
                             <th>منفستو </th>
                              <th>التكلفة </th>
                                <th>ت. الشراء </th>
                                 <th>الوصول </th>
                                 <th>ملاحظات </th>
                                 <th style="text-align:center">الخيارات</th>
                     </tr>
                  </thead>
                   <tbody>
                    <?php
                            $serno=0;
                            while($row=mysql_fetch_array($q))
                            {
                              $serno+=1;
                               echo "
                        <tr>
                        <td>".$serno."</td>
                        <td>".$row['rname']."</td>
                        <td>".$row['cno']."</td>
                        <td>".$row['dname']."</td>
                        <td>".$row['pname']."</td>
                        <td>".$row['pqty']."</td>
                        <td>".$row['ptype']."</td>
                        <td>".number_format($row['bcost'])."</td>
                        <td>".number_format($row['dcost'])."</td>
                        <td>".number_format($row['lcost'])."</td>
                        <td>".number_format($row['manifist'])."</td>
                        <td>".number_format($row['tcost'])."</td>
                        <td>".$row['ldate']."</td>
                        <td>".$row['arrive']."</td>
                        <td>".$row['comm']."</td>
                        <td >
                        <span  class='btn btn-success' style='width:48%;' onmousedown='edit_export(".$row['eid'].")'>تعديل</span>  
                        "; ?> 
                        <span class='btn btn-danger' style='width:48%;'  onmousedown='delete_(<?php echo $row["eid"] ; ?>,"delete.php","show_all_export.php","صادر","عرض الصادر","store_exp","eid")'>	
                            حذف
                         </span>
                        </td> 
                        </tr>
                          
                       <?php }    
                         
                   ?> 
                  </tbody>
                </table>
                </div>
                <?php 
                    }else{
                echo" لا توجد بيانات";
                    }
                  }else{

                    $q=mysql_query(" select * from store_exp order by eid desc");
                    if (mysql_num_rows($q)>0) {
                    

    ?>
<table class="table table-bordered" id="dataTable" width="100%" style='font-size:11px;text-align:right;' cellspacing="0">
                  <thead>
                  <tr>
                       <th>#</th>
            <th>المرحل</th>
            <th>ر. العربة </th>
               <th>اسم السائق</th>
                  <th>الوحدة</th>
                    <th>الكمية </th>
                       <th>التصنيف </th>
                         <th>الشراء </th>
                           <th>ترحيل </th>
                            <th>تحميل </th>
                             <th>منفستو </th>
                              <th>التكلفة </th>
                                <th>ت. الشراء </th>
                                 <th>الوصول </th>
                                 <th>ملاحظات </th>
                                 <th style="text-align:center">الخيارات</th>
                     </tr>
                  </thead>
                   <tbody>
                    <?php
                      $serno=0;
                      while($row=mysql_fetch_array($q))
                      {
                        $serno+=1;
                            echo "
                        <tr>
                        <td>".$serno."</td>
                        <td>".$row['rname']."</td>
                        <td>".$row['cno']."</td>
                        <td>".$row['dname']."</td>
                        <td>".$row['pname']."</td>
                        <td>".$row['pqty']."</td>
                        <td>".$row['ptype']."</td>
                        <td>".number_format($row['bcost'])."</td>
                        <td>".number_format($row['dcost'])."</td>
                        <td>".number_format($row['lcost'])."</td>
                        <td>".number_format($row['manifist'])."</td>
                        <td>".number_format($row['tcost'])."</td>
                        <td>".$row['ldate']."</td>
                        <td>".$row['arrive']."</td>
                        <td>".$row['comm']."</td>
                        <td >
                        <span  class='btn btn-success' style='width:48%;' onmousedown='edit_export(".$row['eid'].")'>تعديل</span>  
                        "; ?> 
                        <span class='btn btn-danger' style='width:48%;'  onmousedown='delete_(<?php echo $row["eid"] ; ?>,"delete.php","show_all_export.php","صادر","عرض الصادر","store_exp","eid")'>	
                            حذف
                         </span>
                        </td> 
                        </tr>
                          
                       <?php }    
                         
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