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
            <link rel="stylesheet" href="css/Table.css"/>
            <script src = "js/sort.js"></script>
            <script src = "jquery/jquery.js"></script>
            
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

                                            <!--Results which are located on both side of the standings-->
        <section class = "Results">         <!-- Calls the Result function and AwayResult function to display logo and result -->
            <h3> Results </h3>
            <div class = "f1">
                <div class = "f1a" id = "f1a">
                    <script>  Result(1) </script>
                </div>      
                   
                <div class = "f1b" id = "f1b">
                     <script>  AwayResult(1) </script>
                </div>
            </div>

            <div class = "f2">
                <div class = "f2a" id = "f2a">
                   <script>  Result(2) </script>
                </div>      
                   
                <div class = "f2b" id = "f2b">
                     <script>  AwayResult(2) </script>
                </div>
            </div>

             <div class = "f3">
                <div class = "f3a" id = "f3a">
                    <script>  Result(3) </script>
                </div>      
                   
                <div class = "f3b" id = "f3b">
                    <script>  AwayResult(3) </script>
                </div>
            </div>

            <div class = "f4">
                <div class = "f4a" id = "f4a">
                     <script>  Result(4) </script>
                </div>      
                   
                <div class = "f4b" id = "f4b">
                    <script>  AwayResult(4) </script>
                </div>
            </div>

            <div class = "f5">
                <div class = "f5a" id = "f5a">
                    <script>  Result(5) </script>
                </div>      
                   
                <div class = "f5b" id = "f5b">
                    <script>  AwayResult(5) </script>
                </div>
            </div>

            <div class = "f6">
                <div class = "f6a" id = "f6a">
                   <script>  Result(6) </script>
                </div>      
                   
                <div class = "f6b" id = "f6b">
                    <script>  AwayResult(6) </script>
                </div>
            </div>

             <div class = "f7">
                <div class = "f7a" id = "f7a">
                   <script>  Result(7) </script>
                </div>      
                   
                <div class = "f7b" id = "f7b">
                    <script>  AwayResult(7) </script>
                </div>
            </div>

            <div class = "f8">
                <div class = "f8a" id = "f8a">
                   <script>  Result(8) </script>
                </div>      
                   
                <div class = "f8b" id = "f8b">
                    <script>  AwayResult(8) </script>
                </div>
            </div>

            <div class = "f9">
                <div class = "f9a" id = "f9a">
                     <script>  Result(9) </script>
                </div>      
                   
                <div class = "f9b" id = "f9b">
                    <script>  AwayResult(9) </script>
                </div>
            </div>

            <div class = "f10">
                <div class = "f10a" id = "f10a">
                   <script>  Result(10) </script>
                </div>      
                   
                <div class = "f10b" id = "f10b">
                   <script>  AwayResult(10) </script>
                </div>
            </div>
        </section>

                                        <!--Layout for the tables which is filled with JS file-->
        <section class="Tables">

            <h2> Tables </h2>
            
                <table border = "2" id = "table">
                    <tr>
                        <th> Team </th>
                        <th> GP </th>
                        <th> W </th>
                        <th> D </th>
                        <th> L </th>
                        <th> GF </th>
                        <th> GA </th>
                        <th> GD </th>
                        <th> PTS </th>
                    </tr>

                </table>
        </section>
    
<div class = "modified">
    <script language="Javascript">
        document.write("Last Updated: " + document.lastModified);
    </script>
</div>



<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
     </body>
</html>
