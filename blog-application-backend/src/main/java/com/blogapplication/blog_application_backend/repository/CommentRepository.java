package com.blogapplication.blog_application_backend.repository;

import com.blogapplication.blog_application_backend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
