package az.developia.todo.dao;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import az.developia.todo.db.DB;
import az.developia.todo.model.Computer;

@Component

public class ComputerDAO {
public List<Computer> findAll(){
	return DB.computers;
	
}
public void save(Computer computer){
	DB.computers.add(computer);
}
}
