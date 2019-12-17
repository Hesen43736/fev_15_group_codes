package az.developia.todo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import az.developia.todo.dao.ComputerDAO;
import az.developia.todo.db.DB;
import az.developia.todo.model.Computer;
import az.developia.todo.service.CpuService;

@RestController
@RequestMapping(path="/students")
public class TestRestController {

	 @Autowired
	private   ComputerDAO computerDAO;
	
	
	 @Autowired
	  
	 private CpuService cpuService;
	 
public TestRestController() {
	
}

	@RequestMapping(path="/name",method=RequestMethod.GET)
	public String getStudentName(){
		cpuService.printYourPower();
		return "Məmmədcan";
		
	}
	
	
	@RequestMapping(path="/surname",method=RequestMethod.GET)
	public String getStudentSurname(){
		return "Caniyev";
	}
	
	@RequestMapping(path="/computer",method=RequestMethod.GET)
	public Computer getComputer(){
		Computer computer=new Computer();
		computer.setColor("blue");
		computer.setCpu("intel i7");
		computer.setName("Dell");
		computer.setRam(16);
		return computer;
	}
	
	
	@RequestMapping(path="/computers",method=RequestMethod.GET)
	public List<Computer> getComputers(){
		 
		return computerDAO.findAll();
	}
	
	
	@RequestMapping(path="/computer",method=RequestMethod.POST)
	public void addComputer(@RequestBody Computer computer){
		computerDAO.save(computer);
	}
	
	@RequestMapping(path="/computers/{id}",method=RequestMethod.GET)
	public Computer getComputerById(@PathVariable(name="id") Integer id){
		return DB.computers.get(id);
	}
	
	@RequestMapping(path="/computers/{id}",method=RequestMethod.DELETE)
	public void deleteComputerById(@PathVariable(name="id") Integer id){
		  DB.computers.remove( id);
	}
	
}














