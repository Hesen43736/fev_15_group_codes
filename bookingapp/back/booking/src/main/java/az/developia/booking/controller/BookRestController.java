package az.developia.booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.booking.dao.BookDAO;
import az.developia.booking.model.Book;

@RestController
@RequestMapping(path="/books")

public class BookRestController {

	@Autowired
	private BookDAO bookDAO;
	
	
	@GetMapping
	public void saveBookTestMethod(){
		Book book=new Book();
		book.setName("Java 12");
		book.setAuthor("James Gosling");
		book.setDescription("Java 12 description");
		book.setImage("java12.png");
		book.setQuantity(1000);
		book.setPageCount(355);
		 
		bookDAO.save(book);
		
	}
}
