package az.developia.booking.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.booking.model.User;

public interface UserDAO extends JpaRepository<User, String> {

}
