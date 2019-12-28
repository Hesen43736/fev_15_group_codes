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

import az.developia.todo.dao.TaskDAO;
import az.developia.todo.db.DB;
import az.developia.todo.model.Task;

@RestController
@RequestMapping(path="/tasks")
@CrossOrigin(origins={"http://localhost:4200"})
public class TaskRestController {

	@Autowired
	private TaskDAO taskDAO;
	
	
	@RequestMapping(method=RequestMethod.POST)
	public Task addTask(@RequestBody Task task){
		
		int newId=taskDAO.saveTask(task);
	task.setId(newId);
		
		return task;
	}
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Task> findAll(){
		 
		return taskDAO.findAll();
	}
	
	
	@DeleteMapping(path="/{id}")
	public void deleteById(@PathVariable(name="id") Integer id){
	for (int i = 0; i < DB.tasks.size(); i++) {
		if(DB.tasks.get(i).id==id){
			DB.tasks.remove(i);
			break;
		}
	}	
	}
	
}






