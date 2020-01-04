package az.developia.todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/validations")
@CrossOrigin(origins={"http://localhost:4200"})
public class ValidationRestController {

	@GetMapping
	public boolean validateUser( ){
		boolean result=true;
		
		
		
		return result;
	}
}

 

