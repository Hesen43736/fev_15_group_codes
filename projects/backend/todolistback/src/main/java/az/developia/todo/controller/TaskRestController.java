package az.developia.todo.controller;

 
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import az.developia.todo.db.DB;
import az.developia.todo.model.Task;

@RestController
@RequestMapping(path="/tasks")
@CrossOrigin(origins={"http://localhost:4200"})
public class TaskRestController {

	@RequestMapping(method=RequestMethod.POST)
	public void addTask(@RequestBody Task task){
		DB.tasks.add(task);
	}
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Task> findAll(){
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return DB.tasks;
	}
	
	
	
}






