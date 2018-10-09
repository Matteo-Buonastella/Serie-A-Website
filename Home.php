<!DOCTYPE html>
    <html>  
        <head>
            <title> Italian Serie A  </title>  
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> 
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <?php
                include('php/connect-mysql.php'); //SQL Database access
                include('php/Heading.php');
            ?>
            <meta charset="UTF-8" />
            <link rel = "shortcut icon" href = "images/SerieALogo2.png"/>
            <link rel="stylesheet" href="css/Theme.css"/>
            <link rel="stylesheet" href="css/Home.css"/>
            <script src = "js/sort.js"></script>
            <script src = "js/home.js"></script>
            
        </head>
    

     <body>
        <header>
            <div class = "logo">
				 <img src = "images/SerieALogo.png" alt = "Serie A" > 
            </div>
            <div class = "logo_national">
				 <img src = "images/Italy.png" alt = "Serie A" > 
            </div>
            <?php
                display_heading_main_page(); //Function displays all the team logos in header
            ?>
        </header>

        <?php
            main_page_menu_bar(); //Function displays all the team logos in header
        ?>

        <div class = "Fixtures">
            <h2 class = "Upcoming"> Upcoming Fixtures:</h2>          
                <div class = "trending">                               <!--Trending news articles on the side, currently 2-->
                    <h2> Featured News </h2>
                        <div class = "wrapping">
                            <article>
                                <h3>What Next for Italy?</h3> 
                                <img src = "News_Images/Italy_Dissapointed.jpg" alt = "Joe" width="225" height = "150">
                                <button class = "btn btn-block btn-primary" onclick ="Change(); scrollWin();"><p>Read</p></button>             
                            </article>

                            <script>
                            function Change(){               //Loads the news page and sets scroll to yes so that news.js lowers the page
                            document.location.href = "News.html?scroll=yes";
                            }
                            </script>
                        
                            
                            <article>
                                <h3>Where to go for Inter?</h3>
                                <img src = "News_Images/Spaletti_Dissapointed.jpg" alt = "Spaletti" width="225" height = "150">
                                <button class = "btn btn-block btn-primary" onclick ="Change(); scrollWin();"><p>Read </p></button>
                            </article>
                        </div>
                </div>

        </div>


        <section class = "UpcomingFixtures" id = "UpcomingFixtures">    <!-- Function that determines the upcoming fixtures for all teams -->
            <script>  Upcoming(); </script>
        </section>
        <hr>  <!-- Horizontal line across page -->


      <!--  <script>
        $('.handle').on('click', function(){
            $('nav ul').toggleClass('showing')
        });
        </script> -->

        

            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
     </body>
</html>
