package com.blogapplication.blog_application_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.validator.constraints.UniqueElements;

import java.util.List;

/*
* This is User who will be owning the blog
* */

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Integer userId;

    @NotNull
    @Size(min = 2, max = 30)
    private String firstName;


    @NotNull
    @Size(min=2, max = 30)
    private String lastName;

    @NotNull
    @Size(max = 200)
    private String description;

    @NotNull
    @Email
    @Column(unique = true)
    private String emailId;

    @NotNull
    @Size(min = 6 , max = 20)
    private String password;

    @NotNull
    @Size(min = 6, max = 100)
    private String address;

    private String imageURL;

    private Integer numberOfBlogs;

    @OneToMany(mappedBy = "user")
    private List<Blog> blogs;


}
