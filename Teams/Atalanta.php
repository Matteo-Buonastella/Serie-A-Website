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
            <link rel = "shortcut icon" href = "../images/Atalanta.png"/>
            <link rel="stylesheet" href="../css/Theme.css"/>
			<link rel="stylesheet" href="../css/Atalanta.css"/>
            <link rel="stylesheet" href="../css/PlayerTable.css"/>
            <script src = "../js/sort.js"></script>
             <script src = "../js/article.js"></script>
            <script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script> <!-- Chart.js -->
        </head>
    

     <body>
        <header>
			<div class = "logo">
				 <img src = "../images/SerieALogo.png" alt = "Serie A" > 
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
    <h2 class = "TeamName"> Atalanta </h2>
        <section class = "position" id = "position">
                <script> Position(3); </script>
        </section>
        <section class = "form" id = "form">
                <script> Form(3); </script>
        </section>
        
 
        <h4 class = "name"> Stadio Atleti Azzurri d'Italia </h4>
            <img src = "../images/Jersey/Atalanta_Home.png" class = "Jersey" alt = "Jersey" height = "30%" width = "10%">
            <img src = "../images/Jersey/Atalanta_Away.png" class = "Jersey2" alt = "Jersey" height = "30%" width = "12%">

            <img src = "../images/Atalanta.png" class = "Atalanta" alt = "Atalanta" height = "20%" width = "7.5%">
            
            <img src = "../images/Stadiums/AtalantaStadium.jpg"  class = "Stadium" alt = "Atalanta Stadium" width = "32%">
           <h5 class = "opened"> Opened: 1927 &nbsp; &nbsp;    
               <span>   Capacity: 21,300 &nbsp; &nbsp;</span>
               <span>Owned: <span class="glyphicon glyphicon-ok"></span></span> </h5>

        <section class = "nextTeam" id = "nextTeam">  <!-- Next Match -->
                <script> NextMatch(3); </script>
        </section>
</div>

             
    <hr>  <!-- Horizontal line across page -->

<div class = "TeamOption">
    <button onclick = "Home()"> Home </button>
    <button onclick = "ClubSchedule(3);"> Schedule </button>
    <button onclick = "News()"> News </button>
    <button onclick = "Squad()"> Squad </button>
    <button onclick = "History()"> History </button>
</div>


<div id = "Home">
    <div id = "Record">   <!-- Function displays the record of the club i.e. (3-5-2) -->
        <script> Record(3) </script>
   </div>
</div>

<div id = "Schedule">
    <table border = "2" id = "Club_Schedule">
        <tr> 
            <td> Matchday </td>
            <td> Result </td>
            <td> Opponent </td>
        </tr>
    </table>
</div>

<!-- Display class is ised only for the show less button which closes all articles that are open, which is why the class name is the same for all -->
<!-- The Display id gets incremented by 1 each time a new article is inputed which is used for the read more button -->

<div id = "News"> 

    <div id = "Article" class = "Article">
       <h2> Napoli squeak past Atalanta </h2>
        <img src = "../News_Images/Napoli_Atalanta.jpg" alt = "Udine" width = "360" height = "180">
        <p><i>Matteo Buonastella</i>, January 21, 2018</p>
        <button  class="btn btn-info"  onclick = "Atalanta4()">Read More</button>
        <div id = "Atalanta4" class = "display">
            <div id = "Atalantachoose4"></div>
        </div>
    </div>

   <div id = "Article" class = "Article">                    
       <h2> Atalanta Aiming for Europe? </h2>
        <img src = "../News_Images/Test1.jpg" alt = "Udine" width = "330" height = "180">
        <p><i>Matteo Buonastella</i>, May 22, 2017</p>
        <button  class="btn btn-info"  onclick = "Atalanta3()">Read More</button>
        <div id = "Atalanta3" class = "display">
            <div id = "Atalantachoose3"></div>
        </div>
    </div>

    <div id = "Article" class = "Article">
       <h2> Atalanta Dominate Everton </h2>
        <img src = "../News_Images/Atalanta_Everton.jpg" alt = "Udine" width = "350" height = "180">
        <p><i>Matteo Buonastella</i>, May 22, 2017</p>
        <button  class="btn btn-info"  onclick = "Atalanta2()">Read More</button>
        <div id = "Atalanta2" class = "display">
            <div id = "Atalantachoose2"></div>
        </div>
    </div>
    
    <div id = "Article" class = "Article">
       <h2> Atalanta struggle past Verona </h2>
        <img src = "../News_Images/Test1.jpg" alt = "Udine" width = "330" height = "180">
        <p><i>Matteo Buonastella</i>, May 22, 2017</p>
        <button  class="btn btn-info"  onclick = "Atalanta1()">Read More</button>
        <div id = "Atalanta1" class = "display">
            <div id = "Atalantachoose1"></div>
        </div>
    </div>

</div>


<div id = "Squad">
    <img src = "../News_Images/under_construction.jpg" alt = "Udine" width = "100%" height = "500">
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
                backgroundColor: "blue",
                borderColor: "black",
                borderCapStyle: 'butt',
                data: [12, 15, 11, 17, 13, 4]
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
