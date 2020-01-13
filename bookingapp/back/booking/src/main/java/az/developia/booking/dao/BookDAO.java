package az.developia.booking.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.booking.model.Book;

public interface BookDAO extends JpaRepository<Book, Integer> {

}
