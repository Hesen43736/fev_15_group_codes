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
public class CategoryDAO {

	@Autowired
	private DataSource source;
	
	public Integer saveCategory(Category ct){
		Integer id=0;
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=null;
			ResultSet r=null;
			if(ct.getId()>0){
				 ps=c.prepareStatement("update category set name=? where id=?");
				 ps.setString(1, ct.getName()); 
				 ps.setInt(2, ct.getId());
				 ps.executeUpdate();
				
			}else{
			  ps=c.prepareStatement("insert into category (name) "
					+ " values (?,?,?); ",Statement.RETURN_GENERATED_KEYS);
			ps.setString(1,ct.getName() );
			 
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
	
	public List<Category> findAll(){
		List<Category> categories=new ArrayList<>();
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=c.prepareStatement("select * from category");
			 
			ResultSet r = ps.executeQuery();
			while (r.next()) {
				 
				Category category=new Category();
				category.setId(r.getInt("id"));
				category.setName(r.getString("name"));
				 
				categories.add(category);
			} 
			r.close();
			ps.close();
			c.close();
		}catch(Exception exc){
			exc.printStackTrace();
		} 
		return categories;
	}

	public void deleteById(Integer id) {
		try{
			Connection c=source.getConnection();
			PreparedStatement ps=c.prepareStatement("delete from category where id="+id);
			 ps.executeUpdate();
			ps.close();
			c.close(); 
		}catch(Exception exc){
			exc.printStackTrace();
		} 
		
	}
	
	
	
}











