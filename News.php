<!DOCTYPE html>
    <html>
        <head>
            <title> Italian Serie A  </title>   
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1">
            <?php
                include('php/connect-mysql.php'); //SQL Database access
                include('php/Heading.php');
            ?>
			<link rel = "shortcut icon" href = "images/SerieALogo2.png"/>
            <link rel="stylesheet" href="css/Theme.css"/>
			<link rel="stylesheet" href="css/News.css"/>
            <script src = "js/article.js"></script>
			<script src = "js/news.js"></script>
        </head>
    

     <body>
        <header>
			<div class = "logo">
				 <img src = "images/SerieALogo.png" alt = "Serie A"> 
            </div>
			<div class = "logo_national">
				 <img src = "images/Italy.png" alt = "Serie A"> 
            </div>
            <?php
                display_heading_main_page(); //Function displays all the team logos in header
            ?>
        </header>
		
        <?php
            main_page_menu_bar(); //Function displays all the team logos in header
        ?>



<div class="container">
	<h2> Featured </h2>
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
 			 <ol class="carousel-indicators">
    			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    			<li data-target="#myCarousel" data-slide-to="1"></li>
   				<li data-target="#myCarousel" data-slide-to="2"></li>
 			 </ol>

  <!-- Wrapper for slides -->
 	<div class="carousel-inner" style= "width:100%; height: 500px !important;">
    		<div class="item active">
      			<img src="News_Images/Rudiger.jpg" alt="Zenit" style="width:100%" class = "img-responsive">
				  <div class = "carousel-caption">
				  	<h3 class = "carousel1">Chelsea offer 40 mil for Rudiger</h3>
				  </div>
   			 </div>

   			 <div class="item">
     			 <img src="News_Images/Dani_Alves2.jpg" alt="Juve" style="width:100%" class = "img-responsive">
				  <div class = "carousel-caption">
					<h3 class = "carousel2">Dani Alves released by Juve</h3>
				  </div>
    		 </div>

    		<div class="item">
      			<img src="News_Images/Italy_U21_1-0.jpg" alt="Italy" style="width:100%" class = "img-responsive">
				   <div class = "carousel-caption">
					<h3>Italy Advance to Semis with 1-0 Win</h3>
				  </div>
			</div>
    </div>

  <!-- Left and right controls -->
  		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
   			<span class="glyphicon glyphicon-chevron-left"></span>
    		<span class="sr-only">Previous</span>
  		</a>
  		<a class="right carousel-control" href="#myCarousel" data-slide="next">
    		<span class="glyphicon glyphicon-chevron-right"></span>
    		<span class="sr-only">Next</span>
  		</a>
	</div>
</div>



<div class = "Trending-Title">                   <!--Trending News Articles-->
	<h2> Trending Articles</h2>
</div>

	<div id = "News"> 

<!-- FEATURED ARTICLES STARTS HERE-->	
<div class = "articles" id = "articles">
   <div id = "Trending-Article1">                    
       <h2> What next for Italy </h2>
       <div class = "fake-image">
        <img src = "News_Images/Italy_Dissapointed.jpg" alt = "Udine" width = "330" height = "180">
        <p><i>Matteo Buonastella</i>, November 15, 2017</p>
        <button  class="btn btn-info"  onclick = "General1()">Read More</button>
        </div>
        <div id = "display3" class = "display">
            <div id = "choose3"></div>
        </div>
    </div>

    <div id = "Trending-Article2">
       <h2> Atalanta Dominate Everton </h2>
       <div class = "fake-image">
        <img src = "News_Images/Atalanta_Everton.jpg" alt = "Udine" width = "350" height = "180">
        <p><i>Matteo Buonastella</i>, May 22, 2017</p>
        <button  class="btn btn-info"  onclick = "Atalanta2()">Read More</button>
        </div>
        <div id = "Atalanta2" class = "display">
            <div id = "Atalantachoose2"></div>
        </div>
    </div>
</div>
<!-- FEATURED ARTICLES END HERE-->	<!-- FEATURED ARTICLES END HERE-->	<!-- FEATURED ARTICLES END HERE-->	<!-- FEATURED ARTICLES END HERE-->	
     <hr>  <!-- Horizontal line across page -->

	 <div class = "Trending-Title">                   <!--Trending News Articles-->
		<h2> Rest of News</h2>
	 </div>

     <div id = "Article" class = "Article">
       <h2> Hellas Verona shock Fiorentina </h2>
        <img src = "News_Images/HellasVerona.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Verona1()">Read More</button>
        <div id = "Verona1" class = "display">
            <div id = "Veronachoose1"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Juventus beat 9 man Chievo </h2>
        <img src = "News_Images/Juventus_Chievo.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Juventus1()">Read More</button>
        <div id = "Juventus1" class = "display">
            <div id = "Juventuschoose1"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Controversy at Crotone match </h2>
        <img src = "News_Images/Tagliavento.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Crotone1()">Read More</button>
        <div id = "Crotone1" class = "display">
            <div id = "Crotonechoose1"></div>
        </div>
    </div>

     <div id = "Article" class = "Article">
       <h2> Inter and Roma share the spoils </h2>
        <img src = "News_Images/IntervsRoma.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "ASRoma1()">Read More</button>
        <div id = "ASRoma1" class = "display">
            <div id = "ASRomachoose1"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Milan struggle past Cagliari </h2>
        <img src = "News_Images/Gattuso.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "ACMilan1()">Read More</button>
        <div id = "ACMilan1" class = "display">
            <div id = "ACMilanchoose1"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Lazio embarrass Chievo Verona </h2>
        <img src = "News_Images/Lazio_Chievo.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Lazio1()">Read More</button>
        <div id = "Lazio1" class = "display">
            <div id = "Laziochoose1"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Napoli squeak past Atalanta </h2>
        <img src = "News_Images/Napoli_Atalanta.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Napoli1()">Read More</button>
        <div id = "Napoli1" class = "display">
            <div id = "Napolichoose1"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Bologna cruise past Benevento </h2>
        <img src = "News_Images/Bologna_Benevento.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Bologna1()">Read More</button>
        <div id = "Bologna1" class = "display">
            <div id = "Bolognachoose1"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Udinise and SPAL settle for draw </h2>
        <img src = "News_Images/Udinese_SPAL.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Udinese1()">Read More</button>
        <div id = "Udinese1" class = "display">
            <div id = "Udinesechoose1"></div>
        </div>
    </div>
	 
	 
    <div id = "Article" class = "Article">
       <h2> Atalanta struggle past Verona </h2>
        <img src = "News_Images/Test1.jpg" alt = "Udine" width = "330" height = "180">
        <p><i>Matteo Buonastella</i>, May 22, 2017</p>
        <button  class="btn btn-info"  onclick = "Atalanta1()">Read More</button>
        <div id = "Atalanta1" class = "display">
            <div id = "Atalantachoose1"></div>
        </div>
    </div>

</div>





	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 	 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	 </body>
</html>
