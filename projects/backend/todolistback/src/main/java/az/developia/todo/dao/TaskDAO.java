package az.developia.todo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import az.developia.todo.model.Category;
import az.developia.todo.model.Task;

@Component
public class TaskDAO {

	@Autowired
	private DataSource source;
	
	public Integer saveTask(Task task){
		Integer id=0;
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=null;
			ResultSet r=null;
			if(task.getId()>0){
				 ps=c.prepareStatement("update task set task=?,day=?,category_id=?,register=? where id=?");
				 ps.setString(1, task.getTask());
				 ps.setInt(2, task.getDay());
				 ps.setInt(3, task.getCategory().getId());
				 ps.setDate(4, task.getRegister());
				 ps.setInt(5, task.getId());
				 
				 ps.executeUpdate();
				
			}else{
			  ps=c.prepareStatement("insert into task (task,day,category_id,register) "
					+ " values (?,?,?,?); ",Statement.RETURN_GENERATED_KEYS);
			ps.setString(1,task.getTask() );
			ps.setInt(2, task.getDay());
			ps.setInt(3, task.getCategory().getId());
			ps.setDate(4, task.getRegister());
			ps.executeUpdate();
			  r = ps.getGeneratedKeys();
			if (r.next()) {
				id = r.getInt(1);
			}
			}
			
			
			
			if(r!=null){
			r.close();}
			ps.close();
			c.close();
		}catch(Exception exc){
			exc.printStackTrace();
		}
		
		return id;
	}
	
	public List<Task> findAll(){
		List<Task> tasks=new ArrayList<>();
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=c.prepareStatement("select * from task_view");
			 
			ResultSet r = ps.executeQuery();
			while (r.next()) {
				Task t=new Task();
				t.setId(r.getInt("id"));
				t.setTask(r.getString("task"));
				t.setDay(r.getInt("day"));
				t.setRegister(r.getDate("register"));
				t.setStatus(r.getString("status"));
				 
				Category category=new Category();
				category.setId(r.getInt("category_id"));
				category.setName(r.getString("category_name"));
				t.setCategory(category);
				tasks.add(t);
			} 
			r.close();
			ps.close();
			c.close();
		}catch(Exception exc){
			exc.printStackTrace();
		} 
		return tasks;
	}

	public void deleteById(Integer id) {
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=c.prepareStatement("delete from task where id="+id);
			 ps.executeUpdate();
			ps.close();
			c.close(); 
		}catch(Exception exc){
			exc.printStackTrace();
		} 
		
	}
	
	
	
	
	public void changeStatusById(Integer id,String status) {
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=c.prepareStatement
					("update task set status='"+status+"' where id="+id);
			 ps.executeUpdate();
			ps.close();
			c.close(); 
		}catch(Exception exc){
			exc.printStackTrace();
		} 
		
	}
	
}











