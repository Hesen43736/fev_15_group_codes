package az.developia.todo.controller;

 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import az.developia.todo.dao.CategoryDAO;
import az.developia.todo.dao.TaskDAO;
import az.developia.todo.db.DB;
import az.developia.todo.model.Category;
import az.developia.todo.model.Task;

@RestController
@RequestMapping(path="/categories")
@CrossOrigin(origins={"http://localhost:4200"})
public class CategoryRestController {

	@Autowired
	private CategoryDAO categoryDAO;
	
	
	@RequestMapping(method=RequestMethod.POST)
	public  Category addCategory(@RequestBody  Category c){
		
		int newId=categoryDAO.saveCategory(c);
	c.setId(newId);
		
		return c;
	}
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Category> findAll(){
		 
		return categoryDAO.findAll();
	}
	
	
	@DeleteMapping(path="/{id}")
	public void deleteById(@PathVariable(name="id") Integer id){
		categoryDAO.deleteById(id);
	}
	
}






