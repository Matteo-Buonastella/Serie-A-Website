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
            <link rel="stylesheet" href="css/Schedule.css"/>
            <script src = "js/sort.js"></script>
            
        </head>
    <body>
        <header>
            <div class = "logo">
				 <img src = "images/SerieALogo.png" alt = "Serie A"> 
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

        <body>
            <section class="Schedule">
                <h2> Schedule </h2> 
                    <div id = "Upcoming">   
                        <script> UpcomingWeek() </script>    <!-- Function displays numerically the upcoming week -->  
                    </div> 
                <form name = "form_schedule" action = "">
                    <select id = "s1" name = "s1" onchange = "schedule('this.form')">
                        <option value = "Week 1" selected> Week 1 </option>
                        <option value = "Week 2"> Week 2 </option>
                        <option value = "Week 3"> Week 3 </option>
                        <option value = "Week 4"> Week 4 </option>
                        <option value = "Week 5"> Week 5 </option>
                        <option value = "Week 6"> Week 6 </option>
                        <option value = "Week 7"> Week 7 </option>
                        <option value = "Week 8"> Week 8 </option>
                        <option value = "Week 9"> Week 9 </option>
                        <option value = "Week 10"> Week 10 </option>
                        <option value = "Week 11"> Week 11 </option>
                        <option value = "Week 12"> Week 12 </option>
                        <option value = "Week 13"> Week 13 </option>
                        <option value = "Week 14"> Week 14 </option>
                        <option value = "Week 15"> Week 15 </option>
                        <option value = "Week 16"> Week 16 </option>
                        <option value = "Week 17"> Week 17 </option>
                        <option value = "Week 18"> Week 18 </option>
                        <option value = "Week 19"> Week 19 </option>
                        <option value = "Week 20"> Week 20 </option>
                        <option value = "Week 21"> Week 21 </option>
                        <option value = "Week 22"> Week 22 </option>
                        <option value = "Week 23"> Week 23 </option>
                        <option value = "Week 24"> Week 24 </option>
                        <option value = "Week 25"> Week 25 </option>
                        <option value = "Week 26"> Week 26 </option>
                        <option value = "Week 27"> Week 27 </option>
                        <option value = "Week 28"> Week 28 </option>
                        <option value = "Week 29"> Week 29 </option>
                        <option value = "Week 30"> Week 30 </option>
                        <option value = "Week 31"> Week 31 </option>
                        <option value = "Week 32"> Week 32 </option>
                        <option value = "Week 33"> Week 33 </option>
                        <option value = "Week 34"> Week 34 </option>
                        <option value = "Week 35"> Week 35 </option>
                        <option value = "Week 36"> Week 36 </option>
                        <option value = "Week 37"> Week 37 </option>
                        <option value = "Week 38"> Week 38 </option>
                        <option value = "Upcoming"> Upcoming</option>            <!-- Value is set to 39 for upcoming fixtures -->
                        <option value = "All Weeks"> All Results </option>       <!-- Value is set to 40 for All Results-->
                    </select>
                </form>          
                        <table border = "2" id = "League_Schedule">
                            <tr>
                                <th> Home</th> 
                                <th> Result </th>               
                                <th> Away </th>
                            </tr>
                        </table>
            </section>



<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
     </body>
</html>