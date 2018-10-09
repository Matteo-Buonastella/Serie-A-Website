import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.image.Image;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.ImageView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.VBox;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;
import javafx.util.Duration;
import org.controlsfx.control.Notifications;
import javafx.scene.control.cell.PropertyValueFactory;
import java.sql.ResultSet;
import java.sql.Statement;



public class Display extends Application {
    Stage window;
    Scene scene1, scene2, scene3, scene4;
    Button Add, Edit, Remove, Reset;
    BorderPane layout, layout1, layout2, layout3;

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage){
        //Create Objects
        PlayerDatabase playerDatabase = new PlayerDatabase();
        TableDisplay tableDisplay = new TableDisplay();
        //End Create Objects

        window = primaryStage;
        window.setResizable(false);
        window.setTitle("Serie A Database Connection");
        window.getIcons().add(new Image("Images/serie a.png"));

        //Menu
        Menu fileMenu = new Menu("Player");

        //Menu Items
        MenuItem addPlayer = new MenuItem("Add Player");
            addPlayer.setOnAction(e-> window.setScene(scene2));
        MenuItem editPlayer = new MenuItem("Edit Player");
            editPlayer.setOnAction(e-> window.setScene(scene3));
        fileMenu.getItems().addAll(addPlayer, editPlayer);

        ///////////////////////////////////////// HOME SCENE ///////////////////////////////////////
        MenuBar menuBar = new MenuBar();
        menuBar.getMenus().addAll(fileMenu);

        layout = new BorderPane();
        layout.setTop(menuBar);

        scene1  = new Scene(layout, 900, 550);

        ////////////////////////////////////// END HOME SCENE ///////////////////////////////////


        /////////////////////////////////////// ADD PLAYER SCENE ////////////////////////////////////////////
        MenuBar menuBar1 = new MenuBar();
        menuBar1.getMenus().addAll(fileMenu);

        HBox leftMenu = new HBox();
        VBox centerMenu = new VBox();
        VBox rightMenu = new VBox();
        HBox bottomMenu = new HBox();

        //**** Start Left Menu ****//
        ChoiceBox<String> choiceBox = new ChoiceBox<>();
        choiceBox.getItems().addAll(playerDatabase.selectTeam());  //Displays all the teams in a dropdown
        choiceBox.getSelectionModel().selectFirst();

        leftMenu.setMargin(choiceBox, new Insets(30,0,0,25));
        leftMenu.getChildren().add(choiceBox);

        //**** End Left Menu ****//

        //**** Start Center Menu ****//
        TextField firstName = new TextField();
        firstName.setPromptText("First Name");
        TextField lastName = new TextField();
        lastName.setPromptText("Last Name");
        DatePicker datePicker = new DatePicker();
        datePicker.setPromptText("Date of Birth");
        TextField nationality = new TextField();
        nationality.setPromptText("Nationality EX. Italy");
        TextField height = new TextField();
        height.setPromptText("Height (ft)");
        centerMenu.setAlignment(Pos.CENTER);
        centerMenu.setMargin(firstName, new Insets(10,20,10,0));
        firstName.setMaxWidth(150);
        centerMenu.setMargin(lastName, new Insets(0,20,0,0));
        lastName.setMaxWidth(150);
        centerMenu.setMargin(datePicker, new Insets(40,15,0,0));
        datePicker.setMaxWidth(155);
        centerMenu.setMargin(nationality, new Insets(10,20,0,0));
        nationality.setMaxWidth(150);
        centerMenu.setMargin(height, new Insets(10,24,0,0));
        height.setMaxWidth(73);
        centerMenu.getChildren().addAll(firstName, lastName, datePicker, nationality, height);
        //**** End Center Menu ****//

        //**** Start Right Menu ****//
        Label position = new Label("Position");
        CheckBox box1 = new CheckBox("Goalkeeper");
        CheckBox box2 = new CheckBox("Defender");
        CheckBox box3 = new CheckBox("Midfielder");
        CheckBox box4 = new CheckBox("Attacker");
        Label foot = new Label("Strong Foot");

        RadioButton option1 = new RadioButton("Left");
        RadioButton option2 = new RadioButton("Right");
        RadioButton option3 = new RadioButton("Both");
        rightMenu.setAlignment(Pos.CENTER);
        rightMenu.setMargin(position, new Insets(0,44,0,0));
        rightMenu.setMargin(box1, new Insets(5,44,6,0));
        rightMenu.setMargin(box2, new Insets(0,55,6,0));
        rightMenu.setMargin(box3, new Insets(0,50,6,0));
        rightMenu.setMargin(box4, new Insets(0,61,25,0));
        rightMenu.setMargin(foot, new Insets(0,50,0,0));
        rightMenu.setMargin(option1, new Insets(5,58,5,0));
        rightMenu.setMargin(option2, new Insets(0,48,5,0));
        rightMenu.setMargin(option3, new Insets(0,52,5,0));
        rightMenu.getChildren().addAll(position, box1, box2, box3, box4, foot, option1, option2, option3);
        //**** End Right Menu ****//

        //**** Start Bottom Menu ****//
        Add = new Button("Add Player");
        Add.setStyle("-fx-base: #66ff33;");
        Reset = new Button("Reset");
        Reset.setStyle("-fx-base: #ee2211;");
        //Adds to database if data is valid
        Add.setOnAction(e -> {
            try {
                String strongFoot = PlayerDatabase.setFoot(option1, option2, option3); //Sets strong foot
                String playerPosition = playerDatabase.setPosition(box1, box2, box3, box4); //Sets position
                if (playerDatabase.validateInput(choiceBox.getSelectionModel().getSelectedItem(), firstName.getText(), lastName.getText(), datePicker.getValue(), nationality.getText(), height.getText(), playerPosition, strongFoot)){
                    //Sends to database
                    playerDatabase.addPlayer(choiceBox.getSelectionModel().getSelectedItem(), firstName.getText(), lastName.getText(), datePicker.getValue(), nationality.getText(), height.getText(), playerPosition, strongFoot);
                    //Clears the fields
                    firstName.clear();
                    lastName.clear();
                    nationality.clear();
                    datePicker.getEditor().clear();
                    height.clear();
                    box1.setSelected(false);
                    box2.setSelected(false);
                    box3.setSelected(false);
                    box4.setSelected(false);
                    option1.setSelected(false);
                    option2.setSelected(false);
                    option3.setSelected(false);

                    Image image = new Image("/Images/Checkmark.png");
                    Notifications.create()
                            .title("Success")
                            .text("Player added to database")
                            .graphic(new ImageView(image))
                            .hideAfter(Duration.seconds(2))
                            .position(Pos.TOP_CENTER)
                            .showInformation();
                }
                else{
                    AlertBox.display("Error", "Could not add player to database", true);
                }
            } catch (Exception ex) {
                System.out.println("Display Error: " + ex);
            }});
        //Clears all current input
        Reset.setOnAction(e -> {
            firstName.clear();
            lastName.clear();
            nationality.clear();
            datePicker.getEditor().clear();
            height.clear();
            box1.setSelected(false);
            box2.setSelected(false);
            box3.setSelected(false);
            box4.setSelected(false);
            option1.setSelected(false);
            option2.setSelected(false);
            option3.setSelected(false);
        });
        bottomMenu.setAlignment(Pos.CENTER);
        bottomMenu.setMargin(Add, new Insets(0,0,20,350));
        bottomMenu.setMargin(Reset, new Insets(0,0,20,310));
        bottomMenu.getChildren().addAll(Add, Reset);
        //**** End Bottom Menu ****//

        layout1 = new BorderPane();
        layout1.setTop(menuBar1);
        layout1.setLeft(leftMenu);
        layout1.setCenter(centerMenu);
        layout1.setRight(rightMenu);
        layout1.setBottom(bottomMenu);

        scene2 = new Scene(layout1, 900, 550);
        //////////////////////////////////////////END ADD PLAYER SCENE/////////////////////////////////


        ///////////////////////////////////////// EDIT PLAYER SCENE ////////////////////////////////////
        MenuBar menuBar2 = new MenuBar();
        menuBar2.getMenus().addAll(fileMenu);

        VBox leftEditMenu = new VBox();
        HBox rightEditMenu = new HBox();
        HBox bottomEditMenu = new HBox();

        //**** Start Left Menu ****//
        ChoiceBox<String> choiceBox2 = new ChoiceBox<>();
        choiceBox2.getItems().addAll(playerDatabase.selectTeam());  //Displays all the teams in a dropdown
        choiceBox2.getSelectionModel().selectFirst();

        //Button creates AlertBox that displays Team ID's
        Button teamIdAlert = new Button("Team ID");
        teamIdAlert.setOnAction(e -> {
            AlertBox.display("Team Id's", "1: AC Milan \n2: AS Roma \n3: Atalanta \n4: Bologna \n5: Benevento \n6: Cagliari \n" +
                    "7: Chievo \n8: Crotone \n9: Fiorentina \n10: Genoa \n11: Hellas Verona \n12: Inter \n13: Juventus \n14: Lazio \n" +
                    "15: Napoli \n16: Sampdoria \n17: Sassuolo \n18: SPAL \n19: Torino \n20: Udinese", false);
        });

        TextField playerID = new TextField();
        playerID.setPromptText("ID");
        playerID.setMaxWidth(60);

        TextField firstname1 = new TextField();
        firstname1.setPromptText("First Name");
        firstname1.setMaxWidth(150);

        TextField lastname1 = new TextField();
        lastname1.setPromptText("Last Name");
        lastname1.setMaxWidth(150);

        DatePicker datePicker1 = new DatePicker();
        datePicker1.setPromptText("Date of Birth");
        datePicker1.setMaxWidth(155);

        TextField nationality1 = new TextField();
        nationality1.setPromptText("Nationality");
        nationality1.setMaxWidth(150);

        TextField height1 = new TextField();
        height1.setPromptText("Height");
        height1.setMaxWidth(73);

        TextField foot1 = new TextField();
        foot1.setPromptText("Strong Foot");
        foot1.setMaxWidth(100);
        final Tooltip strongFoot = new Tooltip();
        strongFoot.setText("1.Left  2.Right  3.Both ");
        foot1.setTooltip(strongFoot);

        TextField position1 = new TextField();
        position1.setPromptText("Position");
        position1.setMaxWidth(100);
        final Tooltip positionTip = new Tooltip();
        positionTip .setText("1.Goalkeeper  2.Defender  3.Midfielder  4.Attacker");
        position1.setTooltip(positionTip );

        TextField teamID = new TextField();
        teamID.setPromptText("Team ID");
        teamID.setMaxWidth(60);

        //**** End Left Menu ****//

        //**** Start Right Menu ****//
        TableView<TableDisplay> table = new TableView<>();
        final ObservableList<TableDisplay> data = FXCollections.observableArrayList();

        TableColumn column1 = new TableColumn("Id");
        column1.setMinWidth(100);
        column1.setCellValueFactory(new PropertyValueFactory<>("id"));

        TableColumn column2 = new TableColumn("First Name");
        column2.setMinWidth(100);
        column2.setCellValueFactory(new PropertyValueFactory<>("firstName"));

        TableColumn column3 = new TableColumn("Last Name");
        column3.setMinWidth(100);
        column3.setCellValueFactory(new PropertyValueFactory<>("lastName"));

        TableColumn column4 = new TableColumn("Birthdate");
        column4.setMinWidth(100);
        column4.setCellValueFactory(new PropertyValueFactory<>("birthdate"));

        TableColumn column5 = new TableColumn("Nationality");
        column5.setMinWidth(100);
        column5.setCellValueFactory(new PropertyValueFactory<>("nationality"));

        TableColumn column6 = new TableColumn("Height");
        column6.setMinWidth(100);
        column6.setCellValueFactory(new PropertyValueFactory<>("height"));

        TableColumn column7 = new TableColumn("Position");
        column7.setMinWidth(100);
        column7.setCellValueFactory(new PropertyValueFactory<>("Position"));

        TableColumn column8 = new TableColumn("Foot");
        column8.setMinWidth(100);
        column8.setCellValueFactory(new PropertyValueFactory<>("foot"));

        TableColumn column9 = new TableColumn("Team Id");
        column9.setMinWidth(100);
        column9.setCellValueFactory(new PropertyValueFactory<>("teamId"));

        Button load = new Button("Load Table");
            load.setOnAction(e -> {
                try {
                    table.getItems().clear(); //Clears table when loading a new team
                    playerID.clear();
                    firstname1.clear();
                    lastname1.clear();
                    nationality1.clear();
                    datePicker1.getEditor().clear();
                    height1.clear();
                    teamID.clear();
                    position1.clear();
                    foot1.clear();
                    int teamId = playerDatabase.getTeamID(choiceBox2.getSelectionModel().getSelectedItem());  //Gets selected team id
                    DatabaseConnection DatabaseConnect = new DatabaseConnection();     //Database Connection object
                    DatabaseConnect.getConnection();
                    Statement mystatement = DatabaseConnect.myConn.createStatement();
                    ResultSet displayPlayer = mystatement.executeQuery("Select * from players where TeamId = '" + teamId + "'");
                    while (displayPlayer.next()) {
                        data.add(new TableDisplay(
                                displayPlayer.getInt("PlayerId"),
                                displayPlayer.getString("FirstName"),
                                displayPlayer.getString("LastName"),
                                displayPlayer.getString("DateOfBirth"),
                                displayPlayer.getString("Nationality"),
                                displayPlayer.getString("Height"),
                                displayPlayer.getString("Position"),
                                displayPlayer.getString("StrongFoot"),
                                displayPlayer.getInt("TeamId")
                        ));
                        table.setItems(data);
                    }
                    mystatement.close();
                    displayPlayer.close();

                } catch (Exception err) {
                    System.out.println("Load Table Error: " + err);
                }
            });

        // Add a listener to print the selected item to console when selected
        table.getSelectionModel().selectedItemProperty().addListener((observableValue, oldValue, newValue) -> {
            if (newValue != null) {
                //Auto fills edit box on databse click
                String playerId_text = String.valueOf(newValue.getId());
                playerID.setText(playerId_text);
                    playerID.setDisable(true);
                firstname1.setText(newValue.getFirstName());
                lastname1.setText(newValue.getLastName());
                datePicker1.getEditor().setText(newValue.getBirthdate());
                    datePicker1.setDisable(true);
                nationality1.setText(newValue.getNationality());
                height1.setText(newValue.getHeight());
                foot1.setText(newValue.getFoot());
                position1.setText(newValue.getPosition());
                String teamId_text = String.valueOf(newValue.getTeamId());
                teamID.setText(teamId_text);
            }
        });

        table.getColumns().addAll(column1, column2, column3, column4, column5, column6, column7, column8, column9);
        rightEditMenu.getChildren().addAll(table);
        //**** End Right Menu ****//

        //**** Start Bottom Menu ****//
        Edit = new Button("Update");
        Edit.setStyle("-fx-base: #ffad33;");
        Edit.setOnAction(e ->{
            try{
                int newPlayerid = Integer.parseInt(playerID.getText());
                int newTeamId = Integer.parseInt(teamID.getText());
                if (tableDisplay.validateInput(newTeamId, firstname1.getText(), lastname1.getText(), nationality1.getText(), height1.getText(), position1.getText(), foot1.getText())) {
                    //sends to database
                    tableDisplay.updatePlayer(newPlayerid, newTeamId, firstname1.getText(), lastname1.getText(), nationality1.getText(), height1.getText(), position1.getText(), foot1.getText());

                    playerID.clear();
                    firstname1.clear();
                    lastname1.clear();
                    nationality1.clear();
                    datePicker1.getEditor().clear();
                    height1.clear();
                    teamID.clear();
                    position1.clear();
                    foot1.clear();

                    Image image = new Image("/Images/Checkmark.png");
                    Notifications.create()
                            .title("Success")
                            .text("Player has been Updated \nReload Table before making any more changes")
                            .graphic(new ImageView(image))
                            .hideAfter(Duration.seconds(3))
                            .position(Pos.TOP_CENTER)
                            .showInformation();

                }
            } catch (Exception edit_error){
                System.out.println("Edit Error: " + edit_error);
            }

        });

        Remove = new Button("Remove");
        Remove.setStyle("-fx-base: #ff1a1a;");
        Remove.setOnAction(e->{
            try{
                boolean result = ConfirmationBox.display("Delete", "Are you sure you want to Remove player?");
                if (result == true){
                   //Delete Player
                   try{
                       int newPlayerid = Integer.parseInt(playerID.getText());
                       System.out.println(newPlayerid);
                       if (tableDisplay.deletePlayer(newPlayerid)) {

                           Image image = new Image("/Images/Checkmark.png");
                           Notifications.create()
                                   .title("Success")
                                   .text("Player has been Removed \nReload Table before making any more changes")
                                   .graphic(new ImageView(image))
                                   .hideAfter(Duration.seconds(3))
                                   .position(Pos.TOP_CENTER)
                                   .showInformation();
                       }

                   } catch (Exception deletePlayerError){
                       System.out.println("Delete Player Error: " + deletePlayerError);
                   }
                }
            } catch(Exception remover_error){
                System.out.println("Remover Player Error: " + remover_error);
            }
        });

        bottomEditMenu.setAlignment(Pos.CENTER);
        //bottomEditMenu.setMargin(Edit, new Insets(15,900,20,0));
        bottomEditMenu.setMargin(Edit, new Insets(0,53,3,0));
        bottomEditMenu.setMargin(Remove, new Insets(15,900,20,0));
        //**** End Bottom Menu ****//

        //Get Children
        bottomEditMenu.getChildren().addAll(Edit, Remove);
        leftEditMenu.getChildren().addAll(choiceBox2, load, teamIdAlert, playerID, firstname1, lastname1, datePicker1, nationality1, height1, position1, foot1, teamID);
        leftEditMenu.setMargin(choiceBox2, new Insets(50,0,0,85));
        leftEditMenu.setMargin(playerID, new Insets(50,0,0,60));
        leftEditMenu.setMargin(firstname1, new Insets(10,0,0,60));
        leftEditMenu.setMargin(lastname1, new Insets(10,0,0,60));
        leftEditMenu.setMargin(datePicker1, new Insets(10,0,0,60));
        leftEditMenu.setMargin(nationality1, new Insets(10,0,0,60));
        leftEditMenu.setMargin(height1, new Insets(10,0,0,60));
        leftEditMenu.setMargin(position1, new Insets(10,0,0,60));
        leftEditMenu.setMargin(foot1, new Insets(10,0,0,60));
        leftEditMenu.setMargin(teamID, new Insets(10,0,0,60));
        leftEditMenu.setAlignment(Pos.TOP_LEFT);
        leftEditMenu.setMargin(load, new Insets(-25,0,0,208));
        leftEditMenu.setMargin(teamIdAlert, new Insets(-25,0,0,10));


        layout2 = new BorderPane();
        layout2.setLeft(leftEditMenu);
        layout2.setRight(rightEditMenu);
        layout2.setTop(menuBar2);
        layout2.setBottom(bottomEditMenu);

        scene3 = new Scene(layout2, 1200, 670);

        /////////////////////////////////////////// END EDIT PLAYER SCENE ////////////////////////////////

        window.setScene(scene1);
        window.show();
    }
}
