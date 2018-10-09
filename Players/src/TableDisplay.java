import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

//This class displays the team tables with all the players from the chosen team
public class TableDisplay {

    private int id = 0;
    private String firstName = "";
    private String lastName = "";
    private String birthdate = "";
    private String nationality = "";
    private String height = "";
    private String position = "";
    private String foot = "";
    private int teamId = 0;
    private int databaseTeamSum = 0;

    TableDisplay(){}

    TableDisplay(int playerId, String firstName, String lastName, String birthdate, String nationality, String height, String position, String foot, int teamId){
        setId(playerId);
        setFirstName(firstName);
        setLastName(lastName);
        setBirthdate(birthdate);
        setNationality(nationality);
        setHeight(height);
        setPosition(position);
        setFoot(foot);
        setTeamId(teamId);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getFoot() {
        return foot;
    }

    public void setFoot(String foot) {
        this.foot = foot;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public int getDatabaseTeamSum() {
        return databaseTeamSum;
    }

    public void setDatabaseTeamSum(int databaseTeamSum) {
        this.databaseTeamSum = databaseTeamSum;
    }

    //Function validates input and returns true or false
    Boolean validateInput(int team_id, String fName, String lName, String nationality, String height, String position, String foot){
        databaseTeamSum();
        if (validateTeam(team_id) && validateFirstName(fName) && validateLastName(lName) && validateNationality(nationality) && validateHeight(height) && validatePosition(position) && validateFoot(foot)){
            System.out.println(fName);
            return true;
        }
        else{
            AlertBox.display("Error", "Unable to Update Player", true);
        }
        return false;
    }

    void updatePlayer(int player_id, int team_id, String fName, String lName, String nationality, String height, String position, String foot){
        try{
            DatabaseConnection DatabaseConnect= new DatabaseConnection();     //Database Connection object
            DatabaseConnect.getConnection();                                  //Get Connection to database
            String query = "Update players set FirstName = ?, LastName = ?, Nationality = ?, Height = ?, position = ?, StrongFoot = ?, TeamId = ? where PlayerId = '" + player_id + "'";
            PreparedStatement input = DatabaseConnect.myConn.prepareStatement(query);
            input.setString(1, fName);
            input.setString(2, lName);
            input.setString(3, nationality);
            input.setString(4, height);
            input.setString(5, position);
            input.setString(6, foot);
            input.setInt(7, team_id);
            input.executeUpdate();
        } catch(Exception e){
            System.out.println("Update Player: " + e);
        }
    }

    //Function recieves player id and deletes from database
    Boolean deletePlayer(int player_id){
        try{
            DatabaseConnection DatabaseConnect= new DatabaseConnection();     //Database Connection object
            DatabaseConnect.getConnection();                                  //Get Connection to database
            String query = "Delete from players where PlayerId = '" + player_id + "'";
            PreparedStatement input = DatabaseConnect.myConn.prepareStatement(query);
            input.executeUpdate();
            return true;
        } catch(Exception e){
            System.out.println("Delete Player Error: " + e);
            return false;
        }
    }

    //Gets Number of Teams in Database
    void databaseTeamSum(){
        int num = 0;
        try {
            DatabaseConnection DatabaseConnect = new DatabaseConnection();     //Database Connection object
            DatabaseConnect.getConnection();
            Statement mystatement = DatabaseConnect.myConn.createStatement();
            ResultSet rs = mystatement.executeQuery("Select * from teams");
            while(rs.next()) {
                num++;
            }
        } catch(Exception e){
            System.out.println("Databse Team Sum Error: " + e);
        }
        setDatabaseTeamSum(num);
    }

    //Validates Team ID
    Boolean validateTeam(int id){
        if (id >= 0 && id < databaseTeamSum) {
            return true;
        }
        else{
            return false;
        }
    }

    //Validates First Name
    Boolean validateFirstName(String fName){
        if (fName == "" || fName == null) {
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
    //Validates Nationality
    Boolean validateNationality(String nationality){
        if (nationality == "") {
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
        if (position.equals("Goalkeeper") || position.equals("Defender") || position.equals("Midfielder") || position.equals("Attacker")){
            return true;
        }
        else{
            return false;
        }
    }

    //Validates strongFoot
    Boolean validateFoot(String foot){
        if (foot.equals("Right") || foot.equals("Left") || foot.equals("Both")){
            return true;
        }
        else
        {
            return false;
        }
    }

}
