package az.developia.todo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import az.developia.todo.model.Task;

@Component
public class TaskDAO {

	@Autowired
	private DataSource source;
	
	public Integer saveTask(Task task){
		Integer id=0;
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=c.prepareStatement("insert into task (task,day,category_id) "
					+ " values (?,?,?); ",Statement.RETURN_GENERATED_KEYS);
			ps.setString(1,task.getTask() );
			ps.setInt(2, task.getDay());
			ps.setInt(3, task.getCategory().getId());
			ps.executeUpdate();
			ResultSet r = ps.getGeneratedKeys();
			if (r.next()) {
				id = r.getInt(1);
			}
			r.close();
			ps.close();
			c.close();
		}catch(Exception exc){
			exc.printStackTrace();
		}
		
		return id;
	}
	
}











