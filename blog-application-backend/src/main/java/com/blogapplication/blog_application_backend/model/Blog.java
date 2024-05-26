package com.blogapplication.blog_application_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Entity
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "blogId")
    private Integer blogId;

    @NotNull
    @Size(min = 10, max = 100)
    private String shortDescription;

    @NotNull
    @Size(min = 10, max = 1000)
    private String BlogDescription;


    @Column(name = "likeCount")
    private Integer likeCount;


    @OneToMany(mappedBy = "blog")
    public List<Comment> comments;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    private String imageUrl;
}
