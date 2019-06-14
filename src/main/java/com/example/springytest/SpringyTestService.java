package com.example.springytest;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class SpringyTestService {
    public List<Location> getLocationSearch(String location) throws IOException {
        String uri = "https://www.metaweather.com/api/location/search/?query=";
        String apiResult = HTTPrequest(uri + location);
        return deserializeToLocation(apiResult);
        //return HTTPrequest(uri + location);
    }

    public String getLocationSearch(String latt, String longi) throws IOException {
        String uri = "https://www.metaweather.com/api/location/search/?lattlong=";
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

    public List<Location> deserializeToLocation(String json) throws IOException, JsonParseException {
        ObjectMapper mapper = new ObjectMapper();
        List<Location> locationList = Arrays.asList(mapper.readValue(json, Location[].class));
        return locationList;
    }

    public Forecast deserializeToForecast(String json) throws IOException, JsonParseException {
        ObjectMapper mapper = new ObjectMapper();
        return null;
    }
}
