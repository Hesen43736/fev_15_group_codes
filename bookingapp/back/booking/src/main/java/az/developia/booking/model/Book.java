package az.developia.booking.model;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	
	private String description;
	private String image;
	private Integer pageCount;
	private Integer quantity;
	private Timestamp register;
	
	
	@ManyToMany(cascade=CascadeType.ALL)
	private List<Author> authors;
	public void addAuthor(Author author){
		if(authors==null){
			authors=new ArrayList<>();
		}
		authors.add(author);
	}
	
	
	
	
	
	
}
