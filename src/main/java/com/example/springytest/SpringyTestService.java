package com.example.springytest;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

public class SpringyTestService {
    public String getLocationSearch(String location) throws IOException {
        String uri = "https://www.metaweather.com//api/location/search/?query=";
        return HTTPrequest(uri + location);
    }

    public String getLocationSearch(String latt, String longi) throws IOException {
        String uri = "https://www.metaweather.com//api/location/search/?lattlong=";
        return HTTPrequest(uri + latt + "," + longi);
    }

    public String getLocation(String woeid) throws IOException {
        String uri = "https://www.metaweather.com/api/location/";
        return HTTPrequest(uri + woeid);
    }

    public String getLocationDate(String woeid, String year, String month, String day) throws IOException {
        String uri = "https://www.metaweather.com/api/location/";
        return HTTPrequest(uri + woeid + "/" + year + "/" + month + "/" + day);
    }

    public String HTTPrequest(String uri) throws IOException {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response
                = restTemplate.getForEntity(uri, String.class);
        return response.getBody();
    }
}
