
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

// this is give for giving the pages to the div
  function give_pages(url,titlee) {
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('titley').innerHTML = titlee;
        document.getElementById('contenty').innerHTML = this.responseText;
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

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
             
           
          
           });
           }
      
       
    }
    else {
     document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

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
     document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

    }
  }
  
  if(rname === '' || cno === '' ||pname === '' || dname === ''){

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
     document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

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
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

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
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

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
   
 

 });
         }
       
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };
 
    xhttp.open("POST","edit_employee_done.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("ename="+ename+"&ephone="+ephone+"&ejob="+ejob+"&esal="+esal+"&post_id="+url);
  
  }
    function delete_(del_id,url_del,url_show,title,title_del) {
   
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         if(this.responseText === "done"){
               
  $(document).ready(function(){
  
    $(".drop_value").html("<span style='color:red;'>   تم حذف "+title_del+" نجاح   </span>");
   $("#down_from_top").slideDown().delay(3000).fadeOut();
   
 

 });
          give_pages(url_show,title);
      
          document.getElementById('titley').innerHTML ="عرض البيانات";
           
 
         }
       
      }else{
        document.getElementById('titley').innerHTML = "<img src='img/ajax-loader.gif'/> &nbsp; جاري جلب البيانات ........";

      }
    };
 
    xhttp.open("POST",url_del,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("del_id="+del_id);
  
  }