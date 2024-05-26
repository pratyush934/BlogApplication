package com.blogapplication.blog_application_backend.repository;

import com.blogapplication.blog_application_backend.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
