package az.developia.todo.dao;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import az.developia.todo.service.CpuService;
@Component
 
public class CpuRepository implements CpuService {

	@Override
	public void printYourPower() {
		System.out.println("amd");

	}

}
