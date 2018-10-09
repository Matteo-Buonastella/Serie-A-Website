<html>
    <head>
    </head>
    <body>
        <?php
            DEFINE('DB_USER', 'root');
            DEFINE('DB_PSWD', 'looser11');
            DEFINE('DB_HOST', 'localhost:3306/seriea');
            DEFINE('DB_NAME', 'seriea');

            function sqlplayerInfo($id){
                $con = mysqli_connect("localhost", "root", "looser11"); //Connect to database
                if (!$con) {
                    die("Can not connect: " .mysql_error());
                }
                mysqli_select_db($con, "seriea");
                $sql = "SELECT * FROM PLAYERS WHERE TeamId = '" .$id. "'"; //While player is on specified team
                $myData = mysqli_query($con, $sql);
                echo"<table border = 1 id = Player_Table>
                    <col width=130px>
                    <col width=180px>
                    <col width=100px>
                    <col width=70px>
                    <col width=120px>
                    <tr> 
                        <th> Position </th>
                        <th> Name </th>
                        <th> Birthdate </th>
                        <th> Height </th>
                        <th> Nationality </th>
                    </tr>";
                while($record = mysqli_fetch_array($myData)){ //Loop through table
                    echo"<tr>";
                    echo "<td>" . $record['Position'] . "</td>";
                    echo "<td>" . $record['FirstName'] . " " . $record['LastName'] ."</td>";
                    echo "<td>" . $record['DateOfBirth'] . "</td>";
                    echo "<td>" . $record['Height'] . "</td>";
                    echo "<td>" . $record['Nationality'] . "</td>";
                    echo"</tr>";
                }
                echo"</table>";
                mysqli_close($con); //Close connection
            }

            //playerInfo(1);

        ?>

    </body>
</html>