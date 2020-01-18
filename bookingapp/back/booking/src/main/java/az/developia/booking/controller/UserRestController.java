package az.developia.booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.booking.dao.UserDAO;
import az.developia.booking.dao.UserJDBCDAO;
import az.developia.booking.model.User;

@RestController
@RequestMapping(path = "/users")

public class UserRestController {

	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private UserJDBCDAO userJDBCDAO;

	@PostMapping
	public User save(@RequestBody User user) {
		 
		user.setPassword("{noop}"+user.getPassword());
		User savedUser=userDAO.save(user);
		
		userJDBCDAO.createUserAuthority(user.getUsername());
		return savedUser;

	}

}
