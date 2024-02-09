package com.example.demo3.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue
    
    private String email;
    private String name;
    private String eventname;
    private String BOD;
    private List<String> FoodSelection;
    private List<String> ActivitySelection;
    private List<String> DanceSelection;
    private String additionaldescription;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEventname() {
        return eventname;
    }
    public void setEventname(String eventname) {
        this.eventname = eventname;
    }
    public String getBOD() {
        return BOD;
    }
    public void setBOD(String bOD) {
        BOD = bOD;
    }
    public List<String> getFoodSelection() {
        return FoodSelection;
    }
    public void setFoodSelection(List<String> foodSelection) {
        FoodSelection = foodSelection;
    }
    public List<String> getActivitySelection() {
        return ActivitySelection;
    }
    public void setActivitySelection(List<String> activitySelection) {
        ActivitySelection = activitySelection;
    }
    public List<String> getDanceSelection() {
        return DanceSelection;
    }
    public void setDanceSelection(List<String> danceSelection) {
        DanceSelection = danceSelection;
    }
    public String getAdditionaldescription() {
        return additionaldescription;
    }
    public void setAdditionaldescription(String additionaldescription) {
        this.additionaldescription = additionaldescription;
    }
    
   
    
}
