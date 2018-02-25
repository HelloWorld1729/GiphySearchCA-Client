/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sa45.ca.giphysearch;

import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.sql.DataSource;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author welcome
 */
@WebServlet(urlPatterns="/saveGiphy/*")
public class SaveGiphyServlet extends HttpServlet{

    
    @Resource(lookup="jdbc/giphy_search")
    private  DataSource connPool;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
         //To change body of generated methods, choose Tools | Templates.
//         JsonArrayBuilder gbuilder = Json.createArrayBuilder();
//         
//         String params = req.getParameter("username");
//         System.out.println(params);
//         try(Connection conn = connPool.getConnection())
//         {
//             Statement stmt = conn.createStatement();
//             ResultSet rs = stmt.executeQuery("Select * from usergiphy");
//            
//             
//             while(rs.next())
//             {
//                 JsonObject gipgy = Json.createObjectBuilder().add("username",rs.getString("username"))
//                         .add("giphyid",rs.getString("giphyid")).build();
//                 gbuilder.add(gipgy);
//                 
//             }
//             rs.close();
//         } 
//         catch (SQLException ex) {
//             log(ex.getMessage());
//             resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
//            throw new IOException(ex);
//        }
//        try(PrintWriter pw = resp.getWriter())
//        {
//            resp.setStatus(HttpServletResponse.SC_OK);
//            resp.setContentType(MediaType.APPLICATION_JSON);
//            pw.println(gbuilder.build().toString());
//        }
//    }
//    
//    
     String pathInfo = req.getPathInfo();
       //Assume no error checks
      //getting two values by string split eg. /S66-Company66 to "S66" and "Company66"
       String splitarray[] = pathInfo.split("-");
        String username = splitarray[0].substring(1);
        String imageid = splitarray[1];

        try (Connection conn = connPool.getConnection()) {
                 
           PreparedStatement ps = conn.prepareStatement
                ("INSERT INTO giphy_search.usergiphy VALUES (?,?)");

            ps.setString(1, username);
            ps.setString(2,imageid );
            
            ps.executeUpdate();
            
        } catch (SQLException ex) {
            log(ex.getMessage());
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            
        }

    }
    
    
    
}
