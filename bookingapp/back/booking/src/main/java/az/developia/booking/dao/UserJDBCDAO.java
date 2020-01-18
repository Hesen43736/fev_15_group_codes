package az.developia.booking.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserJDBCDAO {

	@Autowired
	private DataSource dataSource;

	public void createUserAuthority(String username) {

		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement("insert into authorities (username,authority) values (?,?)");
			ps.setString(1, username);
			ps.setString(2, "ROLE_ADMIN");
			ps.executeUpdate();
			ps.close();
			conn.close();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
