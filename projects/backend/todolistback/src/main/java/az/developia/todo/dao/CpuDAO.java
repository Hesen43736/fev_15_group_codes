package az.developia.todo.dao;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import az.developia.todo.service.CpuService;

@Component 
@Primary
public class CpuDAO implements CpuService {

	@Override
	public void printYourPower() {
		System.out.println("Core i9");
		
	}

}
