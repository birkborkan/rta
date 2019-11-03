<<<<<<< HEAD

/// thiis login function
$(document).ready(function(){
 $('.hide_show').click(function(){
  $("#down_from_top").slideUp();
  $(".drop_value").html(" ");

  
 
 });
 
 
  
 /*
 $(".btn1").click(function(){
  ;
});
 ** $(".btn2").click(function(){
    $("p").slideDown();
     });
    */
 

   (function pulse(back) {
    $('#seventyfive').animate(
        {
            width: (back) ? $('#seventyfive').width() +3 : $('#seventyfive').width() -3            
        }, 700);
    $('#seventyfive').animate(
        {          
            'font-size': (back) ? '100px' : '140px',
            opacity: (back) ? 1 : 0.2
        }, 700, function(){pulse(!back)});
    })(false);
});

 
function login() {
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          if(this.responseText === "done_global"){
             window.location.assign('/un');
          }else if(this.responseText === "done_admin"){
             alert("you are jest admin");
          }
          else if(this.responseText === "user_not_found"){
             
            $(document).ready(function(){
        
              $(".drop_value").html("<span style='color:red;'>  اسم المستخدم او كلمة المرور خطأ </span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
           
          
           });
          }
      }
    }
    var username2 = document.getElementById("username").value
    var password2 = document.getElementById("password").value
    xhttp.open("POST", "login_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("username="+username2+"&password="+password2);
  }

// this is give for giving the pages to the div!!! give_pages give_pages give_pages give_pages give_pages give_pages give_pages
  function give_pages(url,titlee) {
   if(url === "show_all_export.php"  || url ===  "show_all_waiting.php" || url ===  "show_all_import.php" || url ===  "show_all_history.php"){

    $(document).ready(function(){
        
      $(".col-lg-3").hide();
      $("#col_large").addClass("col-lg-12");
      $("#col_large").addClass("col-xl-12");
      $("#accordionSidebar").addClass("toggled");
   
    
   });
   }
   else{
    $(".col-lg-3").show();
    $("#col_large").removeClass("col-lg-12");
    $("#col_large").removeClass("col-xl-12");
    $("#accordionSidebar").removeClass("toggled");
    
   }
   if(url === "show_all_product.php"){
    $("#col_large").addClass("bg_color_lightblue");
    $(".card-body").addClass("bg_color_lightblue");
   
    
   }else{
    $("#col_large").removeClass("bg_color_lightblue");
    $(".card-body").removeClass("bg_color_lightblue");
   
    
   }
   if(url === "show_all_employee.php"){
    $("#col_large").addClass("bg_color_likebrown");
    $(".card-body").addClass("bg_color_likebrown");
   
   }else{
    $("#col_large").removeClass("bg_color_likebrown");
    $(".card-body").removeClass("bg_color_likebrown");
   
    
   } 
   if(url === "show_all_sal.php"){
    $("#col_large").addClass("bg_color_darkblue");
    $(".card-body").addClass("bg_color_darkblue");
   
   }else{
    $("#col_large").removeClass("bg_color_darkblue");
    $(".card-body").removeClass("bg_color_darkblue");
   
    
   }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('titley').innerHTML = titlee;
        document.getElementById('contenty').innerHTML = this.responseText;
        $(document).ready(function(){
        
          $(".drop_value2").html(" ");
         $("#down_from_top2").fadeIn();
        
       });
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST",url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send();
  }
  //add new faculty 
  
 
  
  //add new product
  function add_pro() {
    var pro_name = document.getElementById("pro_name").value;
    var pro_type = document.getElementById("pro_type").value;
    var pro_price = document.getElementById("pro_price").value;
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
           if(this.responseText === "done"){
            document.getElementById('titley').innerHTML ="إضافة منتج  جديد";
            $(document).ready(function(){
  
              $(".drop_value").html("<span style='color:blue;'>  تم اضافة المنتج "+pro_name+"  بنجاح</span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
           
          
           });
           }else if(this.responseText === "found"){
            document.getElementById('titley').innerHTML ="إضافة منتج  جديد";
            $(document).ready(function(){
  
              $(".drop_value").html("<span style='color:red;'> المنتج "+pro_name+" موجود مسبقآ</span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
          
        
              $(".drop_value2").html(" ");
             $("#down_from_top2").fadeIn();
            
      
          
           });
           }
      
       
    }
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
    }
  }
