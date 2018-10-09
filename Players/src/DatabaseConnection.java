import java.sql.*;
import java.sql.Connection;

public class DatabaseConnection {
    Connection myConn;

    public  Connection getConnection() throws Exception{
        try {
            myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/seriea", "root", "looser11");
            System.out.println("Connected to Database");
        } catch (Exception e){
            System.out.println("Error " + e);
        }
        return null;
    }

}
