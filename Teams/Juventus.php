<!DOCTYPE html>
    <html>
        <head>
            <title> Italian Serie A  </title>   
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1">
            <?php
                include('../php/connect-mysql.php'); //SQL Database access
                include('../php/Heading.php')
            ?>
            <link rel = "shortcut icon" href = "../images/Juventus.png"/>
            <link rel="stylesheet" href="../css/Theme.css"/>
            <link rel="stylesheet" href="../css/Team.css"/>
            <link rel="stylesheet" href="../css/PlayerTable.css"/>
            <script src = "../js/sort.js"></script>
            <script src = "../js/article.js"></script>
            <script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script> <!-- Chart.js -->
        </head>
    

     <body>
        <header>
			<div class = "logo">
				 <img src = "../images/SerieALogo.png" alt = "Serie A"> 
            </div>
			<div class = "logo_national">
				 <img src = "../images/Italy.png" alt = "Serie A" > 
            </div>
            <?php
                displayHeading(); //Function displays all the team logos in header
            ?>
        </header>
		
        <?php
            menuBar(); //Function displays the menu bar at the top of the page
        ?>
        
    <div class = "Info">
        <h2 class = "TeamName"> Juventus </h2>
        <section class = "position" id = "position"> <!-- Current Position function call -->
                <script> Position(13); </script>
        </section>
        <section class = "form" id = "form">         <!-- Current Form function call -->
                <script> Form(13); </script>
        </section>
        <h4 class = "name"> Allianz Stadium </h4>
            <img src = "../images/Jersey/Juventus_Home.png" class = "Jersey" alt = "Jersey" height = "30%" width = "13%">
            <img src = "../images/Jersey/Juventus_Away.png" class = "Jersey2" alt = "Jersey" height = "30%" width = "14%">

            <img src = "../images/Juventus.png" class = "Juve "alt = "Juventus" height = "20%" width = "7%">
            
            <img src = "../images/Stadiums/JuventusStadium.jpg"  class = "Stadium" alt = "Juve Stadium" width = "28%">
           <h5 class = "opened"> Opened: 2011 &nbsp; &nbsp;    
               <span>   Capacity: 41,000 &nbsp; &nbsp;</span>
               <span>Owned: <span class="glyphicon glyphicon-ok"></span></span> </h5>

        <section class = "nextTeam" id = "nextTeam">  <!-- Next Match -->
                <script> NextMatch(13); </script>
        </section>
    </div>

    <hr>  <!-- Horizontal line across page -->

<div class = "TeamOption">
    <button onclick = "Home()"> Home </button>
    <button onclick = "ClubSchedule(13);" class = "Schedule"> Schedule </button>
    <button onclick = "News()"> News </button>
    <button onclick = "Squad()"> Squad </button>
    <button onclick = "History()"> History </button>
</div>

<div id = "Home">
    <div id = "Record">   <!-- Function displays the record of the club i.e. (3-5-2) -->
        <script> Record(13) </script>
   </div>
</div>

<div id = "Schedule">
    <table border = "2" id = "Club_Schedule">
        <tr> 
            <td> Matchday  </td>
            <td> Result </td>
            <td> Opponent </td>
        </tr>
    </table>
</div>

<div id = "News">

    <div id = "Article" class = "Article">
       <h2> Juventus beat 9 man Chievo </h2>
        <img src = "../News_Images/Juventus_Chievo.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Juventus1()">Read More</button>
        <div id = "Juventus1" class = "display">
            <div id = "Juventuschoose1"></div>
        </div>
    </div>
   
</div>

<div id = "Squad">
    <?php
      sqlplayerInfo(13) //Function that displays players from SQL database
    ?>
</div>

<div id = "History">
    <canvas id = "myChart" width = "400" height = "160"></canvas>
</div>

<script>
    var myChart = document.getElementById("myChart").getContext("2d");

    var historyChart = new Chart(myChart, {
        type:'line',
        data:{
            labels:['2011/12', '2012/13', '2013/14', '2014/15', '2015/16', '2016/17'],
            datasets:[{
                label: 'League Position',
                fill: false,
                lineTension: 0,
                backgroundColor: "white",
                borderColor: "black",
                borderCapStyle: 'butt',
                data: [1, 1, 1, 1, 1, 1]   //League position
            }]
        },
        options:{
        title: {
            display: true,
            text: 'Serie A History',
            fontSize: 20,   
            
        },
         scales: {
                yAxes : [{
                    ticks : { 
                        fontColor: "black",      
                        reverse: true,                 
                        fontSize: 14,          
                        max : 20,  
                        min : 1,
                        stepSize: 1,
                    }
                }],
                xAxes : [{
                    ticks : {   
                         fontColor: "black",    
                         fontSize: 14,            
                        
                    }
                }]
            }
        
        }
    });
</script>

        
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
     </body>
</html>
