package az.developia.booking.controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
		 book.setRegister(Timestamp.valueOf(LocalDateTime.of(2019, 6, 16, 12, 12,12)));
		bookDAO.save(book);
		
	}
	
	
	@GetMapping(path="/find-all")
	public List<Book> findAll(){ 
	return	bookDAO.findAll();
		
	}
	@GetMapping(path="/find-by-id/{id}")
	public Book  findById(@PathVariable(name="id") Integer id){ 
	return	bookDAO.findById(id).get();
		
	}
	
	
	@GetMapping(path="/update")
	public void  update( ){ 
		Book book=new Book();
		book.setId(333); 
		book.setName("Java 121");
		book.setAuthor("James Gosling1");
		book.setDescription("Java 12 description1");
		book.setImage("java12.png1");
		book.setQuantity(10001);
		book.setPageCount(3551);
		 
		bookDAO.save(book);
		
	}
	
	
	
	
}
