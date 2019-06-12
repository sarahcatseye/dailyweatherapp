package com.example.springytest;

public class Location {
    private String title;
    private LocationType locationType;
    private float latitude;
    private float longitude;
    private int woeid;
    private int distance;

    public Location(String title, LocationType locationType, float latitude, float longitude, int woeid) {
        this.title = title;
        this.locationType = locationType;
        this.latitude = latitude;
        this.longitude = longitude;
        this.woeid = woeid;
    }

    public Location(String title, LocationType locationType, float latitude, float longitude, int woeid, int distance) {
        this(title, locationType, latitude, longitude, woeid);
        this.distance = distance;
    }
}
