import javafx.scene.control.CheckBox;
import javafx.scene.control.RadioButton;
import java.sql.PreparedStatement;
import java.time.format.DateTimeFormatter;
import java.sql.*;
import java.time.LocalDate;

public class PlayerDatabase {
    //Function returns an array of all teams in the database
    String[] selectTeam() {
        String [] teams = new String[20];
        try {
            DatabaseConnection DatabaseConnect = new DatabaseConnection();     //Database Connection object
            DatabaseConnect.getConnection();                                  //Get Connection to database
            Statement mystatement = DatabaseConnect.myConn.createStatement();
            ResultSet myRs = mystatement.executeQuery("select * from teams");
            for (int i = 0; i < 20; i++) {
                myRs.next();
                teams[i] = myRs.getString("Name");
            }
        } catch (Exception error) {
            System.out.println("Player Database Error: " + error);
        }
        return teams;
    }

    //Function adds player to database
    void addPlayer(String team, String fName, String lName, LocalDate date, String nationality, String height, String position, String foot){
        int teamId = getTeamID(team); //Gets team Id from database
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/LL/yyyy");
        String formattedDate = date.format(formatter);
        try{
            DatabaseConnection DatabaseConnect= new DatabaseConnection();     //Database Connection object
            DatabaseConnect.getConnection();                                  //Get Connection to database
            String club = ("Insert into players ( FirstName, LastName, DateOfBirth, Nationality, Height, Position, StrongFoot, TeamId) Values (?,?,?,?,?,?,?,?)");
            PreparedStatement input = DatabaseConnect.myConn.prepareStatement(club);
            input.setString(1, fName);
            input.setString(2, lName);
            input.setString(3, formattedDate);
            input.setString(4, nationality);
            input.setString(5, height);
            input.setString(6, position);
            input.setString(7, foot);
            input.setInt(8, teamId);
            input.executeUpdate();

        } catch(Exception error){
            System.out.println("Add Database Player Error: " + error);
        }
    }

    //Function sets the strong foot of the player
    static String setFoot(RadioButton box1, RadioButton box2, RadioButton box3){
        String foot = "";

        if (box1.isSelected()){
            foot += "Left";
        }
        else if (box2.isSelected()){
            foot += "Right";
        }
        else if (box3.isSelected()){
            foot += "Both";
        }
        return foot;
    }

    //Function sets the position of the player
    static String setPosition(CheckBox box1, CheckBox box2, CheckBox box3, CheckBox box4){
        String position = "";

        if (box1.isSelected()){
            position += "Goalkeeper";
        }
        else if (box2.isSelected()){
            position += "Defender";
        }
        else if (box3.isSelected()){
            position += "Midfielder";
        }
        else if (box4.isSelected()){
            position += "Attacker";
        }
        return position;
    }

    //Function validates input and returns true or false
    Boolean validateInput(String team, String fName, String lName, LocalDate date, String nationality, String height, String position, String foot){
        if (validateFirstName(fName) && validateLastName(lName) && validateDateOfBirth(date) && validateNationality(nationality) && validateHeight(height) && validatePosition(position) && validateFoot(foot)){
            return true;
        }
        return false;
    }

    //Validates First Name
    Boolean validateFirstName(String fName){
        if (fName == "") {
            return false;
        }
        else if (fName.matches("[a-zA-Z]+")){
            return true;
        }
        else {
            return false;
        }
    }

    //Validates Last Name
    Boolean validateLastName(String lName){
        if (lName == "") {
            return false;
        }
        else if (lName.matches("[a-zA-Z]+")){
            return true;
        }
        else {
            return false;
        }
    }

    //Validates date of birth
    Boolean validateDateOfBirth(LocalDate date){
        if (date == null){
            return false;
        }
        else{
            return true;
        }
    }

    //Validates Nationality
    Boolean validateNationality(String nationality){
        if (nationality.equals("")) {
            return false;
        }
        else if (nationality.matches("[a-zA-Z]+")){
            return true;
        }
        else {
            return false;
        }
    }

    //Validates Height
    Boolean validateHeight(String height){
        if (height == ""){
            return false;
        }
        else{
            return true;
        }
    }

    //Validates position
    Boolean validatePosition(String position){
        if (position == ""){
            return false;
        }
        else{
            return true;
        }
    }

    //Validates strongFoot
    Boolean validateFoot(String foot){
        if (foot.equals("")){
            return false;
        }
        else
        {
            return true;
        }
    }

    //Function recieves team and gets database Id
    int getTeamID(String teamName){
        int teamId = 0;
        try{
            DatabaseConnection DatabaseConnect= new DatabaseConnection();     //Database Connection object
            DatabaseConnect.getConnection();                                  //Get Connection to database
            Statement mystatement = DatabaseConnect.myConn.createStatement();
            ResultSet club = mystatement.executeQuery("select * from teams where Name = '" + teamName + "'");  //Gets team name from database
            while(club.next()) {
                teamId = club.getInt("Id");
            }
            } catch(Exception error){
            System.out.println("Get Database Team Error: " + error);
        }
        return teamId;
    }


}









