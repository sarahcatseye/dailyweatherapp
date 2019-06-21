package com.example.springytest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = LocationDeserializer.class)
public class Location {
    private String title;
    private int woeid;
    private Forecast forecast;


    public Location(String title, int woeid) {
        this.title = title;
        this.woeid = woeid;
    }

    public String getTitle() {
        return title;
    }

    public int getWoeid() {
        return woeid;
    }

    public Forecast getForecast() {return forecast;}

    public void setForecast(Forecast forecast) {
        this.forecast = forecast;
    }
}
