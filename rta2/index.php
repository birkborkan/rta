<?php
session_start();

if(!isset($_SESSION['seuser']) && !isset($_SESSION['sepass'])){
header("location:login.php");
exit();
}

?>
<!DOCTYPE html>
<html lang="en-US">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>مطاحن روتانا للغلال-مكتب نيالا</title>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="css/components.css">
      <link rel="stylesheet" href="css/icons.css">
      <link rel="stylesheet" href="css/responsee.css">
      <link rel="stylesheet" href="owl-carousel/owl.carousel.css">
     <link rel="stylesheet" href="owl-carousel/owl.theme.css">
       <link rel="stylesheet" href="css/slide1.css">
        <style>
        .mySlides {display:none;}
        </style>
      <!-- CUSTOM STYLE -->
      <link rel="stylesheet" href="css/template-style.css">
       <link rel="stylesheet" type="text/css" href="css/insert_store.css">
      <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
      <script type="text/javascript" src="js/jquery-ui.min.js"></script>
      <script type="text/javascript" src="js/my-ajax.js"></script>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
   </head>
   <body class="size-1140">
       

      <div id="all-content" class="with-sticky-footer">
         <!-- TOP NAV WITH LOGO -->
         <header>
            <nav>
               <div class="line">
                  <div class="s-12 l-2">
                     <img class="s-5 l-12 center"src="img/logo2.png">
                      <span class="s-5 l-12 center" style="color:white;font-family:tahoma;font-size:18px">مكتب نيالا</span>
                  </div>
                  <div class="top-nav s-12 l-10 right">
                     <ul class="right" style="color:white">
                        <li><a href="main.php" target="info">الرئيسية</a></li>
                           <li>
                           <a>الترحيل</a>
                           <ul>  
                              <li><a  onclick="new_exp()">ادخال جديد </a></li>
                              <li><a onclick="select_exp()">ادارة الصادرات</a></li>
                             
                           </ul>
                        </li>
                         
                        <li>
                           <a>المخزن</a>
                           <ul>
                              <li><a href="store_insert.php" target="info">اضافة منتج</a></li>
                              <li><a href="store_update.php" target="info">المنتجات</a></li>
                              <li> <a href="history_select_print.php" target="info">حركة المخزن</a></li>
                              <li> <a href="exports_wait.php" target="info">عربات في الانتظار</a></li>
                              <li> <a href="imports_select.php" target="info">وارد المخزن</a></li>
                           </ul>
                        </li>
                         
                       <li>
                           <a>الفواتير</a>
                           <ul>
                              <li><a href="order_insert_print.php" target="info">اضافة فاتورة</a></li>
                              <li><a href="order_insert.php" target="info">عرض</a></li>
                           </ul>
                        </li>
                         
                           <li>
                           <a>الموظفين</a>
                           <ul>
                              <li><a href="employees_insert.php" target="info">الموظفين</a></li>
                              <li><a href="salaries_insert.php" target="info">الرواتب</a></li>
                              <li> <a href="login_insert.php" target="info"> المستخدمين</a></li>
                           </ul>
                        </li>
                        <li>
                           <a>عن روتانا</a>
                        </li>
                        <li><a>اتصل بنا</a></li>
                        <li><a  onclick="logout()">تسجيل الخروج </a></li>
                     </ul>
                    
                  </div>
               </div>
            </nav>
         </header>
         <section>  
            <!-- FIRST BLOCK -->
            <div id="first-block">
               <div class="line">
                  <div class="margin-bottom">
                     <div class="margin">
                
     
     <div id="jax"></div>
 <div class="w3-content w3-section" style="max-width:500px">
<div class="mySlides w3-animate-fading" ><img src="img/rotana1.jpg" style="width:100%"/> متج مدعوم</div>
	<div class="mySlides w3-animate-fading"><img  src="img/rotana2.jpg" style="width:100%"/> منتج بكت </div>
	<div class="mySlides w3-animate-fading"><img  src="img/rotana3.jpg" style="width:100%"/> مطاحن روتانا للغلال</div>
</div>
<script>
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}
</script>     
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- FOOTER -->
         <div id="footer-content" class="sticky-footer">
            <footer>
               <div class="line">
                  <div class="s-12 l-6">
                     <p>Copyright 2019,AMAS Technology</p>
                  </div>
                  <div class="s-12 l-6">
                     <a class="right" href="#">Design and coding by AMAS Technology</a>
                  </div>
               </div>
            </footer>
         </div>
      </div>
      <script type="text/javascript" src="js/responsee.js"></script>
       <script type="text/javascript">
           <?php 
           session_start();
           ?>
	var ex;
	function ck(ex)
		{ 

		if(ex==1)
			{
                alert("on");
            }
                else
                    {
                        alert(" off");
                    }
        	
       	
		}
	</script>
       
       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
   </body>
</html>