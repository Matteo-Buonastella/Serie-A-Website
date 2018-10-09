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
            <link rel="stylesheet" href="css/About.css"/>
            <script src = "js/sort.js"></script>
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

        <footer class = "bottom">
            <div class = "footer">
                
                
            </div>
        </footer>

        <?php
            main_page_menu_bar(); //Function displays all the team logos in header
        ?>


        <section class = "About">
            <p> This is a website for <strong>Serie A</strong> fans who want to be part of a community that focuses on the Serie A
                and the Serie A <strong>only.</strong> We seem to be living in a time where people think that every league dwarfs in
                comparison to the English Premier League, but if your reading this
                then you know that this statement is quite simply, untrue. Unfortunately, many of the well established websites believe
                that the only league that matters is the Premier League, and so leagues like Serie A, La Liga and Bundesliga play second
                fiddle to the Premier League. This is a website <strong> made by </strong> and <strong> run by </strong> Serie A fans and is
                geared towards the Serie A and it's many fans
                who are desperate for their league to have some attention, which is exactly what this website will bring. So if you're a Serie A
                fan, whether it be casual or serious, then stay tuned to this website as it's constantly being developped to give you the ultimate
                <strong>Serie A experience.</strong>
            </p>

            <p> If your interested in becoming a writer for the website or if you want to make a feature request, contact me at
                <strong> example@gmail.com </strong>
            </p>
        </section>
        
        <section class = "Partners">
            <p> For the best experience, please use Google Chrome (Recommended) or Firefox </p>
            <p><strong>Official Partners</strong></p>
        </section>
    

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
     </body>
    </html>
    