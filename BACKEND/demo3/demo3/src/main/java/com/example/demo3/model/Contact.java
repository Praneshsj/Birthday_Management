package com.example.demo3.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Contact {

    @Id
    
    private String name;
    private String email;
    private String message;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    
    
    
}