if(pro_name === "" || pro_price === ""){

  document.getElementById('titley').innerHTML ="إضافة منتج  جديد";
    
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>  رجاء ملئ كل الحقول  </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
}else{
    xhttp.open("POST","store_insert_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("pro_name="+pro_name+"&pro_type="+pro_type+"&pro_price="+pro_price);

  }
  } 
   
  
  //add new  saderat
  function add_exp() {
    var rname=document.getElementById("rname").value; 
    var cno=document.getElementById("cno").value; 
    var dname=document.getElementById("dname").value; 
    var pname=document.getElementById("pname").value; 
    var pqty=document.getElementById("pqty").value; 
    var bcost=document.getElementById("bcost").value; 
    var dcost=document.getElementById("dcost").value; 
    var lcost=document.getElementById("lcost").value; 
    var manifist=document.getElementById("manifist").value; 
    var ldate=document.getElementById("ldate").value; 
    var comm=document.getElementById("comm").value;
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
       if(this.responseText === "done"){

        document.getElementById('titley').innerHTML ="إضافة صادر  جديد";
    
        $(document).ready(function(){
        
        
            $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
          
    
          $(".drop_value").html("<span style='color:red;'>  تم اضافة منتج  "+pname+" بنجاح  </span>");
         $("#down_from_top").slideDown().delay(3000).fadeOut();
 
       });
      
    }else if(this.responseText === "found"){
      document.getElementById('titley').innerHTML ="إضافة صادر  جديد";
      $(document).ready(function(){
        
        $(".drop_value").html("<span style='color:red;'>    عذرآ تم إضافة منتج "+pname+"  مسبقآ بتاريخ "+ldate+"  <br> رجاء مراجعة الصادرات</span>");
       $("#down_from_top").slideDown().delay(3000).fadeOut();

     });

    }
  }
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
    }
  }
  
  if(rname === '' || cno === '' ||pname === '' || dname === '' || ldate === ''){

  document.getElementById('titley').innerHTML ="إضافة صادر  جديد";
    
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>  رجاء ملئ كل الحقول  </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
}else{
    xhttp.open("POST","exports_insert_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
     xhttp.send("rname="+rname+"&cno="+cno+"&dname="+dname+"&pname="+pname+"&pqty="+pqty +"&bcost="+bcost+"&dcost="+dcost+"&lcost="+lcost+"&manifist="+manifist+"&ldate="+ldate+"&comm="+comm);

  }
  }   
  //add new  employee
  function add_employee() {
  
    var ename=document.getElementById("ename").value; 
    var ephone=document.getElementById("ephone").value; 
    var ejob=document.getElementById("ejob").value; 
    var esal=document.getElementById("esal").value; 
    var ehdate=document.getElementById("ehdate").value; 
   
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
        if(this.responseText === "done"){
          document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
    
          $(document).ready(function(){
          
            $(".drop_value").html("<span style='color:green;'>   تم توظيف "+ename+"  في وظيفة "+ejob+" بنجاح</span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
           $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
        
         });
        }else if(this.responseText === "found"){
          document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
          $(document).ready(function(){
          
            $(".drop_value").html("<span style='color:green;'>  الموظف "+ename+" موجود فعلآ</span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
         
        
         });
        }

    }
  
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
    }
  }
  
  if(ename === ""){

  document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
    
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>  رجاء ملئ كل الحقول  </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
}else{
     // ename ,ephone,ejob,esal,ehdate
    xhttp.open("POST","add_new_employee_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
     xhttp.send("ename="+ename+"&ephone="+ephone+"&ejob="+ejob+"&esal="+esal+"&ehdate="+ehdate);

  }
  }  
  
  function search(url,title) {
   
    var search_text = document.getElementById("search_text").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('titley').innerHTML = title;
        document.getElementById('search_content').innerHTML = this.responseText;
        $(document).ready(function(){
        
          $(".drop_value2").html("");
         $("#down_from_top2").fadeIn();
        
       });
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 //"search_text="+search_text)
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("search_text="+search_text);
  }  
  //ecit employee
  function edit_employee(url) {
   
     
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('edit_content').innerHTML =  this.responseText;
        document.getElementById('titley').innerHTML ="عرض البيانات";
        $(document).ready(function(){
        
          $(".drop_value2").html(" ");
         $("#down_from_top2").fadeIn();
        
       });
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST","edit_employee.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("id="+url);
  } 
  
  
  function edit_employee_done(url) {
   
    var ename=document.getElementById("ename").value; 
    var ephone=document.getElementById("ephone").value; 
    var ejob=document.getElementById("ejob").value; 
    var esal=document.getElementById("esal").value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         if(this.responseText === "done"){
          give_pages("show_all_employee.php"," عرض الموظفين    ");
          document.getElementById('edit_content').innerHTML =   "";
          document.getElementById('titley').innerHTML ="عرض البيانات";
              
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
   $(".drop_value2").html("");
   $("#down_from_top2").fadeIn();

 });
         }
       
      }else{
         $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST","edit_employee_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ename="+ename+"&ephone="+ephone+"&ejob="+ejob+"&esal="+esal+"&post_id="+url);
  
  }
  function delete_(del_id,url_del,url_show,title,title_del,table_name,table_id) {
   
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         
         if(this.responseText === "done"){
               
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>   تم حذف "+title+" بنجاح   </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
          give_pages(url_show,title_del);
      
          document.getElementById('titley').innerHTML ="عرض البيانات";
           
          $(document).ready(function(){
        
            $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
          
         });
         }
       
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
    if(confirm("هل تريد حذف "+title)) {
    xhttp.open("POST",url_del,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("del_id="+del_id+"&table_name="+table_name+"&table_id="+table_id);
  }
  
  }
  // add salaries
  function add_sal() {



    var eid=document.getElementById("e_info").value;   
       
    var smonth=document.getElementById("smonth").value;  
    var sdate=document.getElementById("sdate").value;  
    
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         
       if(this.responseText === "done"){
        $(document).ready(function(){
         
  
            $(".drop_value").html("<span style='color:blue;'>  تم الإضافة بنجاح </span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
         
        
        
          $(".drop_value2").html("");
         $("#down_from_top2").fadeIn();
        
       });
       }else if(this.responseText === "found"){
        $(document).ready(function(){
         
  
          $(".drop_value").html("<span style='color:red;'>  تم الإضافة مسبقآ </span>");
         $("#down_from_top").slideDown().delay(3000).fadeOut();
         
       
        });
       }
  }
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
      
    }
  } 

  if(  smonth === "" || sdate === ""){
    $(document).ready(function(){
         
  
      $(".drop_value").html("<span style='color:red;'>  رجاء ملئ جميع الحقول</span>");
     $("#down_from_top").slideDown().delay(3000).fadeOut();
     
   
    });
  }else{
 
    xhttp.open("POST","add_sal_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
     xhttp.send("eid="+eid+"&smonth="+smonth+"&sdate="+sdate );

  }
  }
  
    //                    edit products
    function edit_product(url) {
   
     
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          $(document).ready(function(){
        
            $(".drop_value2").html(" ");
           $("#down_from_top2").fadeIn();
          
         });
          document.getElementById('edit_content').innerHTML =  this.responseText;
          document.getElementById('titley').innerHTML ="عرض البيانات";
        }else{
          $(document).ready(function(){
        
            $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
           $("#down_from_top2").fadeOut();
          
         });
        }
      };
   
      xhttp.open("POST","edit_product.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhttp.send("id="+url);
    } 
  
    function edit_product_done(url) {
     
      var sname=document.getElementById("sname").value; 
      var sprice=document.getElementById("sprice").value; 
      var stype=document.getElementById("stype").value; 
      var sdate=document.getElementById("sdate").value; 
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          alert(this.responseText);
           if(this.responseText === "done"){
            give_pages("show_all_product.php"," عرض المنتجات    ");
            document.getElementById('edit_content').innerHTML =   "";
            document.getElementById('titley').innerHTML ="عرض البيانات";

                
    $(document).ready(function(){

      $(".drop_value2").html(" ");
       $("#down_from_top2").fadeIn();
      $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
     $("#down_from_top").slideDown().delay(3000).fadeOut();
     
   });
           }
           else if(this.responseText === "found"){
            $(document).ready(function(){

              $(".drop_value2").html(" ");
               $("#down_from_top2").fadeIn();
              $(".drop_value").html("<span style='color:green;'> لا يمكن تعديل منتج به  بيانات </span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
           });
           }
         
        }else{
          $(document).ready(function(){
        
            $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
           $("#down_from_top2").fadeOut();
          
         });
        }
      };
   // alert(sname+sprice+stype+sdate);
      xhttp.open("POST","edit_product_done.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("sname="+sname+"&sprice="+sprice+"&stype="+stype+"&sdate="+sdate+"&sno="+url);
    
    }
    // edit salaries

    function edit_sal(url) {
   
      var name = document.getElementById("name_"+url).innerHTML;
     
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
          $(document).ready(function(){
        
            $(".drop_value2").html(" ");
           $("#down_from_top2").fadeIn();
          
         });
          document.getElementById('edit_content').innerHTML =  this.responseText;
          document.getElementById('titley').innerHTML ="عرض البيانات";
        }else{
          $(document).ready(function(){
        
            $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
           $("#down_from_top2").fadeOut();
          
         });
        }
      };
   
      xhttp.open("POST","edit_sal.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhttp.send("id="+url+"&name="+name);
    } 
  //edit salaries done
  function edit_sal_done(url) {
   
    var sdate=document.getElementById("sdate").value; 
    var smonth=document.getElementById("smonth").value; 
     
    var esal=document.getElementById("esal").value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
         if(this.responseText === "done"){
           
          give_pages("show_all_sal.php"," عرض المرتبات ");
          document.getElementById('edit_content').innerHTML =   "";
          
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
   $(".drop_value2").html("");
   $("#down_from_top2").fadeIn();

 });
         }
       
      }else{
         $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST","edit_sal_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("sdate="+sdate+"&esal="+esal+"&smonth="+smonth+"&post_id="+url);
  
  }

  //edit export ---------------------------------------------------
  function edit_export(url) {
   
     
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('edit_content').innerHTML =  this.responseText;
        document.getElementById('titley').innerHTML ="تعديل بيانات الصادر ";
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };
 
    xhttp.open("POST","edit_export.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("id="+url);
  } 

  function edit_export_done(url) {
     //  rname,cno,dname,pname,pqty,ptype,bcost,dcost,lcost,manifist,tcost,ldate,arrive,comm
    var rname=document.getElementById("rname").value; 
    var cno=document.getElementById("cno").value; 
    var dname=document.getElementById("dname").value; 
    var pname=document.getElementById("pname").value; 
    var pqty=document.getElementById("pqty").value; 
    var bcost=document.getElementById("bcost").value; 
    var dcost=document.getElementById("dcost").value; 
    var lcost=document.getElementById("lcost").value; 
    var manifist=document.getElementById("manifist").value; 
    var ldate=document.getElementById("ldate").value; 
    var comm=document.getElementById("comm").value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

         if(this.responseText === "done"){
          give_pages("show_all_export.php"," عرض الصادرات");
          document.getElementById('edit_content').innerHTML =   "";
          document.getElementById('titley').innerHTML ="عرض البيانات";
              
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
         }
       
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };   
 // alert(sname+sprice+stype+sdate);
 // //  rname,cno,dname,pname,pqty,ptype,bcost,dcost,lcost,manifist,tcost,ldate,arrive,comm
    xhttp.open("POST","edit_export_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("rname="+rname+"&cno="+cno+"&dname="+dname+"&pname="+pname+"&pqty="+pqty+"&bcost="+bcost+"&dcost="+dcost+"&lcost="+lcost+"&manifist="+manifist+"&ldate="+ldate+"&comm="+comm+"&eid="+url);
  
  }
  

 
  function birk(){
    $(document).ready(function(){
    
      alert($("#dataTable").scrollTop());
    
    });
  }
  
    //add new  waiting ---------------------------------------------------
    function add_waiting_done(url) {
   
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
          if(this.responseText == "done"){
            give_pages("show_all_waiting.php"," عرض وارد المنتظر ");
            document.getElementById('edit_content').innerHTML = "";// this.responseText;
            document.getElementById('titley').innerHTML ="تم الاستلام بنجاح   ";
  
            $(document).ready(function(){
    
              $(".drop_value").html("<span style='color:green;'>  تم استلام الوارد بنجاح   </span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
             $(".drop_value2").html("");
             $("#down_from_top2").fadeIn();
          
           });
          }
        }else{
         // document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";
         $(document).ready(function(){
          
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
        }
      };
   
  if(confirm("هل تريد استلام الوارد؟","الرسالة التاكيد")){
    xhttp.open("POST","add_new_stlam_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("eid="+url);
  }
    }

  // add import to store   ---------------------------------------------------
   function add_store(url,sid) {
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      
        if(this.responseText == "done"){
          give_pages("show_all_import.php"," عرض وارد المخزن ");
          document.getElementById('edit_content').innerHTML = "";// this.responseText;
          document.getElementById('titley').innerHTML ="تم تخزين بنجاح   ";
            
          $(document).ready(function(){
  
            $(".drop_value").html("<span style='color:green;'>  تم تخزين بنجاح   </span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
           $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
        
         });
                }  else {

                  document.getElementById('titley').innerHTML ="فشل العملية";

                  $(document).ready(function(){
          
                    $(".drop_value").html("<span style='color:green;'> فشل العملية الرجاء محاولة مرة اخرى!!   </span>");
                  $("#down_from_top").slideDown().delay(3000).fadeOut();
                  
                  $(".drop_value2").html("");
                  $("#down_from_top2").fadeIn();
                
                });
                      }
      }else{
       $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
      }
    };
 
if(confirm("هل تريد اضافةالوارد للمخزن؟","الرسالة التاكيد")){
  xhttp.open("POST","update_store_done.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("eid="+url+"&sid="+sid);
}
  }

  // check stor ---------------------------------------------------
  function check_store() {
 
 

   document.getElementById('titley').innerHTML ="فشل العملية";

                  $(document).ready(function(){
          
                    $(".drop_value").html("<span style='color:red;'> لقد قمت باضافة الوارد مسبقا    </span>");
                  $("#down_from_top").slideDown().delay(3000).fadeOut();
                  
                  $(".drop_value2").html("");
                  $("#down_from_top2").fadeIn();
                
                });
  }
  
   //edit import ---------------------------------------------------
   function edit_import(url,stor_val) {
   
     
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('edit_content').innerHTML =  this.responseText;
        document.getElementById('titley').innerHTML ="تعديل بيانات الصادر ";
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };
 if(stor_val === 0){
    xhttp.open("POST","edit_import.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("id="+url);
  }
else{
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>لا يمكن تعديل الكمية بعد التخزين</span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
} }

  function edit_import_done(url) {
     //  rname,cno,dname,pname,pqty,ptype,bcost,dcost,lcost,manifist,tcost,ldate,arrive,comm
    var borsa=document.getElementById("borsa").value; 
    var miss=document.getElementById("miss").value; 
    var stor=document.getElementById("stor").value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
     alert(this.responseText);
         if(this.responseText === "done"){
          give_pages("show_all_import.php"," عرض وارد المستلم");
          document.getElementById('edit_content').innerHTML =   "";
          document.getElementById('titley').innerHTML ="عرض البيانات";
              
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
         } else if(this.responseText === "no"){
          $(document).ready(function(){
  
            $(".drop_value").html("<span style='color:red;'>لا يمكن تعديل الكمية بعد التخزين</span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
         
        
         });
         }
       
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };   
 // alert(sname+sprice+stype+sdate);
 // //  rname,cno,dname,pname,pqty,ptype,bcost,dcost,lcost,manifist,tcost,ldate,arrive,comm
    xhttp.open("POST","edit_import_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("borsa="+borsa+"&miss="+miss+"&stor="+stor+"&eid="+url);
  
  }
=======

/// thiis login function
$(document).ready(function(){
 $('.hide_show').click(function(){
  $("#down_from_top").slideUp();
  $(".drop_value").html(" ");

  
 
 });
 
 
  
 /*
 $(".btn1").click(function(){
  ;
});
 ** $(".btn2").click(function(){
    $("p").slideDown();
     });
    */
 

   (function pulse(back) {
    $('#seventyfive').animate(
        {
            width: (back) ? $('#seventyfive').width() +3 : $('#seventyfive').width() -3            
        }, 700);
    $('#seventyfive').animate(
        {          
            'font-size': (back) ? '100px' : '140px',
            opacity: (back) ? 1 : 0.2
        }, 700, function(){pulse(!back)});
    })(false);
});

 
function login() {
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          if(this.responseText === "done_global"){
             window.location.assign('/un');
          }else if(this.responseText === "done_admin"){
             alert("you are jest admin");
          }
          else if(this.responseText === "user_not_found"){
             
            $(document).ready(function(){
        
              $(".drop_value").html("<span style='color:red;'>  اسم المستخدم او كلمة المرور خطأ </span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
           
          
           });
          }
      }
    }
    var username2 = document.getElementById("username").value
    var password2 = document.getElementById("password").value
    xhttp.open("POST", "login_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("username="+username2+"&password="+password2);
  }

// this is give for giving the pages to the div!!! give_pages give_pages give_pages give_pages give_pages give_pages give_pages
  function give_pages(url,titlee) {
   if(url === "show_all_export.php"  || url ===  "show_all_waiting.php" || url ===  "show_all_import.php" || url ===  "show_all_history.php"){

    $(document).ready(function(){
        
      $(".col-lg-3").hide();
      $("#col_large").addClass("col-lg-12");
      $("#col_large").addClass("col-xl-12");
      $("#accordionSidebar").addClass("toggled");
   
    
   });
   }
   else{
    $(".col-lg-3").show();
    $("#col_large").removeClass("col-lg-12");
    $("#col_large").removeClass("col-xl-12");
    $("#accordionSidebar").removeClass("toggled");
    
   }
   if(url === "show_all_product.php"){
    $("#col_large").addClass("bg_color_lightblue");
    $(".card-body").addClass("bg_color_lightblue");
   
    
   }else{
    $("#col_large").removeClass("bg_color_lightblue");
    $(".card-body").removeClass("bg_color_lightblue");
   
    
   }
   if(url === "show_all_employee.php"){
    $("#col_large").addClass("bg_color_likebrown");
    $(".card-body").addClass("bg_color_likebrown");
   
   }else{
    $("#col_large").removeClass("bg_color_likebrown");
    $(".card-body").removeClass("bg_color_likebrown");
   
    
   } 
   if(url === "show_all_sal.php"){
    $("#col_large").addClass("bg_color_darkblue");
    $(".card-body").addClass("bg_color_darkblue");
   
   }else{
    $("#col_large").removeClass("bg_color_darkblue");
    $(".card-body").removeClass("bg_color_darkblue");
   
    
   }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('titley').innerHTML = titlee;
        document.getElementById('contenty').innerHTML = this.responseText;
        $(document).ready(function(){
        
          $(".drop_value2").html(" ");
         $("#down_from_top2").fadeIn();
        
       });
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST",url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send();
  }
  //add new faculty 
  
 
  
  //add new product
  function add_pro() {
    var pro_name = document.getElementById("pro_name").value;
    var pro_type = document.getElementById("pro_type").value;
    var pro_price = document.getElementById("pro_price").value;
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
           if(this.responseText === "done"){
            document.getElementById('titley').innerHTML ="إضافة منتج  جديد";
            $(document).ready(function(){
  
              $(".drop_value").html("<span style='color:blue;'>  تم اضافة المنتج "+pro_name+"  بنجاح</span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
           
          
           });
           }else if(this.responseText === "found"){
            document.getElementById('titley').innerHTML ="إضافة منتج  جديد";
            $(document).ready(function(){
  
              $(".drop_value").html("<span style='color:red;'> المنتج "+pro_name+" موجود مسبقآ</span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
          
        
              $(".drop_value2").html(" ");
             $("#down_from_top2").fadeIn();
            
      
          
           });
           }
      
       
    }
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
    }
  }
if(pro_name === "" || pro_price === ""){

  document.getElementById('titley').innerHTML ="إضافة منتج  جديد";
    
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>  رجاء ملئ كل الحقول  </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
}else{
    xhttp.open("POST","store_insert_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("pro_name="+pro_name+"&pro_type="+pro_type+"&pro_price="+pro_price);

  }
  } 
   
  
  //add new  saderat
  function add_exp() {
    var rname=document.getElementById("rname").value; 
    var cno=document.getElementById("cno").value; 
    var dname=document.getElementById("dname").value; 
    var pname=document.getElementById("pname").value; 
    var pqty=document.getElementById("pqty").value; 
    var bcost=document.getElementById("bcost").value; 
    var dcost=document.getElementById("dcost").value; 
    var lcost=document.getElementById("lcost").value; 
    var manifist=document.getElementById("manifist").value; 
    var ldate=document.getElementById("ldate").value; 
    var comm=document.getElementById("comm").value;
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
       if(this.responseText === "done"){

        document.getElementById('titley').innerHTML ="إضافة صادر  جديد";
    
        $(document).ready(function(){
        
        
            $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
          
    
          $(".drop_value").html("<span style='color:red;'>  تم اضافة منتج  "+pname+" بنجاح  </span>");
         $("#down_from_top").slideDown().delay(3000).fadeOut();
 
       });
      
    }else if(this.responseText === "found"){
      document.getElementById('titley').innerHTML ="إضافة صادر  جديد";
      $(document).ready(function(){
        
        $(".drop_value").html("<span style='color:red;'>    عذرآ تم إضافة منتج "+pname+"  مسبقآ بتاريخ "+ldate+"  <br> رجاء مراجعة الصادرات</span>");
       $("#down_from_top").slideDown().delay(3000).fadeOut();

     });

    }
  }
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
    }
  }
  
  if(rname === '' || cno === '' ||pname === '' || dname === '' || ldate === ''){

  document.getElementById('titley').innerHTML ="إضافة صادر  جديد";
    
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>  رجاء ملئ كل الحقول  </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
}else{
    xhttp.open("POST","exports_insert_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
     xhttp.send("rname="+rname+"&cno="+cno+"&dname="+dname+"&pname="+pname+"&pqty="+pqty +"&bcost="+bcost+"&dcost="+dcost+"&lcost="+lcost+"&manifist="+manifist+"&ldate="+ldate+"&comm="+comm);

  }
  }   
  //add new  employee
  function add_employee() {
  
    var ename=document.getElementById("ename").value; 
    var ephone=document.getElementById("ephone").value; 
    var ejob=document.getElementById("ejob").value; 
    var esal=document.getElementById("esal").value; 
    var ehdate=document.getElementById("ehdate").value; 
   
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
        if(this.responseText === "done"){
          document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
    
          $(document).ready(function(){
          
            $(".drop_value").html("<span style='color:green;'>   تم توظيف "+ename+"  في وظيفة "+ejob+" بنجاح</span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
           $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
        
         });
        }else if(this.responseText === "found"){
          document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
          $(document).ready(function(){
          
            $(".drop_value").html("<span style='color:green;'>  الموظف "+ename+" موجود فعلآ</span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
         
        
         });
        }

    }
  
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
    }
  }
  
  if(ename === ""){

  document.getElementById('titley').innerHTML ="إضافة موظف  جديد";
    
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>  رجاء ملئ كل الحقول  </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
}else{
     // ename ,ephone,ejob,esal,ehdate
    xhttp.open("POST","add_new_employee_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
     xhttp.send("ename="+ename+"&ephone="+ephone+"&ejob="+ejob+"&esal="+esal+"&ehdate="+ehdate);

  }
  }  
  
  function search(url,title) {
   
    var search_text = document.getElementById("search_text").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('titley').innerHTML = title;
        document.getElementById('search_content').innerHTML = this.responseText;
        $(document).ready(function(){
        
          $(".drop_value2").html("");
         $("#down_from_top2").fadeIn();
        
       });
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 //"search_text="+search_text)
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("search_text="+search_text);
  }  
  //ecit employee
  function edit_employee(url) {
   
     
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('edit_content').innerHTML =  this.responseText;
        document.getElementById('titley').innerHTML ="عرض البيانات";
        $(document).ready(function(){
        
          $(".drop_value2").html(" ");
         $("#down_from_top2").fadeIn();
        
       });
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST","edit_employee.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("id="+url);
  } 
  
  
  function edit_employee_done(url) {
   
    var ename=document.getElementById("ename").value; 
    var ephone=document.getElementById("ephone").value; 
    var ejob=document.getElementById("ejob").value; 
    var esal=document.getElementById("esal").value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         if(this.responseText === "done"){
          give_pages("show_all_employee.php"," عرض الموظفين    ");
          document.getElementById('edit_content').innerHTML =   "";
          document.getElementById('titley').innerHTML ="عرض البيانات";
              
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
   $(".drop_value2").html("");
   $("#down_from_top2").fadeIn();

 });
         }
       
      }else{
         $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST","edit_employee_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ename="+ename+"&ephone="+ephone+"&ejob="+ejob+"&esal="+esal+"&post_id="+url);
  
  }
  function delete_(del_id,url_del,url_show,title,title_del,table_name,table_id) {
   
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         
         if(this.responseText === "done"){
               
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>   تم حذف "+title+" بنجاح   </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
          give_pages(url_show,title_del);
      
          document.getElementById('titley').innerHTML ="عرض البيانات";
           
          $(document).ready(function(){
        
            $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
          
         });
         }
       
      }else{
        $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
    if(confirm("هل تريد حذف "+title)) {
    xhttp.open("POST",url_del,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("del_id="+del_id+"&table_name="+table_name+"&table_id="+table_id);
  }
  
  }
  // add salaries
  function add_sal() {



    var eid=document.getElementById("e_info").value;   
       
    var smonth=document.getElementById("smonth").value;  
    var sdate=document.getElementById("sdate").value;  
    
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         
       if(this.responseText === "done"){
        $(document).ready(function(){
         
  
            $(".drop_value").html("<span style='color:blue;'>  تم الإضافة بنجاح </span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
         
        
        
          $(".drop_value2").html("");
         $("#down_from_top2").fadeIn();
        
       });
       }else if(this.responseText === "found"){
        $(document).ready(function(){
         
  
          $(".drop_value").html("<span style='color:red;'>  تم الإضافة مسبقآ </span>");
         $("#down_from_top").slideDown().delay(3000).fadeOut();
         
       
        });
       }
  }
    else {
      $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
      
    }
  } 

  if(  smonth === "" || sdate === ""){
    $(document).ready(function(){
         
  
      $(".drop_value").html("<span style='color:red;'>  رجاء ملئ جميع الحقول</span>");
     $("#down_from_top").slideDown().delay(3000).fadeOut();
     
   
    });
  }else{
 
    xhttp.open("POST","add_sal_done.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
     xhttp.send("eid="+eid+"&smonth="+smonth+"&sdate="+sdate );

  }
  }
  
    //                    edit products
    function edit_product(url) {
   
     
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          $(document).ready(function(){
        
            $(".drop_value2").html(" ");
           $("#down_from_top2").fadeIn();
          
         });
          document.getElementById('edit_content').innerHTML =  this.responseText;
          document.getElementById('titley').innerHTML ="عرض البيانات";
        }else{
          $(document).ready(function(){
        
            $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
           $("#down_from_top2").fadeOut();
          
         });
        }
      };
   
      xhttp.open("POST","edit_product.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhttp.send("id="+url);
    } 
  
    function edit_product_done(url) {
     
      var sname=document.getElementById("sname").value; 
      var sprice=document.getElementById("sprice").value; 
      var stype=document.getElementById("stype").value; 
      var sdate=document.getElementById("sdate").value; 
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          alert(this.responseText);
           if(this.responseText === "done"){
            give_pages("show_all_product.php"," عرض المنتجات    ");
            document.getElementById('edit_content').innerHTML =   "";
            document.getElementById('titley').innerHTML ="عرض البيانات";

                
    $(document).ready(function(){

      $(".drop_value2").html(" ");
       $("#down_from_top2").fadeIn();
      $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
     $("#down_from_top").slideDown().delay(3000).fadeOut();
     
   });
           }
           else if(this.responseText === "found"){
            $(document).ready(function(){

              $(".drop_value2").html(" ");
               $("#down_from_top2").fadeIn();
              $(".drop_value").html("<span style='color:green;'> لا يمكن تعديل منتج به  بيانات </span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
           });
           }
         
        }else{
          $(document).ready(function(){
        
            $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
           $("#down_from_top2").fadeOut();
          
         });
        }
      };
   // alert(sname+sprice+stype+sdate);
      xhttp.open("POST","edit_product_done.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("sname="+sname+"&sprice="+sprice+"&stype="+stype+"&sdate="+sdate+"&sno="+url);
    
    }
    // edit salaries

    function edit_sal(url) {
   
      var name = document.getElementById("name_"+url).innerHTML;
     
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
          $(document).ready(function(){
        
            $(".drop_value2").html(" ");
           $("#down_from_top2").fadeIn();
          
         });
          document.getElementById('edit_content').innerHTML =  this.responseText;
          document.getElementById('titley').innerHTML ="عرض البيانات";
        }else{
          $(document).ready(function(){
        
            $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
           $("#down_from_top2").fadeOut();
          
         });
        }
      };
   
      xhttp.open("POST","edit_sal.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhttp.send("id="+url+"&name="+name);
    } 
  //edit salaries done
  function edit_sal_done(url) {
   
    var sdate=document.getElementById("sdate").value; 
    var smonth=document.getElementById("smonth").value; 
     
    var esal=document.getElementById("esal").value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
         if(this.responseText === "done"){
           
          give_pages("show_all_sal.php"," عرض المرتبات ");
          document.getElementById('edit_content').innerHTML =   "";
          
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
   $(".drop_value2").html("");
   $("#down_from_top2").fadeIn();

 });
         }
       
      }else{
         $(document).ready(function(){
        
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
      }
    };
 
    xhttp.open("POST","edit_sal_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("sdate="+sdate+"&esal="+esal+"&smonth="+smonth+"&post_id="+url);
  
  }

  //edit export ---------------------------------------------------
  function edit_export(url) {
   
     
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('edit_content').innerHTML =  this.responseText;
        document.getElementById('titley').innerHTML ="تعديل بيانات الصادر ";
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };
 
    xhttp.open("POST","edit_export.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("id="+url);
  } 

  function edit_export_done(url) {
     //  rname,cno,dname,pname,pqty,ptype,bcost,dcost,lcost,manifist,tcost,ldate,arrive,comm
    var rname=document.getElementById("rname").value; 
    var cno=document.getElementById("cno").value; 
    var dname=document.getElementById("dname").value; 
    var pname=document.getElementById("pname").value; 
    var pqty=document.getElementById("pqty").value; 
    var bcost=document.getElementById("bcost").value; 
    var dcost=document.getElementById("dcost").value; 
    var lcost=document.getElementById("lcost").value; 
    var manifist=document.getElementById("manifist").value; 
    var ldate=document.getElementById("ldate").value; 
    var comm=document.getElementById("comm").value; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

         if(this.responseText === "done"){
          give_pages("show_all_export.php"," عرض الصادرات");
          document.getElementById('edit_content').innerHTML =   "";
          document.getElementById('titley').innerHTML ="عرض البيانات";
              
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:green;'>        تم تعديل بيانات بنجاح     </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
         }
       
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };   
 // alert(sname+sprice+stype+sdate);
 // //  rname,cno,dname,pname,pqty,ptype,bcost,dcost,lcost,manifist,tcost,ldate,arrive,comm
    xhttp.open("POST","edit_export_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("rname="+rname+"&cno="+cno+"&dname="+dname+"&pname="+pname+"&pqty="+pqty+"&bcost="+bcost+"&dcost="+dcost+"&lcost="+lcost+"&manifist="+manifist+"&ldate="+ldate+"&comm="+comm+"&eid="+url);
  
  }

 
  function birk(){
    $(document).ready(function(){
    
      alert($("#dataTable").scrollTop());
    
    });
  }
  
    //add new  waiting ---------------------------------------------------
    function add_waiting_done(url) {
   
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
          if(this.responseText == "done"){
            give_pages("show_all_waiting.php"," عرض وارد المنتظر ");
            document.getElementById('edit_content').innerHTML = "";// this.responseText;
            document.getElementById('titley').innerHTML ="تم الاستلام بنجاح   ";
  
            $(document).ready(function(){
    
              $(".drop_value").html("<span style='color:green;'>  تم استلام الوارد بنجاح   </span>");
             $("#down_from_top").slideDown().delay(3000).fadeOut();
             
             $(".drop_value2").html("");
             $("#down_from_top2").fadeIn();
          
           });
          }
        }else{
         // document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";
         $(document).ready(function(){
          
          $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
         $("#down_from_top2").fadeOut();
        
       });
        }
      };
   
  if(confirm("هل تريد استلام الوارد؟","الرسالة التاكيد")){
    xhttp.open("POST","add_new_stlam_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send("eid="+url);
  }
    }

  // add import to store   ---------------------------------------------------
   function add_store(url,sid) {
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      
        if(this.responseText == "done"){
          give_pages("show_all_import.php"," عرض وارد المخزن ");
          document.getElementById('edit_content').innerHTML = "";// this.responseText;
          document.getElementById('titley').innerHTML ="تم تخزين بنجاح   ";
            
          $(document).ready(function(){
  
            $(".drop_value").html("<span style='color:green;'>  تم تخزين بنجاح   </span>");
           $("#down_from_top").slideDown().delay(3000).fadeOut();
           
           $(".drop_value2").html("");
           $("#down_from_top2").fadeIn();
        
         });
                }  else {

                  document.getElementById('titley').innerHTML ="فشل العملية";

                  $(document).ready(function(){
          
                    $(".drop_value").html("<span style='color:green;'> فشل العملية الرجاء محاولة مرة اخرى!!   </span>");
                  $("#down_from_top").slideDown().delay(3000).fadeOut();
                  
                  $(".drop_value2").html("");
                  $("#down_from_top2").fadeIn();
                
                });
                      }
      }else{
       $(document).ready(function(){
        
        $(".drop_value2").html("<span style='color:red;'>  <img src='img/ajax-loader.gif'/> </span>");
       $("#down_from_top2").fadeOut();
      
     });
      }
    };
 
if(confirm("هل تريد اضافةالوارد للمخزن؟","الرسالة التاكيد")){
  xhttp.open("POST","update_store_done.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("eid="+url+"&sid="+sid);
}
  }

  // check stor ---------------------------------------------------
  function check_store() {
 
 

   document.getElementById('titley').innerHTML ="فشل العملية";

                  $(document).ready(function(){
          
                    $(".drop_value").html("<span style='color:red;'> لقد قمت باضافة الوارد مسبقا    </span>");
                  $("#down_from_top").slideDown().delay(3000).fadeOut();
                  
                  $(".drop_value2").html("");
                  $("#down_from_top2").fadeIn();
                
                });
  }
  
  
>>>>>>> d42dc1c73ebf2e72a55ab3654ba0ea2f28550619
