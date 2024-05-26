package com.blogapplication.blog_application_backend.repository;

import com.blogapplication.blog_application_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
