import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.scene.image.Image;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class AlertBox {

    public static void display(String title, String message, boolean tf){  //tf determines whether or not alert box display image
        Stage window = new Stage();
        window.setResizable(false);
        if (tf == true) {
            window.getIcons().add(new Image("Images/Error.png"));
        }

        window.initModality(Modality.APPLICATION_MODAL); //Blocks user interaction until window closes
        window.setTitle(title);
        window.setMinWidth(300);
        window.setMinHeight(150);

        Label label = new Label();
        label.setText(message);
        Button closeButton = new Button("Exit");
        closeButton.setOnAction(e -> window.close());

        VBox layout = new VBox(10);
        layout.setAlignment(Pos.CENTER);
        layout.getChildren().addAll(label, closeButton);

        Scene scene = new Scene(layout);
        window.setScene(scene);
        window.show();
        window.showAndWait();
    }
}
